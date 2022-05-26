//let
//let is the keyword
//let keyword introduced in ES6
//let keyword used to define the variables

/*
    let data = 100;
    {
        let data = 200;
    }
    console.log(data);
    //var : 200   //let : 100
    //var keyword raised the global polluting issue
    //we can fix global polluting issue by using let keyword
*/

/*
    for(let i=0;i<5;i++){
        
    }
    console.log(i);
    //var : 5
    //let : ReferenceError: i is not defined
    //var keyword breaks the scope rule
    //let keyword obeys the scope rule
*/

/*
    console.log(x);
    let x = "Sathya";
    //var : undefined
    //let : ReferenceError: Cannot access 'x' before initialization
    //variable hoisting raised because of var keyword
    //we can fix variable hoisting with let keyword
*/

/*
    let x = 100;
    let x = 200;
    console.log(x);
    //var : 200    
    //let : SyntaxError: Identifier 'x' has already been declared
    //var keyword allows the duplicate variables
    //let keyword wont allows the duplicate variables
*/

/*
            var                 let
    var keyword introduced     let keyword introduced in
    in before ES6              ES6


    global polluting issue     we can fix global polluting issue 
    raised in var keyword      with let keyword

    variable hoisting          we can fix variable hoisting with 
    raised in var keyword      let keyword

    duplicate variables         let keyword wont allows
    allowed in var keyword      duplicate variables

    scope rule break by         scope rule obey by 
    var keyword                 let keyword

    var keyword called as       let keyword called as block
    global scope keyword        scope variable
*/

//const
//const keyword introduced in ES6
//const keyword used to declare the variables
//reinitilization not possible with const keyword
const x = 100;
//x = 200;
//TypeError: Assignment to constant variable.

const arr = [1,2,3,4,5];
//arr = [];
//TypeError: Assignment to constant variable.
//arr = [100,200,300,400,500];
//TypeError: Assignment to constant variable.
arr[0] = 100;
arr[1] = 200;
arr[4] = 500;
arr[5] = 600;
console.log(arr);
//[ 100, 200, 3, 4, 500, 600 ]


const arr1 = ["Hello_1",
              "Hello_2",
              "Hello_3",
              "Hello_4",
              "Hello_5"];
//arr1 = [];   //TypeError: Assignment to constant variable.
//arr1 = ["Welcome_1"];   //TypeError: Assignment to constant variable.
arr1[0] = "Welcome_1";
arr1[5] = "Welcome_6";
console.log(arr1);

const obj = {
    key1 : "Hello_1",
    key2 : "Hello_2",
    key3 : "Hello_3"
};
//obj = {};
//TypeError: Assignment to constant variable.
//obj = {key1 : "Welcome_1", key2 : "Welcome_2" , key3 : "Welcome_3"};
//TypeError: Assignment to constant variable.

obj.key1 = "welcome_1";
obj.key2 = "welcome_2";
obj.key3 = "welcome_3";
console.log(obj);
//{ key1: 'welcome_1', key2: 'welcome_2', key3: 'welcome_3' } 




















































