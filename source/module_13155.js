// Module ID: 13155
// Function ID: 99539
// Dependencies: []

// Module 13155

export default (arg0) => {
  let num = 0;
  const tmp = require(dependencyMap[0])(arg0);
  if (tmp > 0) {
    num = min(tmp, 9007199254740991);
  }
  return num;
};
