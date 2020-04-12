// Explain the concept of prototypes in JS. How is it related to Classes in ES6

/*
  - Mechanism in JS that allows objects to inherit features from other objects.
  - There is an object property called __proto__ attached to each object.
    
  Example:
  Array.prototype.customMap = function (callback) {
        const res = [];
        for (let i = 0; i < this.length; i++) {
            res[i] = callback(this[i]);
        }
        return res;
    };

    - Classes are wrapper for prototypes. 
 
 */
