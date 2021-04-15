const inquirer = require('inquirer');
const Employee  = require('./Employee'); 


class Intern extends Employee {
constructor(name, id, email_address, schoolName) {
      

    super(name, id, email_address); 
    this.school = schoolName;
                          
    }
  
    getBody() {
        return `<div class="card-body">
        <h5 class="card-title">Id ${this.id}</h5>
        <p class="card-text">Email: <a href="mailto:${this.email}" >${this.email}</a></p>
        <p  class="card-text">School: ${this.school}</p>
      </div>`;
    }
  }
  
  module.exports = Intern;
  