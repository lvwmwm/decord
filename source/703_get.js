// Module ID: 703
// Function ID: 8705
// Name: get
// Dependencies: []

// Module 703 (get)

export default function get(arg0, arg1, arg2) {
  let tmp;
  if (null != arg0) {
    tmp = require(dependencyMap[0])(arg0, arg1);
  }
  if (undefined === tmp) {
    tmp = arg2;
  }
  return tmp;
};
