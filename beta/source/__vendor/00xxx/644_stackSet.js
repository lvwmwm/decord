// Module ID: 644
// Function ID: 645
// Name: stackSet
// Dependencies: [612, 611, 596]

// Module 644 (stackSet)
import MapCache from "MapCache" /* 596 */;
import getNative from "getNative" /* 611 */;
import ListCache from "ListCache" /* 612 */;


export default function stackSet(arg0, arg1) {
  const self = this;
  const __data__ = this.__data__;
  let obj = __data__;
  if (__data__ instanceof ListCache) {
    if (getNative) {
      if (__data__.__data__.length >= 199) {
        const self2 = this;
        const self3 = this;
        const tmp4 = new MapCache(__data__.__data__);
        self.__data__ = tmp4;
        obj = tmp4;
      }
    }
    const items = [arg0, arg1];
    __data__.__data__.push(items);
    const sum = __data__.size + 1;
    __data__.size = sum;
    self.size = sum;
    return self;
  }
  const result = obj.set(arg0, arg1);
  self.size = obj.size;
  return self;
};
