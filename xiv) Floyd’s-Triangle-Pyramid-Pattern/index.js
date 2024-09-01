function pattern(num){
    let n = 1;
    for(i=1; i<=num; i++){
        let star = '';
        for(j=1; j<=i; j++){
            star += n + ' ';
            n++
        }
        console.log(star);
    }
    // return
    console.log(pattern);
}
pattern(5);