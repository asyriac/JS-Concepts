/*
 *   Implement customMap() function for JS arrays. The functionality should be exactly the same as that of JS native .map() function.
 *   Function customMap() should return a new array and not change the array on which we are mapping
 */

Array.prototype.customMap = function (callback) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res[i] = callback(this[i]);
  }
  return res;
};

let arr = [1, 2, 3];
let ans = arr.customMap(function (num) {
  return num * 5;
});

console.log(ans);
// Output : [5,10,15]
