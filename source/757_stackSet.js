// Module ID: 757
// Function ID: 8815
// Name: stackSet
// Dependencies: [725, 724, 709]

// Module 757 (stackSet)

export default function stackSet(arg0, arg1) {
  const self = this;
  let __data__ = this.__data__;
  let obj = __data__;
  if (__data__ instanceof require(725) /* ListCache */) {
    __data__ = __data__.__data__;
    if (require(724) /* getNative */) {
      if (__data__.length >= 199) {
        let tmp5 = require(709) /* MapCache */;
        const prototype = tmp5.prototype;
        tmp5 = new tmp5(__data__);
        self.__data__ = tmp5;
        obj = tmp5;
      }
    }
    const items = [arg0, arg1];
    __data__.push(items);
    const sum = __data__.size + 1;
    __data__.size = sum;
    self.size = sum;
    return self;
  }
  const result = obj.set(arg0, arg1);
  self.size = obj.size;
  return self;
};
