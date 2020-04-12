/*
    Implement a function propertyExists(obj, path) that takes in an object and a path (string) as arguments 
    and returns ‘False’ if the property doesn’t exist on that object or is null, else returns the value of the property
*/

function propertyExists(obj, path) {
  let pathTree = path.split(".");
  for (let i = 0; i < pathTree.length; i++) {
    const key = pathTree[i];
    if (obj[key]) {
      obj = obj[key];
    } else {
      return false;
    }
  }
  return obj;
}
const obj = {
  a: 1,
  b: 2,
  c: {
    d: 100,
    e: {
      f: 45,
    },
  },
};

console.log(propertyExists(obj, "c.e.f")); // Output : 45
console.log(propertyExists(obj, "a.b")); // Output : false
