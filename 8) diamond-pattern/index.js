let num =5;

for(let i=1; i<=num; i++){
    let star = " ";
    for(j=1; j<=i; j++){
        star += " *";
    }
    // console.log(star);
    let space = " ";
    for(k=i; k<=num; k++){
        space += " "
    }
    console.log(space + star);
}

let n = 5;

for(i=1; i<=n; i++){
    let star = " ";
    for(j=n-1; j>=i; j--){
        star += " *";
    }
    // console.log(star);

    let space = "  ";
    for(k=1; k<=i; k++){
        space += " ";
    }
    console.log(space + star);
}