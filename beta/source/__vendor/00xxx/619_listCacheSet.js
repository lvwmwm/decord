// Module ID: 619
// Function ID: 620
// Name: listCacheSet
// Dependencies: [615]

// Module 619 (listCacheSet)
import assocIndexOf from "assocIndexOf" /* 615 */;


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
