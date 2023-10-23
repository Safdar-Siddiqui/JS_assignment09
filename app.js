// -------task01-------
var literalArray = [];

document.write("<hr> <hr>");


// -------task02-------
var objectArray = new Array();



// -------task03-------
var stringArray= ["This ", "is ", "String ", "Array"];


// -------task04-------
var numberArray= [0,1,2,3,4,5,6,7,8,9];


// -------task05-------
var boolArray=[true, false];


// -------task06-------
var mixedArray= ["Pakistan: ", 1947];


// -------task07-------
var education= ["","SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

document.write("Qualificiations: <br> <br>")

for(var i=1; i < education.length; i++){
    document.write(i + ") " + education[i] + "<br>")
}

document.write("<hr> <hr>");


// -------task08-------

var studentNames = ["Ali", "Bilal", "Danish", "Faisal"];
var totalScore= 500;
var score= [490, 480, 470, 460];

for(var i=0; i<score.length;i++){
    document.write("<br> Score of " + studentNames[i] + " is " + score[i] + ". Percentage: " + score[i]*100/totalScore + "% <br>");
}
document.write("<br>")

document.write("<hr> <hr>");


// -------task09-------

var colors =["pink", " lightgreen", " lightblue", " violet"];
document.write(colors + "<br>");
var index = 0;

function changeColor(){
    document.body.style.backgroundColor = colors[index];
    index++;
    if(index == colors.length){
        index=0;
    }
    setTimeout(changeColor, 800);
}
changeColor();


document.write("<br>");

function addColorAtStart(){
    var startColor = prompt("Add a color to push at start of array");
    colors.unshift(startColor); 
    let abc = document.getElementById("myPara");
    abc.innerHTML = colors;
}
function removeColorFromStart(){
    colors.shift(); 
    let abc = document.getElementById("myPara");
    abc.innerHTML = colors;
}

function addColoratEnd(){
    var endColor = prompt("Add a color to push at End of array");
    colors.push(endColor); 
    let abc = document.getElementById("myPara");
    abc.innerHTML = colors;
}
function removeColorfromEnd(){
    colors.pop(); 
    let abc = document.getElementById("myPara");
    abc.innerHTML = colors;
}

function addColorAnywhere(){
    var ColorAnywhere = prompt("Add a color to push anywhere of array");
    var askIndexNum = +prompt("At which index you want to add this Color?");

    colors.splice(askIndexNum, 0, ColorAnywhere); 
    let abc = document.getElementById("myPara");
    abc.innerHTML = colors;
}
function removeColorFromAnywhere(){
    var askIndexNum = +prompt("From which index you want to delete Color?");

    colors.splice(askIndexNum, 1); 
    let abc = document.getElementById("myPara");
    abc.innerHTML = colors;
}

document.write("<hr> <hr>");


// -------task10-------

var scores= [320, 230, 480, 120];
document.write("Scores of Students: " +scores +  "<br>");
document.write("Ordered Scores of Students: " + scores.sort());
document.write("<br>");

document.write("<hr> <hr>");


// -------task11-------

let citiesList = ["Hyderabad" ,"Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta", "Multan", "Faisalabad"];
var ind= +prompt("Enter Index Number from which you want to copy array elements");
var numCopy = +prompt("How many elements do you want to copy?");
let selectedCities=citiesList.slice(ind, ind+numCopy);
document.write("<br>");
document.write("Cities List: <br>" + citiesList + "<br> <br>");
document.write("Selected Cities List: <br>" + selectedCities + "<br> <br>");

document.write("<hr> <hr>");


// -------task12-------

var arr=["This", "is", "my", "cat"];

document.write("Array: <br>" + arr + "<br> <br>");

var singleString = arr.join(" ");
document.write("String: <br>" + singleString + "<br> <br>");

document.write("<hr> <hr>");


// -------task13-------

var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write(devices.shift() + "<br>");
document.write(devices.shift() + "<br>");
document.write(devices.shift() + "<br>");
document.write(devices.shift() + "<br>");

document.write("<hr> <hr>");


// -------task14-------

var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write(devices.pop() + "<br>");
document.write(devices.pop() + "<br>");
document.write(devices.pop() + "<br>");
document.write(devices.pop() + "<br>");

document.write("<hr> <hr>");


// -------task15-------

var phoneManufacturers = ["Apple", " Huawei", " Samsung", " Motorola", " Nokia", " Sony", " Haier", " Xiaomi", " Infinix", " Oppo", " Vivo"];

document.write("<select>");
for(var k=0; k<phoneManufacturers.length; k++){
    document.write("<option>" + phoneManufacturers[k] + "</option>")
}
document.write("</select>");