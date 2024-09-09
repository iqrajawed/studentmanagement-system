#! usr/bin/env node


import inquirer from "inquirer";

const randomNumber:number=Math.floor(1000 + Math.random()* 9000)

let myBAlance:number = 100000

 let anSwer =await inquirer.prompt([{
    name:"Student",
    type:"input",
    message:"Enter Student Name",
    validate:function(value){
      if(value.trim() !==""){
         return true;
      }
      return "Please enter a non-empty value.";
   }
 },
{
name:"courses",
type:"list",
message:"Select the coarse",
choices:["MS.Office","HTML","CSS","Javascript","Typescript"]
}]);

const TuitionFee:{[key:string]:number}={
   "MS.Office":2000,
   "HTML":2500,
   "CSS":2500,
   "Javascript":3000,
   "Typescript":3500
}

console.log(`\n Tuition Fees : ${TuitionFee[anSwer.courses]}\n`);


let payMent = await inquirer.prompt([{
   name:'payment',
   type:'list',
   message:'Select payment method',
   choices:["Bank Transfer", "Easy paisa","Jazz cash"],
},
{
   name:'Amount',
   type:'input',
   message:'Transfer Money:Rs.',
   validate:function (value) {
      if (value.trim() !== ""){
         return true
      }
      return "Please enter non-empty value"
   }
}])
console.log(`\n \t You have select payment method ${payMent.payment}`);

const tutionFees = TuitionFee [ anSwer.courses]
const paymentAmount = parseFloat(payMent.Amount);

if (tutionFees === paymentAmount) {
   console.log(`\n Congratulations! You have successfully enrolled in ${anSwer.courses}`);
let ans = await inquirer.prompt([{
   name:"Select",
   type:"list",
   message:"What would you like to do next",
   choices:["View Status","Exit"]
}])
if (ans.Select === "View Status") {
   console.log(`\n******** STATUS***********\n`);
   console.log(`Student Name :${anSwer.Student}`);
   console.log(`Student ID : ${randomNumber}`);
   console.log(`Coarse :${anSwer.courses}`);
   console.log(`TuitionFees Paid :${paymentAmount}`);
   console.log(`\t Total Balance: Rs.${myBAlance}`);
    console.log(`Remaining Balance : Rs.${myBAlance -= paymentAmount}`);
}
   else{
      console.log(`Exit Student Management System`);    
   }  
}
else{
   console.log(`Invalid amount`);  
}
