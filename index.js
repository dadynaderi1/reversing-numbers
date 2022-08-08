
function reversedNumber(x){
    let finalInt = 0;
    while(x > 0 ) {
        let lastDigit = x%10;
        let mpp = x/10;
        x = parseInt(mpp);
        
        finalInt = (finalInt*10) + lastDigit;
    }
    return finalInt;
};