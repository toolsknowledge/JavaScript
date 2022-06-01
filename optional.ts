/*
    function func_one(param1?:string,
                    param2?:string,
                    param3?:string):void{
        console.log( param1, param2, param3 );
    };
    func_one();                                 //undefined undefined undefined
    func_one("Hello_1","Hello_2","Hello_3");    //Hello_1 Hello_2 Hello_3
*/

/*
    function func_one(param1:any,param2?:any):void{
        console.log(param1,param2);
    };
    //func_one();        //Expected 1-2 arguments, but got 0.
    func_one("Hello_1"); //Hello_1 undefined
    func_one("Hello_1","Hello_2");//Hello_1 Hello_2
*/
function func_one(param1:any,
                  param2:any="Hello_2",
                  param3?:any,
                  ...param4:any):void{
    console.log(param1,param2,param3,param4);
}
//func_one();    
        //Expected at least 1 arguments, but got 0.
func_one("Hello_1");
        //Hello_1 Hello_2 undefined []
func_one(undefined,undefined,undefined,undefined);
        //undefined Hello_2 undefined [ undefined ]
func_one(null,null,null,null);
        //null null null [ null ]