//公共方法

//数组排序方法
function sortNumber(a, b) {
    return a - b;
}
//数组排序方法（倒序）
function sortNumberDesc(a, b) {
    return b - a;
}

//数组对象排序方法
function sortArrObjectsByKey(array, key) {
    return array.sort(function(a, b) {
        let x = a[key];
        let y = b[key];
        return (x < y) ? -1 : ((x > y) ? 1 : 0);
    }) ;
}