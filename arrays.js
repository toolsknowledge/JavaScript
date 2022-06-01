//arrays
//collection of indexed elements called as array
//index starts from 0
//we will access array elements with indexes
//we will represent arrays with []

let arr1 = [10,20,30,40,50];
console.log(
    arr1[0],arr1[4],arr1[5],arr1[100],
    arr1[-1]
);
//10 50 undefined undefined undefined

//length
let arr2 = [10];
console.log(arr2.length);       //1

let arr3 = [];
arr3[0] = 100;
console.log(arr3.length);
//1

let arr4 = [];
arr4[100] = 1000;
console.log(arr4.length);
//101

let arr5 = [10];
arr5[10] = 100;
console.log(arr5.length);   //11


let arr6 = [10,20,30,40,50];
arr6.length = 3;
console.log(arr6[0],arr6[2],arr6[3]);
//10 30 undefined
















