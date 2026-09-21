// Module ID: 5058
// Function ID: 5059
// Name: ToPropertyDescriptor
// Dependencies: [5006, 1286, 1318, 5059, 5041]

// Module 5058 (ToPropertyDescriptor)
import _mod5006 from "module_5006" /* 5006 */;


export default function ToPropertyDescriptor(enumerable) {
  if (_mod5006(enumerable)) {
    const obj = {};
    if (tmp(1318)(enumerable, "enumerable")) {
      obj["[[Enumerable]]"] = tmp(5059)(enumerable.enumerable);
    }
    if (tmp(1318)(enumerable, "configurable")) {
      obj["[[Configurable]]"] = tmp(5059)(enumerable.configurable);
    }
    if (tmp(1318)(enumerable, "value")) {
      obj["[[Value]]"] = enumerable.value;
    }
    if (tmp(1318)(enumerable, "writable")) {
      obj["[[Writable]]"] = tmp(5059)(enumerable.writable);
    }
    if (tmp(1318)(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!tmp(5041)(get)) {
          const tmp9 = new tmp(1286)("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (tmp(1318)(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!tmp(5041)(set)) {
          const tmp13 = new tmp(1286)("setter must be a function");
          throw tmp13;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (tmp(1318)(obj, "[[Get]]")) {
      const tmp17 = new tmp(1286)("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
      throw tmp17;
    }
    return obj;
  } else {
    const tmp5 = new tmp(1286)("ToPropertyDescriptor requires an object");
    throw tmp5;
  }
};
