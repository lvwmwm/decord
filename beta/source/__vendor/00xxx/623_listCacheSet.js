// Module ID: 623
// Function ID: 624
// Name: listCacheSet
// Dependencies: [619]

// Module 623 (listCacheSet)
import assocIndexOf from "assocIndexOf" /* 619 */;


export default function listCacheSet(arg0, arg1) {
  const self = this;
  const __data__ = this.__data__;
  const tmp = assocIndexOf(__data__, arg0);
  if (tmp < 0) {
    self.size = self.size + 1;
    const items = [arg0, arg1];
    __data__.push(items);
  } else {
    __data__[tmp][1] = arg1;
  }
  return self;
};
