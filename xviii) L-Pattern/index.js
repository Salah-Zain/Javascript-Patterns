function pattern(num){
    for(i=1; i<=num; i++){
        let str = '';
        for(j=1; j<=num; j++){
            if(i===num || j===1){
                str += ' * ';
            }
            else{
                str += ' '
            }
        }
        console.log(str);
    }
}
pattern(10);