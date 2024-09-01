function pattern(num){
    for(i=1; i<=num; i++){
        str = '';
        for(j=1; j<=num; j++){
            if(i===1 || i=== num|| j === num){
                str += ' * ';
            }
            else{ 
                str = '';
            }
        }
        console.log(str);
    }

    for(i=1; i<=num; i++){
        let str = '';
        for(j=1; j<=num; j++){
            if(i===num || j===num){
                str += ' * '
            }
            else{ 
                str = '            ';
            }
        }
        console.log(str);
        
    }
    // console.log(pattern);
}
pattern(5);

