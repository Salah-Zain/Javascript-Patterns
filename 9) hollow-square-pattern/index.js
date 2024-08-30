let num = 5;

for(i=1; i<=num; i++){ 
    let star = "";
    for(j=1; j<=num; j++){
        if(i==1 || i==num || j==1){
            star += "*";
        }
        else{
            star += '';           
        }
    }
    console.log(star);
}


for(i=1; i<=num; i++){
let star = '';
for(j=1; j<=num; j++){
    if(i==num || j==num){
        star += '*';
    }
    else{
        star += ' ';
    }
} 
console.log(star);
}
console.log('\n');


 for(i=1; i<=num; i++){
    let star = '';
    for(j=1; j<=num; j++){
        if(i==1 || j==1|| i==3 || j==num){
            star += '*';
        }
        else{
            star += ' ';
        }
    }
    console.log(star);
 }
 console.log('\n');
 
 
 for(i=1; i<=num; i++){
    let star = '';
    for(j=1; j<=num; j++){
        if(i==num || j==1){
            star += '*';
        }
        else{
            star += ' ';
        }
    }
    console.log(star);
 }
 console.log('\n');

 for(i=1; i<=num; i++){
    let star = '';
    for(j=1; j<=num; j++){
        if(i==1 || j==1|| i==3 || j==num){
            star += '*';
        }
        else{
            star += ' ';
        }
    }
    console.log(star);
 }
 console.log('\n');

 for(i=1; i<=num; i++){
    let star = '';
    for(j=1; j<=num; j++){
        if(j==1|| i==3 || j==num){
            star += '*';
        }
        else{
            star += ' ';
        }
    }
    console.log(star);
 }


