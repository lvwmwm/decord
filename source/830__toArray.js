// Module ID: 830
// Function ID: 9259
// Name: _toArray
// Dependencies: []

// Module 830 (_toArray)

export default function _toArray(arg0) {
  let tmp = require(dependencyMap[0])(arg0);
  if (!tmp) {
    tmp = require(dependencyMap[1])(arg0);
  }
  if (!tmp) {
    tmp = require(dependencyMap[2])(arg0);
  }
  if (!tmp) {
    tmp = require(dependencyMap[3])();
  }
  return tmp;
};
