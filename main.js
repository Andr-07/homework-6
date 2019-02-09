// First task
function getSevenCol(arr) {

var str = arr.join('');
var element = str.split('');
var  seven = 0;

element.forEach(function(item, i) {
if ( item == 7) {
  seven += 1;
}
});
return(seven);
}

console.log(getSevenCol([1, 7, 4, 77, 73]));

// Second task

function arrToStr (arr) {
var str = [];
for (var i = 0; i < arr.length; i++) {
if (i <= (arr.length - i - 1)) {

str.push(arr[i], arr[arr.length - i - 1])
}}
return str.join('');
}
console.log(arrToStr(["a", "b", "c", "d", "e", "f"]));
