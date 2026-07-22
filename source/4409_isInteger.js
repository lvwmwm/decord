// Module ID: 4409
// Function ID: 38850
// Name: isInteger
// Dependencies: []

// Module 4409 (isInteger)

export default function isInteger(arg0) {
  if ("number" === typeof arg0) {
    if (!require(dependencyMap[0])(arg0)) {
      if (require(dependencyMap[1])(arg0)) {
        const tmp7 = require(dependencyMap[2])(arg0);
        return require(dependencyMap[3])(tmp7) === tmp7;
      }
    }
  }
  return false;
};
