// Module ID: 757
// Function ID: 8809
// Name: stackSet
// Dependencies: []

// Module 757 (stackSet)

export default function stackSet(arg0, arg1) {
  const self = this;
  let __data__ = this.__data__;
  let obj = __data__;
  if (__data__ instanceof require(dependencyMap[0])) {
    __data__ = __data__.__data__;
    if (require(dependencyMap[1])) {
      if (__data__.length >= 199) {
        let tmp5 = require(dependencyMap[2]);
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
