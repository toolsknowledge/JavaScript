//arrays
//collection of indexed elements called as array
//index starts from "0"
//we will access array elements with "indexes"
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


//delete
let arr7 = [10,20,30,40,50];
console.log( arr7.length );         //5

delete arr7[0];
console.log( arr7.length );         //5

delete arr7[4];
console.log(arr7.length);           //5

console.log(arr7);                  
    //[ <1 empty item>, 20, 30, 40, <1 empty item> ]

//Note : delete keyword deletes the array element and never releases the memory


let arr8 = [20,30,40];
console.log(arr8);              //[ 20, 30, 40 ]
arr8.push(50);
console.log(arr8);              //[ 20, 30, 40, 50 ]
arr8.unshift(10);
console.log(arr8);              //[ 10, 20, 30, 40, 50 ]
arr8.pop();
console.log(arr8);              //[ 10, 20, 30, 40 ]
arr8.shift();
console.log(arr8);              //[ 20, 30, 40 ]

let arr9 = [10,20,30,40,50,60,70,80,90,100];

//delete 50,60,70
arr9.splice(4,3); 
console.log(arr9);  //[10,20,30,40,80,90,100]

//delete 80
arr9.splice(4,1);
console.log(arr9);  //[ 10, 20, 30, 40, 90, 100 ]

//delete 10
arr9.splice(0,1);
console.log(arr9);  //[ 20, 30, 40, 90, 100 ]

//delete 30
arr9.splice(1,1);
console.log(arr9);  //[ 20, 40, 90, 100 ]

//delete 100
arr9.splice(3,1);
console.log(arr9);  //[ 20, 40, 90 ]

//add 50,60,70,80
arr9.splice(2,0,50,60,70,80);
console.log(arr9);  //[20, 40, 50, 60, 70, 80, 90]

//delete 40 and add 30,40
arr9.splice(1,1,30,40);
console.log(arr9); //[20, 30, 40, 50, 60, 70, 80, 90]

//add 100
arr9.splice(8,0,100);
console.log(arr9); //[20, 30, 40, 50, 60, 70, 80, 90, 100]

//add 10
arr9.splice(0,1,10,20);
console.log(arr9);
//[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let arr10 = [1,2,3,4,5];
console.log(
   arr10.map((element,index)=>{
       return element*100;
   })
);
//[ 100, 200, 300, 400, 500 ]

let arr11 = [100,200,300,400,500];
//[10,20,30,40,50]




let arr12 = [1,2,3,4,5];
console.log(
    arr12.map((element,index)=>{
        return [element]
    })
);   //[[1],[2],[3],[4],[5]]


let arr13 = [1,2,3,4,5];
//[[1,0],[2,1],[3,2],[4,3],[5,4]]



let arr14 = [1,2,3,4,5];
let arr15 = ["one","two","three","four","five"];
//[[1,"one"],[2,"two"],[3,"three"],[4,"four"],[5,"five"]]









