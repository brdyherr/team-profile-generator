const inquirer = require('inquirer');
const Manager = require("./Manager"); 
const Intern = require("./Intern"); 
const fs = require("fs"); 

const Engineer = require("./Engineer"); 


/**
 * GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
 * 
 */

const _log = console.log; 

class ManagementApplication {

    start() {
    
        this.manager = null;  

              inquirer
              .prompt({
                type: 'text',
                name: 'manager_name',
                message: 'What is team manager\'s name?'
              })
              .then(({ manager_name }) => {
                //this.player = new Player(name);                        
                    inquirer
                    .prompt({
                    type: 'text',
                    name: 'email_address',
                    message: 'What is your email-address?'
                    })
                    .then(({ email_address }) => {
                    inquirer
                            .prompt({
                            type: 'text',
                            name: 'employee_ID',
                            message: 'What is your employee ID?'
                            })
                            .then(({ employee_ID }) => {
                                        inquirer
                                        .prompt({
                                        type: 'text',
                                        name: 'office_number',
                                        message: 'What is your office number?'
                                        })
                                        .then(({ office_number }) => {

                                            this.manager = new Manager(manager_name, employee_ID, email_address, office_number); 

                                            this.addPersonToTeam();
                                            
                                           
                                        });

                            });

                    });

               
              });


          
    }


    addPersonToTeam(){

    

        inquirer
        .prompt({
            type: 'list',
            message: 'Do you want to add an intern or an engineer to finish building my team? ',
            name: 'action',
            choices: ['engineer', 'intern', 'finish']

        })
        .then(({ action }) => {

            
            if (action == 'engineer'){

                inquirer
                .prompt({
                  type: 'text',
                  name: 'nameP',
                  message: 'What is your name?'
                })
                .then(({ nameP }) => {                  
                      inquirer
                      .prompt({
                      type: 'text',
                      name: 'email_addressP',
                      message: 'What is your email-address?'
                      })
                      .then(({ email_addressP }) => {
                      inquirer
                              .prompt({
                              type: 'text',
                              name: 'idP',
                              message: 'What is your ID?'
                              })
                              .then(({ idP }) => {
                                          inquirer
                                          .prompt({
                                          type: 'text',
                                          name: 'githubusernameP',
                                          message: 'What is your git-hub username?'
                                          })
                                          .then(({ githubusernameP }) => {
        

                                                                
                                            this.manager.addPerson(new Engineer(nameP, idP, email_addressP, githubusernameP)); 
                                            this.addPersonToTeam(); 
                                          });
                                        });
                                    });
                                });
             
               
               
                
            }else if (action == 'intern') {  ///if (action == 'inteer')
                inquirer
    .prompt({
      type: 'text',
      name: 'name',
      message: 'What is your name?'
    })
    .then(({ name }) => {                  
          inquirer
          .prompt({
          type: 'text',
          name: 'email_address',
          message: 'What is your email-address?'
          })
          .then(({ email_address }) => {
          inquirer
                  .prompt({
                  type: 'text',
                  name: 'id',
                  message: 'What is your ID?'
                  })
                  .then(({ id }) => {
                              inquirer
                              .prompt({
                              type: 'text',
                              name: 'school',
                              message: 'What is your schoolName?'
                              })
                              .then(({ schoolName }) => {
                               
                                this.manager.addPerson(new Intern(name, id, email_address, schoolName)); 
                                this.addPersonToTeam(); 
                              });
                            });
                        });
                    });
               
                
            }else {
                // name of file... 

                
                fs.writeFile("./gitinformation.html", ``, err => {
                });
                fs.writeFile("./gitinformation.html", `<!DOCTYPE html>
                <html lang="en">
                <head>
                  <title>Bootstrap Card</title>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
                  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                </head>
                <body> 
                 
                <div class="container">`,  {flag : "a+"}, err => {
                });
                for (const x of this.manager.getAllTeam()){
                        fs.writeFile("./gitinformation.html", x.getBody(), {flag : "a+"}, err => {
                                if (err){
                                    _log(err); 
                                    return; 
                                }
                        }); 
                }

                let lastContent = `</div></body>
                </html>
                `;
                fs.writeFile("./gitinformation.html", lastContent, {flag : "a+"}, err => {
                    if (err){
                        _log(err); 
                        return; 
                    }
            }); 
            }

        });





    }

}


module.exports = ManagementApplication; 