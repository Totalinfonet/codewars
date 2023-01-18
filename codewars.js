function fakeBin(x){
arr = x.split("");
console.log(arr);
arr.map(el => {
    if(el < 5 ){
        el = "0"
    } else if (el >= 5) {
        el = "1"
    }
})
console.log(arr);
}

fakeBin("123456789")