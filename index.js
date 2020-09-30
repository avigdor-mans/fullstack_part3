require('dotenv').config();
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
app.use(express.static('build'))
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))
app.use(cors())
morgan.token('data', (res,req) => JSON.stringify(res.body))

const Person = require('./models/persons')


const generateId = ()=> Math.floor(Math.random()*100000)

app.get('/api/persons', (request, response, next) => {
  Person.find({}).then(persons => {
    response.json(persons)
  }).catch(error => next(error))
})

app.get('/info', async (request, response) => {
  const Allpersons = await Person.find({})
  response.send(`<div>Phonebook has info for ${Allpersons.length} people
   <br/> ${new Date()}</div>`)
})

app.get('/api/persons/:id', (request, response, next) => {
 Person.findById(request.params.id)
    .then(person => {
      person ? response.json(person) : response.status(404).end()
    })
    .catch(error => next(error))
  })

  app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
    .then(person => {
      person ? response.status(204).end() : response.status(404).end()
    })
    .catch(error => next(error))
  })

  app.post('/api/persons', (request, response) => {
    const body = request.body
    if(!body || !body.name || !body.number){
      return response.status(400).json({
        error: "name or number is missing"
      })
    }
    Person.find({name:body.name}).then(result=>{
      if(result.length>0){
        return response.status(400).json({
          error: "name must be unique"
        })
      }
    })
  
    const person = new Person({
      'name': body.name,
      'number': body.number,
      'id': generateId()
    })
    person.save().then(savedPerson => {
      response.json(savedPerson.toJSON())
    }).catch((error) => {
      assert.isNotOk(error,'Promise error');
      done();
    });
  })

  app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body
  
    const person = {
      name: body.name,
      number: body.number
    }
  
    Person.findByIdAndUpdate(request.params.id, person, { new: true})
      .then(updatedPerson => response.json(updatedPerson))
      .catch(error => next(error))
  })

  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  app.use(unknownEndpoint)

  const errorHandler = (error, request, response, next) => {
    console.error(error.message)
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } 
    next(error)
  }
  app.use(errorHandler)
  
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})