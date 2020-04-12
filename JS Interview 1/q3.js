/*
Implement a function strContains(char) that I can use on any string and it returns true/false if the character “char” 
    is present on a string (optimize it as much as possible)
*/

String.prototype.strContains = function (character) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === character) {
      return true;
    }
  }
  return false;
};

console.log("I am a string".strContains("@")); // should return false
console.log("I am a string".strContains("a")); // should return true
