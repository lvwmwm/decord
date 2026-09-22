// Module ID: 4937
// Function ID: 4938
// Name: ToPropertyDescriptor
// Dependencies: [4885, 1281, 1313, 4938, 4920]

// Module 4937 (ToPropertyDescriptor)
import _mod4885 from "module_4885" /* 4885 */;


export default function ToPropertyDescriptor(enumerable) {
  if (_mod4885(enumerable)) {
    const obj = {};
    if (tmp(1313)(enumerable, "enumerable")) {
      obj["[[Enumerable]]"] = tmp(4938)(enumerable.enumerable);
    }
    if (tmp(1313)(enumerable, "configurable")) {
      obj["[[Configurable]]"] = tmp(4938)(enumerable.configurable);
    }
    if (tmp(1313)(enumerable, "value")) {
      obj["[[Value]]"] = enumerable.value;
    }
    if (tmp(1313)(enumerable, "writable")) {
      obj["[[Writable]]"] = tmp(4938)(enumerable.writable);
    }
    if (tmp(1313)(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!tmp(4920)(get)) {
          const tmp9 = new tmp(1281)("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (tmp(1313)(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!tmp(4920)(set)) {
          const tmp13 = new tmp(1281)("setter must be a function");
          throw tmp13;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (tmp(1313)(obj, "[[Get]]")) {
      const tmp17 = new tmp(1281)("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
      throw tmp17;
    }
    return obj;
  } else {
    const tmp5 = new tmp(1281)("ToPropertyDescriptor requires an object");
    throw tmp5;
  }
};
