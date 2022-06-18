//passing one function to another function as parameter called as callback

/*
    function func_one(param1){
        console.log( param1() );
    }

    func_one( function func_two(){
        return "Hello";
    } );    
    //Hello
*/

/*
    function func_one(param1,param2,param3){
        console.log(param1(), param2(), param3() );
    };
    func_one( function func_two(){
                return "Hello_1";
            }, 
            function func_three(){
                return "Hello_2";
            }, 
            function func_four(){
                return "Hello_3";
            } );
    //Hello_1 Hello_2 Hello_3
*/


/*
    let func_one = (param1)=>{
        console.log( param1() );
    };
    func_one( ()=>{ return "hello" } );
    //hello
*/

/*
    let func_one = (param1,param2)=>{
        return param2(param1+" to callbacks");
    };

    func_one("welcome", (res)=>{
        console.log(res);
    } ); 
    //welcome to callbacks   
*/

let add = (num,callback)=>{
    return callback(num+5);
};
let sub = (num,callback)=>{
    return callback(num-3);
};
let mul = (num,callback)=>{
    return callback(num*2);
};
let div = (num,callback)=>{
    return callback(num/2-2);
}
add(5,(addRes)=>{
    sub(addRes,(subRes)=>{
        mul(subRes,(mulRes)=>{
            div(mulRes,(divRes)=>{
                console.log(divRes);
            });
        })
    })
});





































