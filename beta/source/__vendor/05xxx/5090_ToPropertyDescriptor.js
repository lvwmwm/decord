// Module ID: 5090
// Function ID: 5091
// Name: ToPropertyDescriptor
// Dependencies: [5038, 1286, 1318, 5091, 5073]

// Module 5090 (ToPropertyDescriptor)
import _mod5038 from "module_5038" /* 5038 */;


export default function ToPropertyDescriptor(enumerable) {
  if (_mod5038(enumerable)) {
    const obj = {};
    if (tmp(1318)(enumerable, "enumerable")) {
      obj["[[Enumerable]]"] = tmp(5091)(enumerable.enumerable);
    }
    if (tmp(1318)(enumerable, "configurable")) {
      obj["[[Configurable]]"] = tmp(5091)(enumerable.configurable);
    }
    if (tmp(1318)(enumerable, "value")) {
      obj["[[Value]]"] = enumerable.value;
    }
    if (tmp(1318)(enumerable, "writable")) {
      obj["[[Writable]]"] = tmp(5091)(enumerable.writable);
    }
    if (tmp(1318)(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!tmp(5073)(get)) {
          const tmp9 = new tmp(1286)("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (tmp(1318)(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!tmp(5073)(set)) {
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
