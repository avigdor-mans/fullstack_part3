(this.webpackJsonppart2=this.webpackJsonppart2||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(14),l=n.n(u),c=n(4),o=n(2),i=function(e){var t=e.text,n=e.val,a=e.handler;return r.a.createElement("p",null,t," ",r.a.createElement("input",{value:n,onChange:a})," ")},m=function(e){var t=e.addFun,n=e.nameVal,a=e.numberVal,u=e.nameHandler,l=e.numberHandler;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:u})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:l})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},d=function(e){var t=e.person,n=e.deleteFun;return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.name," "),r.a.createElement("td",null," ",t.number),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(e){return n(t,e)}},"delete")))},f=function(e){var t=e.personsList,n=e.toFilter,a=e.deleteFun;return r.a.createElement("table",null,r.a.createElement("tbody",null,t.filter((function(e){return e.name.substring(0,n.length).toLowerCase()===n.toLowerCase()})).map((function(e){return r.a.createElement(d,{key:e.id,person:e,deleteFun:a})}))))},s=n(3),b=n.n(s),p="http://localhost:3001/api/persons",h=function(){return b.a.get(p).then((function(e){return e.data}))},E=function(e){return b.a.post(p,e).then((function(e){return e.data}))},v=function(e,t){return b.a.put("".concat(p,"/").concat(e),t).then((function(e){return e.data}))},g=function(e){return b.a.delete("".concat(p,"/").concat(e)).then((function(e){return e.data}))},w=function(e){var t=e.msg,n=e.style;return null===t?null:r.a.createElement("p",{style:n},t)},j=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],u=t[1],l=Object(a.useState)(""),d=Object(o.a)(l,2),s=d[0],b=d[1],p=Object(a.useState)(""),j=Object(o.a)(p,2),O=j[0],y=j[1],S=Object(a.useState)(""),k=Object(o.a)(S,2),F=k[0],C=k[1],D=Object(a.useState)(null),H=Object(o.a)(D,2),L=H[0],T=H[1],V=Object(a.useState)(""),x=Object(o.a)(V,2),B=x[0],I=x[1];Object(a.useEffect)((function(){h().then((function(e){return u(e.sort((function(e,t){return e.name>t.name?1:-1})))}))}),[]);var J=function(e){return I({color:e,background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10})};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(w,{msg:L,style:B}),r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement(i,{text:"filter shown with",val:F,handler:function(e){e.preventDefault(),C(e.target.value)}}))),r.a.createElement("h3",null,"add a new contact"),r.a.createElement(m,{addFun:function(e){e.preventDefault();var t=n.filter((function(e){return s===e.name})),a={name:s,number:O};""!==O&&""!==s&&0===t.length?E(a).then((function(e){u(n.concat(e).sort((function(e,t){return e.name>t.name?1:-1}))),J("green"),T("Added ".concat(s)),setTimeout((function(){T(null)}),5e3),b(""),y("")})):""===O||""===s?window.alert("please put all the contact info"):window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))&&v(t[0].id,Object(c.a)(Object(c.a)({},t[0]),{},{number:O})).then((function(e){u(n.map((function(t){return t.id!==e.id?t:e})).sort((function(e,t){return e.name>t.name?1:-1}))),J("green"),T("".concat(e.name," was update with a new number")),setTimeout((function(){T(null)}),5e3),b(""),y("")}))},nameVal:s,numberVal:O,nameHandler:function(e){e.preventDefault(),b(e.target.value)},numberHandler:function(e){e.preventDefault(),y(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement("div",null,r.a.createElement(f,{personsList:n,toFilter:F,deleteFun:function(e){window.confirm("Delete ".concat(e.name,"?"))&&g(e.id).then((function(t){u(n.filter((function(t){return t.id!==e.id})).sort((function(e,t){return e.name>t.name?1:-1}))),J("green"),T("".concat(e.name," was deleted")),setTimeout((function(){T(null)}),5e3)})).catch((function(t){J("red"),T("Information of ".concat(e.name," has already removed from server")),setTimeout((function(){T(null)}),5e3),u(n.filter((function(t){return t.id!==e.id})))}))}})))};n(37);l.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6bdc3567.chunk.js.map