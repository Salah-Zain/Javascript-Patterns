function pattern(num){
    for(i=1; i<=num; i++){
    let str = '';
    for(j=1; j<=num; j++){
        if(i===1 || i==num || j===1 || j===num || 
            i===2 && j===2 || i===2 && j===9 ||
            i===3 && j===3 || i===3 && j===8 ||
            i===4 && j===4 || i===4 && j===7 ||
            i===5 && j===5 || i===5 && j===6 ||
            i===6 && j===6 || i===6 && j===5 ||
            i===7 && j===7 || i===7 && j===4 ||
            i===8 && j===8 || i===8 && j===3 ||
            i===9 && j===9 || i===9 && j===2 
        ){
            str += ' * ';
        }
        else{
            str += '   ';
        }
    }
    console.log(str);
    
}
console.log(pattern);
}
pattern(10);
