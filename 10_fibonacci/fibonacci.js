const fibonacci = function(n) {
    n = Number(n);
    if(n<1) return "OOPS";
    let a=0, b=1, c, res=[1], i=1;
    while(i<n){
        c = a + b;
        res.push(c);
        a = b;
        b = c;
        i+=1;
    }
    return Number(res.slice(-1));
};

// Do not edit below this line
module.exports = fibonacci;