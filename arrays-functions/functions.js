


// Q1. Given an array of strings, use a function to reverse all the elements in the string in ascending order
//  and the specific elements in descending order


function reverseArray(){

    let elements = ["latifa","dorcas","esther","umunyana"];

let newElements = [];

    elements.forEach(x => {

        if(x[0]=="l"){
            let result = x.split("").sort().reverse().join('');
            newElements.push(result);
        }

        else{
            result = x.split("").sort().join('');
            newElements.push(result);
        }
    });

    console.log(newElements);

}

reverseArray(); 


// Q2. Using JS functions and an array of numbers, return positive if an element within the array is positive,
//  negative if an element is negative, else zero


function isPositive(){

    let numbers = [-1,-2,4,5,0,8,-4];
     numbers.forEach(x => {

        if (x>0) {
            console.log("positive");
            
        } else if(x<0){
            console.log("negative");
        }
        else{
            console.log("zero");
        }
        
     });

}

isPositive();


// Q3. Given an array of objects, where each object represents an employee with an id, name, and salary property, 
// write a function that returns a new array of employee objects sorted by their salary in ascending order.




// Q4.Write a function that accepts an array of numbers and uses the forEach() 
// method to console.log each number multiplied by 2.

let nums = [2,3,4,6,90];

let newNums = [];

function multiply(a,b,c){

nums.forEach(x => {
   let current = x*2;
    newNums.push(current);
});

console.log(newNums);

}

multiply.apply(null,nums);

// Q5. Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the
//  last two added by 5. Console the array with the new values

let numbersArray = [2,4,9,1,0,4];

function changeNumbers(a,b,c,d,e,f){

let newArray = [];

    for (let i = 0; i < numbersArray.length; i++) {

        if (i<=3) {
            let result = numbersArray[i]*8;

newArray.push(result);

        } else {
            result = numbersArray[i] + 5;
            newArray.push(result);
        }

        
    }

    console.log(newArray);
}

changeNumbers.apply(null,numbersArray);