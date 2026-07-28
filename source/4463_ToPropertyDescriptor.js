// Module ID: 4463
// Function ID: 39038
// Name: ToPropertyDescriptor
// Dependencies: [4411, 518, 550, 4464, 4446]

// Module 4463 (ToPropertyDescriptor)

export default function ToPropertyDescriptor(enumerable) {
  if (require(4411) /* isObject */(enumerable)) {
    const obj = {};
    if (tmp(550)(enumerable, "enumerable")) {
      obj["[[Enumerable]]"] = require(4464) /* ToBoolean */(enumerable.enumerable);
    }
    if (require(550) /* bind */(enumerable, "configurable")) {
      obj["[[Configurable]]"] = require(4464) /* ToBoolean */(enumerable.configurable);
    }
    if (require(550) /* bind */(enumerable, "value")) {
      obj["[[Value]]"] = enumerable.value;
    }
    if (require(550) /* bind */(enumerable, "writable")) {
      obj["[[Writable]]"] = require(4464) /* ToBoolean */(enumerable.writable);
    }
    if (require(550) /* bind */(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!require(4446) /* apply */(get)) {
          let tmp26 = require(518);
          const prototype2 = tmp26.prototype;
          tmp26 = new tmp26("getter must be a function");
          throw tmp26;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (require(550) /* bind */(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!require(4446) /* apply */(set)) {
          let tmp37 = require(518);
          const prototype3 = tmp37.prototype;
          tmp37 = new tmp37("setter must be a function");
          throw tmp37;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (require(550) /* bind */(obj, "[[Get]]")) {
      let tmp52 = require(518);
      const prototype4 = tmp52.prototype;
      tmp52 = new tmp52("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
      throw tmp52;
    }
    return obj;
  } else {
    let tmpResult = tmp(518);
    const prototype = tmpResult.prototype;
    tmpResult = new tmpResult("ToPropertyDescriptor requires an object");
    throw tmpResult;
  }
};
