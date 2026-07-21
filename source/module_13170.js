// Module ID: 13170
// Function ID: 99581
// Dependencies: []

// Module 13170
let closure_2 = require(dependencyMap[0])("keys");

export default (arg0) => {
  let tmp = closure_2[arg0];
  if (!tmp) {
    const tmp5 = require(dependencyMap[1])(arg0);
    closure_2[arg0] = tmp5;
    tmp = tmp5;
  }
  return tmp;
};
