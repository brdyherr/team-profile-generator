const inquirer = require('inquirer');
const Employee  = require('./Employee'); 


class Engineer extends Employee {
    constructor(name, id, email_address, github_username) {
          
    super(name, id, email_address); 
    this.github_username = github_username;
                          
      
     
    }
  
    getBody() {
        return `<div class="card-body">
        <h5 class="card-title">Id ${this.id}</h5>
        <p class="card-text">Email: <a href="mailto:${this.email}" >${this.email}</a></p>
        <p  class="card-text">Github UserName: ${this.github_username}</p>
      </div>`;
    }
  }
  
  module.exports = Engineer;
  