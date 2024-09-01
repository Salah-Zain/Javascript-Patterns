function pattern(num){
    for(i=1; i<=num; i++){
        let str = '';
        for (let j = 1; j<= (2 * i - 1); j++) {
            if (i ===num || j === 1 || j === (2 * i - 1)) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        
        console.log(str);
        
    }
    console.log(pattern);
}
pattern(5);