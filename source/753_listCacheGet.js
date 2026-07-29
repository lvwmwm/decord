// Module ID: 753
// Function ID: 754
// Name: listCacheGet
// Dependencies: [751]

// Module 753 (listCacheGet)

export default function listCacheGet(arg0) {
  const __data__ = this.__data__;
  const tmp = require(751) /* assocIndexOf */(__data__, arg0);
  let tmp2;
  if (tmp >= 0) {
    tmp2 = __data__[tmp][1];
  }
  return tmp2;
};
