let num = 5;

for(let i=1; i<=num; i++){
    let star = "";
    for(let j=1; j<=i; j++){
        star += "*";
    } 
    let space = " ";
    for(k=num; k>=i; k--){
        space += " "
    }
    console.log(space + star);
}