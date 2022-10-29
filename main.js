// console.log('Bismillahir Rahmanir Rahim')

//*********** use strict ******************
//****************************************


//*********** use strict ******************
//Showing error by using use strict


// "use strict"
// function MyName(){
//     name="Khan"
// }
// MyName()
//****************************************


//*********** Spread Operator ******************
//spread=prosar, bistar
//three (...) => array ke posostoh kore notun kore value add kora

// const poorCountry=['Bangladesh','srilanka']
// const richCountry=[...poorCountry,'America','canada','Italy']
// console.log(richCountry)


//richCountry.push(poorcCountry)
//****************************************

//*********** Rest Parameter ******************
//using rest parameter, a function can be called with any number of arguments
///rest parameter is prefixed with three (...)

// function show (...numbers){
//     let sum=0
//     for(const i of numbers){
//         sum+=i
//     }
//     console.log("sum = "+sum)
// }
// show(1,2,3)

//****************************************

//*********** Dynamic Function ******************
//without function name

   // var name=function(nameVlaue){
   //      return nameVlaue;
   //  }
   //  console.log(name("Khan"))

//****************************************


//*********** ES6 Variable ******************
//ES6 variable
/*
var- re decleared, reassigned
let- can not re decleard , reassigned
const- not reassgin, not decleared


 */

// var name1="Khan"
// name1="Haque"  //Re assgin
//
// let name2="Khan"
// name2="Haque"  //Re assgin
//
// const name3="Khan"
// name3="Haque"  //xxxNo - Re assgin


// var name1="Khan"
// var name1="Haque" //re declear
//
//
// let name2="Khan"
// let name2="Haque" //xxx NO - re declear
//
//
// const name3="Khan"
// const name3="Haque" //xx NO- re declear
//
// console.log((name3))

//****************************************

//*********** Variable scope ******************
//Global scope: global access
//Local scope: localy access

// var global="globaly" // global scope
// function myFun(){
//     var name="khan"  //local scope
//     console.log(global)
// }
// myFun()


//****************************************

//*********** variable Hoisting ******************

// name="hoisting"
//
// console.log(name)
// var name

//****************************************

//*********** Arithmatic ******************


// var price1='31'
// var price2='20'
// var parice1Number=parseInt(price1)
// var parice2Number=parseInt(price2)
// var totalPrice=parice1Number+parice2Number
// console.log((totalPrice))
//
// var gpa='3.51'
// var gpaNumber=parseFloat(gpa)
// console.log(gpaNumber)
//
// var a=10
// a++
// console.log(a)

//****************************************


//*********** Equality ******************
//strict equalit
//loose equality
// var a=11
// var b='11'
// console.log(a===b)//strict equality
// console.log(a==b)//loosely eqality



//****************************************

//*********** for of loop ******************
//arra item gulo tene ber korte similar foreach()

// var nameArray=["Khan","Aalamin","Karim","zony"]
// for(let oneName of nameArray){
//     console.log(oneName)
// }


//****************************************

//*********** Object ******************
//bigates is object, shirt is property


// var billGates={
//     shirt: true,
//     shirtColor:"red",
//     smile:true
//
// }
//
// var billGatesPro={
//     shirt:{
//         color:"red",
//         qality:"",
//         price:"200 USD"
//     },
//     swatter:{
//         color:"red",
//         qality:"AQ",
//         price:"200 USD"
//     }
// }
//
//
// // console.log(billGates.shirtColor)
// // console.log(billGates['shirtColor'])
//
//
// // console.log(billGatesPro['swatter']['qality'])
//
// //for in use for object
//
// for(let props  in billGates){
//    // console.log(props)
//     console.log(billGates[props])
// }



//****************************************


//*********** ES6 function ******************

/*
Simple function
parametarized functions
rest parameters
returning functions
anonymous function
parameterized anonymous function
aroow functions
the function constructor
 */



// Simple function

// function myName(){
//     var x=10
//     var y=10
//     var z=x+y
//     console.log(z)
// }
//
// myName()

// parametarized functions
// function myName(x,y){
//     var z=x+y
//     console.log(z)
// }
//
// myName(10,20)

// rest parameters
// function myName(...rest){
//
//     var z=rest[0]+rest[1]
//     console.log(z)
// }
//
// myName(10,20)


// returning functions


// function myFunction(){
//     return "Bangladesh"
// }
// console.log(myFunction())


// anonymous function

//without name
//facility  is funcation without name , it can be declared dynamic runtime, an anonymous function can be assigend withing a variable

// var myFun=function(){
//
//     return "HI"
// }
// console.log(myFun())

// parameterized anonymous function

// var myFun=function(x){
//
//     return x
// }
// console.log(myFun(10))


// Arrow functions
//to write smallar function syntax, code more readable and structured, annonymous function, without function keyword, arrow function can note be used as constructors

