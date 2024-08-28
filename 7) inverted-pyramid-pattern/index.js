let num = 5;

for(let i=num; i>=1; i--){
    let star = "";
    for(j=1; j<=i; j++){
        star += "  *";
    }
    // console.log(star);
    let space = "";
    for(let k=1; k<=2*(num-i); k++){
        space += " ";
    }
    console.log(space + star);
}

// method: 2

// let num = 5;

// for(let i=1; i<=num; i++){
//    let star = " ";
//    for(let j=num; j>=i; j--){
//       star += " * "
//    }
//    // console.log(star);
//    let space = " ";
//    for(let k=1; k<=i; k++){
//       space += "  ";
//    }
//    console.log(space + star)
// }
