let num = 5;

for(i=1; i<num; i++){
    let star = "";
    for(j=1; j<= i *2-1; j++){
        star += " * ";
    }
    // console.log(star);
    let space = "  ";
    for(k=num; k>=i; k--){
        space += "   "
    }
    console.log(space + star);
}

// method:2 

// let num = 5;

// for(i=1; i<num; i++){
//     let star = " ";
//     for(j=1; j<= i; j++){
//         star += "* ";
//     }
//     // console.log(star);
//     let space = " ";
//     for(k=num; k>=i; k--){
//         space += " "
//     }
//     console.log(space + star);
// }