#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


class Student {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

class Person {
  students: Student[] = [];
  addStudent(obj: Student) {
    this.students.push(obj);
  }
}
const persons = new Person();

const programStart = async (persons: Person) => {
    do{
  console.log(chalk.rgb(11, 242, 7).bold(("\t \n Welcome to the Siddiqa Student Management System")));
  console.log(chalk.rgb(246, 123, 127).bold(("\t \n Please select an option")));
  const ans = await inquirer.prompt([
    {
      name: "select",
      type: "list",
      message:chalk.rgb(112, 0, 127).bold(" \t \n Whom would you like to interact with?"),
      choices: ["staff", "student", "exit"]
    }
  ])
  if (ans.select == "staff") {
    console.log(chalk.rgb(239, 247, 4).bold("\t\n You approach the staff room. Please feel free to ask any question."));
  } else if (ans.select == "student") {
    const ans = await inquirer.prompt({
      name: "student",
      type: "input",
      message: chalk.rgb(4, 247, 57).bold("\t \n Enter the name of the student you want to interact with:")
    });
    const student = persons.students.find(val => val.name == ans.student)

    if(!student){
        console.log(chalk.rgb(247, 4, 49).bold(("\t\n Student not found")));
        const name = new Student(ans.student)
        persons.addStudent(name)
        console.log(chalk.rgb(246, 123, 127).bold(`Hello i am ${name.name}, Nice to meet you.`));
        
        console.log(chalk.rgb(131, 97, 74).bold(("\t\n Student Added Successfully!")));
        console.log(chalk.rgb(0, 255, 255).bold("\t\n Current Students List: "));
        console.log(persons.students);
        
        
      }else {
        console.log(chalk.rgb(231, 140, 15).bold(`\t \nHello i am ${student.name}, Nice to see you Again!.`));
        console.log(chalk.rgb(246, 123, 127).bold("\t\n Existing Students List: "));
        console.log(persons.students);
        
        
      }
     } else if (ans.select == "exit"){
console.log(chalk.magenta.bold(" \t \n Exiting from  the Student management System Successfully!"));
process.exit();

  }

}while(true)
}
programStart(persons)