function pattern(num){

for(i=1; i<=num-1; i++){
    let str = '';
    for(j=1; j<=i; j++){
        str += ' * '
    }
    // console.log(str);

    let space = '';
    for(k=num; k>=i; k--){
        space += '   '
    }
    console.log(space + str);   
}

for(i=1; i<=num; i++){
    let str = '';
    for(j=num; j>=i; j--){
        str += ' * ';
    }
    let space = '';
    for(k=1; k<=i; k++){
    space += '   '
    }
    console.log(space + str);
    
}

console.log(pattern);
}

pattern(5);