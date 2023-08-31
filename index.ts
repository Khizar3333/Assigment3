// exercise1 to remove negative number
// let negnum:number[]=[3,5,-2,-7]
// let remnum=negnum.filter(e=>e>=0)
// console.log(remnum)

// exercise2 to multiply array even numbers by 2
// let arrmul:number[]=[1,2,3,4,5]
// let arrmul1 = arrmul.map((x)=> x*2); 
// console.log(arrmul1)

// exercise3 to display Element having more than five characters
// let arrfru:string[]= ["apple", "banana", "cherry", "date", "grape"]
// let uparrfru:string[]=arrfru.filter(n=>n.length>5)
// console.log(uparrfru)

// exercise4  use the map and filter methods together to create a new array containing the squares of even numbers.
// let arrsqu:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let arrsquupd:number[]=arrsqu.filter(eve=>eve%2===0).map((mul)=>mul*mul)
// console.log(arrsquupd)

// exercise5 to convert temperature from celcius to fahrenheit
// let arrcel:number[]=[0, 10, 20, 30, 40]
// let newarr:number[]=arrcel.map((f)=>(f * 9/5) + 32.)
// console.log(newarr)

// exercise6  use the map and filter methods together to create a new array containing the squares of odd numbers.
// let arrsquod:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let arrsquodupd:number[]=arrsquod.filter(eve=>eve%2 !==0).map((mult)=>mult*mult)
// console.log(arrsquodupd)

// exercise 7

let arrnames:string[]=["Alice", "Bob", "Charlie", "David", "Emily"]
arrnames.forEach(e=>{
    console.log(`${e}!`)})


