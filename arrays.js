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



let arr16 = [1,2,3,4,5];
console.log(
    arr16.filter((element,index)=>{
        return element>=3;
    })
);
//[ 3, 4, 5 ]

let arr17 = [10,20,30,40,50];
//[10,20]



let arr18 = [1,2,3,4,5];
//[300,400,500]
//map() && filter()
console.log(
    arr18.map((element,index)=>{
        return element*100;
    }).filter((element,index)=>{
        return element>=300;
    })
);
//[ 300, 400, 500 ]


let arr19 = [1,2,3,4,5];
console.log(
    arr19.reduce((firstElement,nextElement)=>{
        return firstElement+nextElement;
    })
);  //15
let arr20 = [100,200,300,400,500];
console.log(
    arr20.reduce((firstElement,nextElement)=>{
        return firstElement+nextElement;
    })
);   //1500
let arr21 = [10,20];
console.log(
    arr21.reduce((firstElement,nextElement)=>{
        return firstElement+nextElement;
    },100)
);
//130

let arr22 = [1,2,3,4,5];
console.log(
    arr22.map((element,index)=>{
        return element*100;
    }).filter((element,index)=>{
        return element<=500;
    }).reduce((firstElement,nextElement)=>{
        return firstElement+nextElement;
    },500)
);  
//2000

let arr23 = [10,20,30,10,20,30];
arr23.forEach((element,index)=>{
    console.log( arr23.indexOf(element) );
});
//0 1 2 0 1 2

let arr24 = [10,20,30,10,20,30,40];
console.log(
    arr24.filter((element,index)=>{
        return arr24.indexOf(element) == index;
    })
);
//[ 10, 20, 30, 40 ]


let arr25 = ["Hello_1","Hello_2","Hello_1","Hello_3","Hello_2"];




let arr26 = [10,20,30,40,50,60,70,80,90,100];
arr26.copyWithin(3);
console.log(arr26);   //[10,20,30,10,20,30,40,50,60,70] 



let arr27 = [10,20,30,40,50,60,70,80,90,100];
arr27.copyWithin(2,5);
console.log(arr27);   //[10,  20, 60, 70,  80, 90, 100, 80, 90, 100]


let arr28 = [10,20,30,40,50,60,70,80,90,100];
arr28.copyWithin(3,8);
console.log(arr28); //[10, 20, 30, 90, 100, 60, 70, 80, 90, 100]


let arr29 = [10,20,30,40,50,60,70,80,90,100];
arr29.copyWithin(-6,-3);
console.log(arr29);     //[10,  20, 30, 40,  80, 90, 100, 80, 90, 100]


let arr30 = [10,20,30,40,50,60,70,80,90,100];
arr30.copyWithin(2,4,8);
console.log(arr30);   //[10, 20, 50, 60,  70, 80, 70, 80, 90, 100]


let arr31 = [10,20,30,40,50,60,70,80,90,100];
console.log( arr31.slice(3,6) );                //[ 40, 50, 60 ]
console.log( arr31.slice(1,3) );                //[ 20, 30 ]
console.log( arr31.slice(0,1) );                //[ 10 ]
console.log( arr31.slice(9) );                  //[ 100 ]


//concat
let arr32 = [10,20];
let arr33 = [30,40];
let arr34 = [50,60];
let arr35 = [...arr32,...arr33,...arr34];
console.log(arr35);   //[ 10, 20, 30, 40, 50, 60 ]

let arr36 = [10,20,30,40,50,60,70,80,90,100];
let arr37 = arr36.slice(5);
let arr38 = arr36.slice(0,5);
let arr39 = [...arr37,...arr38];
console.log(arr39);    //[60,70,80,90,100,10,20,30,40,50]


let arr40 = [10,20,30,40,50,60,70,80,90,100];
//[10,20,60,70,80]







//reverse()
let arr41 = [10,20,30,40,50];
console.log(arr41.reverse());           //[ 50, 40, 30, 20, 10 ]


//console.log( "Hello".reverse() );   
//TypeError: "Hello".reverse is not a function

console.log(
    Array.from("Hello").reverse().toString().replace(",","")
);
//ol,l,e,H
console.log(
    Array.from("Welcome").reverse().toString().replace(/,/g,"")
);
//emocleW
console.log(
    Array.from("ReactJS").reverse().toString().replaceAll(",","")
);  
//SJtcaeR

console.log(
    Array.from("Angular14").reverse().join("")
);
//41ralugnA


let arr42 = ["Angular14","ReactJS","NodeJS","VueJS"];
//["VueJS","NodeJS","ReactJS","Angular14"]
//["41ralugnA","SJtcaeR","SJedoN","SJeuV"]


let str = " welcome ";
console.log(str.length);                    //9
console.log( str.trim().length );           //7
console.log( str.trimStart().length );      //8
console.log( str.trimEnd().length );        //8


let str1 = "Hello";
console.log( str1.padStart(10,"#") );  //#####Hello
let str2 = "Welcome";
console.log( str2.padEnd(20,"$") );   
                            //Welcome$$$$$$$$$$$$$
let str3 = "Sathya Technologies";
console.log( str3.padStart(24,"*").padEnd(29,"*") );
//*****Sathya Technologies*****


let str4 = "welcome to javascript";
console.log(str4.split(" "));
//[ 'welcome', 'to', 'javascript' ]


let str5 = "welcome$to#fullstack@ui";
//["welcome","to","fullstack","ui"]
console.log(
    str5.replaceAll("$"," ").replaceAll("#"," ").replaceAll("@"," ").split(" ")
);
//replace() with regular expression

let str6 = "welcome";
console.log(Array.from(str6));
console.log(str6.split(""));
//['w','e','l','c','o','m','e']


let str7 = "welcome to javascript";
console.log(
    str7.replaceAll(" ","").split("")
);
//['w','e','l','c','o','m','e','t','o','j','a','v','a','s','c','r','i','p','t']

let str8 = "welcome to javascript";
console.log(str8.substring(0,7));       //welcome
console.log(str8.substring(8,10));      //to
console.log(str8.substring(11));        //javascript


let str9 = "welcome to arrays manipulations upto ES6 version";
//welcome
//to
//arrays
//manipulations
//upto
//ES6

























































































































