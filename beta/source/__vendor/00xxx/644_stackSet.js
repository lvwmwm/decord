// Module ID: 644
// Function ID: 645
// Name: stackSet
// Dependencies: [612, 611, 596]

// Module 644 (stackSet)
import ListCache from "ListCache" /* 612 */;


export default function stackSet(arg0, arg1) {
  const self = this;
  const __data__ = this.__data__;
  let obj = __data__;
  if (__data__ instanceof ListCache) {
    const __data__1 = __data__.__data__;
    if (tmp(611)) {
      if (__data__1.length >= 199) {
        const tmp6 = new tmp(596)(__data__1);
        self.__data__ = tmp6;
        obj = tmp6;
      }
    }
    const items = [arg0, arg1];
    __data__1.push(items);
    const sum = __data__.size + 1;
    __data__.size = sum;
    self.size = sum;
    return self;
  }
  const result = obj.set(arg0, arg1);
  self.size = obj.size;
  return self;
};
