// Module ID: 753
// Function ID: 8805
// Name: stackClear
// Dependencies: []

// Module 753 (stackClear)

export default function stackClear() {
  let tmp = require(dependencyMap[0]);
  tmp = new tmp();
  this.__data__ = tmp;
  this.size = 0;
};
