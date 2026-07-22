// Module ID: 727
// Function ID: 8757
// Name: listCacheDelete
// Dependencies: []

// Module 727 (listCacheDelete)

export default function listCacheDelete(arg0) {
  const self = this;
  const __data__ = this.__data__;
  const tmp = require(dependencyMap[0])(__data__, arg0);
  if (tmp < 0) {
    return !tmp2;
  } else {
    if (tmp == __data__.length - 1) {
      __data__.pop();
    } else {
      splice.call(__data__, tmp, 1);
    }
    self.size = self.size - 1;
  }
};
