




// Using JS functions and an array of numbers, return positive if an element within the array is positive,
//  negative if an element is negative, else zero

// nums = []

// function numbers() {

//     for (i in nums){

//      if (i>0) {
//         return "positive"
//      } else if (i<0) {
//         return "negative"
//      }
//      else{
//         return ("zero")
//      }
//     }}
    
// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the 
// last two added by 5. Console the array with the new values

// nums = [2,3]

// function numbers(a,b){
// sum = a+b;
// console.log({sum});
// }
// numbers.apply(null,nums)

nums = [2,3,8,1,5,0]
newNums = []

function numbers(num1,num2,num3,num4,num5,num6){

numbers.forEach(x => {

    if (i<=3) {
        newElement = numbers[i]*8;
newNums.push(newElement);
    } else {
        newElement = numbers[i]+5;
newNums.push(newElement);
    }
    
});

console.log(newNums);
}

numbers.apply(null,nums)