// Module ID: 755
// Function ID: 756
// Name: listCacheSet
// Dependencies: [751]

// Module 755 (listCacheSet)

export default function listCacheSet(arg0, arg1) {
  const self = this;
  const __data__ = this.__data__;
  const tmp = require(751) /* assocIndexOf */(__data__, arg0);
  if (tmp < 0) {
    self.size = self.size + 1;
    const items = [arg0, arg1];
    __data__.push(items);
  } else {
    __data__[tmp][1] = arg1;
  }
  return self;
};
