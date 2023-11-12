const repeatString = function(str, count) {
    if (count<0) return "ERROR";
    let newStr= "";
    while(count>0){
        newStr += str;
        count -=1;
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
