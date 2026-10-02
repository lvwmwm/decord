// Module ID: 631
// Function ID: 632
// Name: listCacheSet
// Dependencies: [627]

// Module 631 (listCacheSet)
import assocIndexOf from "assocIndexOf" /* 627 */;


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
