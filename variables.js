/*
        variables
        *********
            variables are used to store the data
            Ex.
                string

                number

                boolean

                objects

                arrays

                ---
                ---
                ---
        by using variables we can store any type of data

        we can declare variables in 3 ways

                1) var

                2) let

                3) const

        let and const keywords introduced in ES6

        variables declaration should contain a-z, A-Z, 0-9, $ and _

        variables declaration should not start with digits


        JavaScript supports following datatypes

        1) string

        2) number

        3) boolean

        4) undefined

        5) null

        6) bigint

        7) symbol

Syntax for Variable declaration
*******************************
var/let/const variablename = value;

Ex.

var msg = "welcome to javascript"
*/


//string
//collection of characters called as string
//we can declare string in 3 ways
//""(double quotes), ''(single quotes) and ``(backtick)
//``(backtick) operator technically called as template literal
//template literal introduced in ES6
//template literal used to define multi line strings(paragraphs)
var frontend = "HTML";
var backend = "Java";
var database = "oracle";
var fullstack = `${frontend}..${backend}..${database}`;
console.log(fullstack);

var table_name = "employees";
var sal = 50000;
var sql_query1 = `select * from ${table_name} where esal>${sal}`;
console.log(sql_query1);

var uname = "sathya";
var upwd = "sathya123";
var sql_query2 = `select * from ${table_name} where uname='${uname}' and upwd='${upwd}'`
console.log(sql_query2);






















