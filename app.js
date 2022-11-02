// Grade Work Starts
var maths = +prompt("Enter Your Maths Marks 20 out of?")
var computer = +prompt("Enter Your Computer Marks 20 out of?")
var chemistry = +prompt("Enter Your Chemistry Marks 20 out of?")
var english = +prompt("Enter Your English Marks 20 out of?")
var biology = +prompt("Enter Your Biology Marks 20 out of?")
console.log("Maths Marks",maths)
console.log("Computer Marks",computer)
console.log("Chemistry Marks",chemistry)
console.log("English Marks",english)
console.log("Biology Marks",biology)
var total = maths + computer + chemistry + english + biology
console.log(total)
percent = total/100*100
console.log (percent)
if(percent==100){
    console.log("A1+ Grade")
}
else if(percent>=90 && percent<=100){
    console.log("A1+ Grade")
}
else if(percent>=80 && percent<=90){
    console.log("A1 Grade")
}
else if(percent>=70 && percent<=80){
    console.log("A Grade")
}
else if(percent>=60 && percent<=70){
    console.log("B Grade")
}
else if(percent>=50 && percent<=60){
    console.log("C Grade")
}
else{
    console.log("Fail")
}
// Grade Work end
// Chapter Wise Work Starts

// Chapter No.9 starts
var name =prompt("What is your name")
var question = "Your Age"
var answer = "I am 19 years old"
var name = prompt(question,answer)
// Chapter No.9 ends
// chapter 10 starts
var due_date =true
var extra_time=false
var incomplete=true
if(due_date==true){
    console.log("Assignment Submitted")
    if(incomplete==true){
        console.log("Incomplete Assignment")
    }
}
else if(extra_time==true){
    console.log("Assignment Submitted")
}
else{
    console.log("Assignment Submitted Late")
}
// chapter 10 ends
// chapter 11 starts
// All Comparision operators is used already
// chapter 11 ends
// chapter 12 starts
// All if else is used already
// chapter 12 ends
// chapter 13 starts
// All is used already
// chapter 13 ends
// chapter 14 starts
// practiced already nested if
// chapter 14 ends
// chapter 15 starts
var cities = ["Karachi","Lahore","Islamabad","Rawalpindi","Multan"];
alert(cities[1]) 
// chapter 15 ends

// Chapter Wise Work ends 