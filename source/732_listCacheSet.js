// Module ID: 732
// Function ID: 8767
// Name: listCacheSet
// Dependencies: []

// Module 732 (listCacheSet)

export default function listCacheSet(arg0, arg1) {
  const self = this;
  const __data__ = this.__data__;
  const tmp = require(dependencyMap[0])(__data__, arg0);
  if (tmp < 0) {
    self.size = self.size + 1;
    const items = [arg0, arg1];
    __data__.push(items);
  } else {
    __data__[tmp][1] = arg1;
  }
  return self;
};
