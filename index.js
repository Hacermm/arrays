let arrays = [2, 15, 8, 26, 22, -8, 44, 5];
console.log(arrays);

 //filter
function filterArray(array, testFunction) {
    let result= [];
    for (let i=0; i < array.length; i++) {
        if (testFunction(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

let array = filterArray(arrays, function (num) {
    return num > 2;
})
console.log(array);


console.log("------------------")


//every

function everyArray(array, testFunction) {
    let result= [];
    for (let i=0; i < array.length; i++) {
        if (!testFunction(array[i])) {
            return false;
        }
}
return true;
}
let every = everyArray(arrays, function (num) {
    return num > 2;
})
console.log(every);


console.log("------------------")

//some


function someArray(array, testFunction) {
    let result= [];
    for (let i=0; i < array.length; i++) {
        if (testFunction(array[i])) {
            return true;
        }
    }
    return false;
}
let some = someArray(array, function (num) {
    return num > 20;
})
console.log(some);

console.log("------------------")


//reduce

function reduceArray(array, testFunction) {
    let result= 0;
    for (let i=0; i < array.length; i++) {
        if (testFunction(array[i]));
    }
    return result;
}
let reduce = reduceArray (array, function (accumulator, CuurentVal) {
    return accumulator + CuurentVal;
});
console.log(reduce);

console.log("------------------")


//find


function findArray(array, testFunction) {
    let result= [];
    for (let i=0; i < array.length; i++) {
        if (testFunction(array[i])){
            return array[i];
      }
    }
}
let find = findArray(arrays, function (num) {
    return num > 2;
})
console.log(find);
 
console.log("------------------")