// var myArrow=()=>{
//     console.log("My first arrow funciton")
// }
//
// myArrow()


// var myArrow=(x)=>{
//     console.log(x)
// }
//
// myArrow('Khan')


// var myArrow=(x)=>{
//     return x
// }
//
// console.log(myArrow(100))

// the function constructor

//function expression
// const calAge=function(birthyear){
//     return birthyear
// }
// console.log(calAge(10))

//****************************************

//*********** Array ******************

//Arrasys
//Array Methods
//Array destructuring
//ES6 MAP
//ES6 SET

// var numbers=[40,84,845,4,4,4545]
// for (var i=0;i<numbers.length;i++){
//     console.log(numbers[i])
// }


//Arrasys
//simple arrays

// var myArray=["A","B","C","D"]
//
// var myArrayConstructor=new Array("A","B","C","D")
// console.log(myArrayConstructor[0])

//for of loop
// for(let item of myArray){
//     console.log(item)
// }

//ES6 multidimensianl Array

// var bangladesh=["dhaka","barishal","chittagan"]
// var india=["kolkata","bharaot","darzeling"]
// var usa=["new york","USA","New"]
//
// var asia=[bangladesh,india,usa]
//
// console.log(asia[1][2])

//Array Methods
//Array destructuring
// structure ke venge fela.
// var bangladesh=["dhaka","barishal","chittagan"]
// var [a,b,c]=bangladesh
// console.log(a)

//ES6 MAP
//map is a collection of data, key-value pair

// var map=new Map()
// map.set('key1','dhaka')
// map.set('key2','India')
// map.set('key3','America')
// //
// // console.log(map.values())
// // console.log(map.keys())

// // ES6 MAP => delete(key), get(key), clear(),has(value)
// // map.delete('key1')
// // map.clear()


// for(let myvalue of map.values()){
//     console.log(myvalue)
// }


//ES6 SET

//set
//duplicate value rakha jabe nah
// var mySet=new Set()
// mySet.add("A")
// mySet.add("A")
// mySet.add("C")

// console.log(mySet)

//or)

// var mySet=new Set(['A','B','C'])
// console.log(mySet)


//****************************************


//*********** Class and Object ***********
//=========Class===========

// class MyClass{
    
//      MyFun1(){
//         console.log("bismillah")
//     }
//     MyFun2(x){
//         console.log(x)
//     }
//     MyFun3(){
//         console.log("bismillah")
//     }

// }

// var obj=new MyClass
// obj.MyFun1()
// obj.MyFun2(1)



//class Constructor

// class MyClass{
//     constructor(x,y){
//         this.firstNum=x
//         this.secondNum=y
//         console.log('constructor ',this.firstNum)
//     }

//     add(){
//        let res= this.firstNum+this.secondNum
//        console.log(res)
//     }
// }

// var obj=new MyClass(10,20)
// obj.add()

//==========Object===========
// var sakib={
//     name:"khan",
//     age:30,
//     country:"bangladesh",
//     isAllROunder:true
// }

// console.log(sakib.isAllROunder)//dot notation
// console.log(sakib['age'])//bracket notation
//
// sakib.isAllROunder=false  //set property
// console.log(sakib.isAllROunder)
//
// console.log(Object.keys(sakib))  //property is key
// console.log(Object.values(sakib))  //property is key and value

// for(item in sakib){
//     // console.log(item)
//     var value=sakib[item]
//     console.log(value)
// }


//==============static keyword======
//static keyword use korle object kora jabe nah. class er sathe sora sori somporko thake

// class MyClass{
//     static hello(){
//         console.log('Hellow World')
//     }
// }


// var obj=new MyClass()
// obj.hello()

//static call
// MyClass.hello()


//==========Inheritance============

// class Parent{
//     hello1(params){
//         console.log("Hello 1 Function")
//     }
//     hello2(params){
//         console.log("Hello 2 Function")
//     }
// }

// class Child extends Parent{

//     //function/method overriding. child modify korte pare
//     hello1(params){
//         console.log("Hello 2 Function")
//     }
// }

// var obj = new Child()
// obj.hello1()


//===========Super keyword=========
//child class er moddho parant class e r sorasori method poroperty dhora jai

// class Parent{
//     hello1(params){
//         console.log("Hello 1 Function")
//     }
//     hello2(params){
//         console.log("Hello 2 Function")
//     }
// }

// class Child extends Parent{

//     //function/method overriding. child modify korte pare
//    demo(){
//     super.hello1()
//     super.hello2()
//    }
// }

// var obj = new Child()
// obj.demo()




//****************************************


//*********** ES6 Module ******************
//jot, ektrotito, somonnoi, module export and import
//Module export and import
//export- roptani,,, import-amdani

 



//****************************************

//*********** use strict ******************
//****************************************


//*********** use strict ******************
//****************************************


//*********** use strict ******************
//**************************************** 