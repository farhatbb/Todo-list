#!/usr/bin/env node
import inquirer from "inquirer";
let todos =[];
let condition =true

while(condition){
    let Add = await inquirer.prompt([
        {message: "What you want add in your todos", type: "input", name:"todo"},

        {message: "Do you want to add some more items", type:"confirm", name:"confirm",default:"false"}, ],);
    

        todos.push(Add.todo);
        condition=Add.confirm;
        console.log(todos);
}