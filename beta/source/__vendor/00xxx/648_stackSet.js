// Module ID: 648
// Function ID: 649
// Name: stackSet
// Dependencies: [616, 615, 600]

// Module 648 (stackSet)
import ListCache from "ListCache" /* 616 */;


export default function stackSet(arg0, arg1) {
  const self = this;
  const __data__ = this.__data__;
  let obj = __data__;
  if (__data__ instanceof ListCache) {
    const __data__1 = __data__.__data__;
    if (tmp(615)) {
      if (__data__1.length >= 199) {
        const tmp6 = new tmp(600)(__data__1);
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
