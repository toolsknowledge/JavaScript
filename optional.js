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
function func_one(param1, param2, param3) {
    if (param2 === void 0) { param2 = "Hello_2"; }
    var param4 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        param4[_i - 3] = arguments[_i];
    }
    console.log(param1, param2, param3, param4);
}
//func_one();    
//Expected at least 1 arguments, but got 0.
func_one("Hello_1");
//Hello_1 Hello_2 undefined []
func_one(undefined, undefined, undefined, undefined);
//undefined Hello_2 undefined [ undefined ]
func_one(null, null, null, null);
//
