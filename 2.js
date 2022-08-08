var isPalindrome = function(x) {
    var lastInt = 0;
    let xInstance = x;
    while(xInstance>0){
        var lastNum = xInstance%10;
        xInstance = parseInt(xInstance/10);
        lastInt = (lastInt*10) + lastNum;   
    }
    console.log(lastInt);
    if (lastInt == x){
        return true;
    }
    return false;
    
};
