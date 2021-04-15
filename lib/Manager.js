const Employee  = require('./Employee'); 


class Manager extends Employee {
    constructor(name, id, email, office_number) {
      super(name, id, email);
      this.office_number = office_number;
      this.team = [this]; 
    }
  
    getBody() {
        return `<div class="card-body">
        <h5 class="card-title">Id ${this.id}</h5>
        <p class="card-text">Email: <a href="mailto:${this.email}" >${this.email}</a></p>
        <p  class="card-text">Office Number: ${this.office_number}</p>
      </div>`;
    }

    
  addPerson(personObj){
    this.team.push(personObj); 

  }

  getAllTeam() {
    return this.team; 
  }
  }

  
  module.exports = Manager;
  