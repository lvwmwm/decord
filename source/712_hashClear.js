// Module ID: 712
// Function ID: 8726
// Name: hashClear
// Dependencies: [759]

// Module 712 (hashClear)

export default function hashClear() {
  const self = this;
  if (require(dependencyMap[0])) {
    let obj = require(dependencyMap[0])(null);
  } else {
    obj = {};
  }
  self.__data__ = obj;
  self.size = 0;
};
