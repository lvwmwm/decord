// Module ID: 4424
// Function ID: 38879
// Name: ToPropertyDescriptor
// Dependencies: []

// Module 4424 (ToPropertyDescriptor)

export default function ToPropertyDescriptor(enumerable) {
  if (require(dependencyMap[0])(enumerable)) {
    const obj = {};
    if (tmp(tmp2[2])(enumerable, "enumerable")) {
      obj.[[Enumerable]] = require(dependencyMap[3])(enumerable.enumerable);
    }
    if (require(dependencyMap[2])(enumerable, "configurable")) {
      obj.[[Configurable]] = require(dependencyMap[3])(enumerable.configurable);
    }
    if (require(dependencyMap[2])(enumerable, "value")) {
      obj.[[Value]] = enumerable.value;
    }
    if (require(dependencyMap[2])(enumerable, "writable")) {
      obj.[[Writable]] = require(dependencyMap[3])(enumerable.writable);
    }
    if (require(dependencyMap[2])(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!require(dependencyMap[4])(get)) {
          let tmp26 = require(dependencyMap[1]);
          const prototype2 = tmp26.prototype;
          tmp26 = new tmp26("getter must be a function");
          throw tmp26;
        }
      }
      obj.[[Get]] = get;
    }
    if (require(dependencyMap[2])(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!require(dependencyMap[4])(set)) {
          let tmp37 = require(dependencyMap[1]);
          const prototype3 = tmp37.prototype;
          tmp37 = new tmp37("setter must be a function");
          throw tmp37;
        }
      }
      obj.[[Set]] = enumerable.set;
    }
    if (require(dependencyMap[2])(obj, "[[Get]]")) {
      let tmp52 = require(dependencyMap[1]);
      const prototype4 = tmp52.prototype;
      tmp52 = new tmp52("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
      throw tmp52;
    }
    return obj;
  } else {
    let tmpResult = tmp(tmp2[1]);
    const prototype = tmpResult.prototype;
    tmpResult = new tmpResult("ToPropertyDescriptor requires an object");
    throw tmpResult;
  }
};
