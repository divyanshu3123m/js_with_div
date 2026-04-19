// for loop
let i;
for (i = 0; i < 10; i++) { // for (initialization; condition; increment/decrement)
    const a = i;
    if(a === 5) {
        console.log("found 5");
    }
    console.log(a);
}
console.log(i);

for( let i = 0; i< 5; i++){
    for( let j = 0 ; j<=i ; j++){
        process.stdout.write("*"); // this is used to print on the same line
    } 
    console.log();
}

//break and continue
for (let i=0; i<10; i++){
    if(i === 5){
        break; // this will exit the loop when i is 5
    }
    console.log(i);
}
for (let i=0; i<10; i++){
    if(i === 5){
        continue; // this will skip the current iteration when i is 5
    }
    console.log(i);
}
//while loop
let whileloop =0;
while(whileloop < 5){ // while (condition)
    console.log(whileloop);
    whileloop++;
}
