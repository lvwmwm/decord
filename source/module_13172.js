// Module ID: 13172
// Function ID: 99603
// Dependencies: []

// Module 13172
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
