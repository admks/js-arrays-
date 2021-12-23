for ( let i = 0 ; i < 3 ; i++ ) {
    //console.log(i)
}

for ( let i = 0 ; i < 3 ; i++ ) {
    //console.log(i+5)
}
for ( let i = 0 ; i <= 3 ; i++ ) {
    //console.log(i+5)
    //console.log(Math.random())
}
for ( let i = 0 ; i === 3 ; i++ ) { // i=0 , i===3 olamayacağı için loop başlamadan biter
    //console.log(i+5)
}

 let result = 0;
// for ( let i = 0 ; i < 3 ; i++ ) {
//     result = i;
// }

// for ( let i = 0 ; i < 3 ; i++ ) {
//     result += i;
// }
// console.log(result)

for ( let i = 5 ; i > 0 ; i-- ) {
    result += i;  
}
 //console.log(result)

//for ( let i = 0 ; i < 10 ; i=i+2 ) {
for ( let i = 0 ; i < 10 ; i+=2 ) {
    result += i;
}
//console.log(result)


let sampleArr = ["m", "u", "r", "t" ,"a"];
let randomNum = Math.floor(Math.random()*5)
//0,99 * 5 = 4,9  ==> 4
//0,002 * 5 = 0,01  ==> 0
//console.log(sampleArr[randomNum])

for ( let i = 0 ; i < 10 ; i+=2 ) {
    let random = Math.floor(Math.random()*5)
    //console.log(sampleArr[random])   
}

//ektra
// let random;
// for ( let i = 0 ; i < 10 ; i+=2 ) {
//     let temp = random;
//     random = Math.floor(Math.random()*5)
//     if(temp != random) {
//         console.log(i);
//     }
//     //console.log(sampleArr[random])   
// }

let myArray = ["JS", "Mongo", "React", true, "JS"]
//for (let i = 0; i < 4; i++) {
for (let i = 0; i < myArray.length; i+=2) {
    //console.log(myArray[i]);   
}

for (let i = 0; i < myArray.length; i+=2) {
    if(myArray[i] === "JS"){
        //console.log("hey JS var burada")
    } 
}


let myNum = [9, 3, 7 ];
for (let i = 0; i < myNum.length; i++) {
    
    if(myNum[i] > myNum[i+1]){
        console.log("ilk değer ikinciden büyük")
        let temp = myNum[i]
        myNum[i]=myNum[i+1]
        myNum[i+1]=temp
    }
    
    
    //console.log(sortedArray);   
    //console.log(myNum[i]);   
}
console.log(myNum); 

let arrayim=[3,6,9];
for (let j = 0; j < array.length; j++) {
    
    
}