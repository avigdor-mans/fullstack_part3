const mongoose = require('mongoose')
if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
  }
  
const password = process.argv[2]
  
const url = `mongodb+srv://avi_mans:${password}@cluster0.z4r3m.mongodb.net/persons?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String 
})
  
const Person = mongoose.model('Person', personSchema)
if(process.argv.length===3){
    Person.find({}).then(result => {
        console.log("phonebook:")
        result.forEach(person => {
          console.log(person)
        })
        mongoose.connection.close()
        process.exit(1)
    }).catch(error => console.log(error))
}
else if(process.argv.length===5){
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4],
      })
      person.save().then(result => {
        console.log(`added ${result.name} number ${result.number} to phonebook`)
        mongoose.connection.close()
    }).catch(error => console.log(error))
}

  

  
