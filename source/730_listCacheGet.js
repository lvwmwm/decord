// Module ID: 730
// Function ID: 8759
// Name: listCacheGet
// Dependencies: []

// Module 730 (listCacheGet)

export default function listCacheGet(arg0) {
  const __data__ = this.__data__;
  let tmp;
  const tmp2 = require(dependencyMap[0])(__data__, arg0);
  if (tmp2 >= 0) {
    tmp = __data__[tmp2][1];
  }
  return tmp;
};
