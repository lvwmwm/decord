// Module ID: 5057
// Function ID: 5058
// Name: ToPropertyDescriptor
// Dependencies: [5005, 1282, 1314, 5058, 5040]

// Module 5057 (ToPropertyDescriptor)
import _mod5005 from "module_5005" /* 5005 */;


export default function ToPropertyDescriptor(enumerable) {
  if (_mod5005(enumerable)) {
    const obj = {};
    if (tmp(1314)(enumerable, "enumerable")) {
      obj["[[Enumerable]]"] = tmp(5058)(enumerable.enumerable);
    }
    if (tmp(1314)(enumerable, "configurable")) {
      obj["[[Configurable]]"] = tmp(5058)(enumerable.configurable);
    }
    if (tmp(1314)(enumerable, "value")) {
      obj["[[Value]]"] = enumerable.value;
    }
    if (tmp(1314)(enumerable, "writable")) {
      obj["[[Writable]]"] = tmp(5058)(enumerable.writable);
    }
    if (tmp(1314)(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!tmp(5040)(get)) {
          const tmp9 = new tmp(1282)("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (tmp(1314)(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!tmp(5040)(set)) {
          const tmp13 = new tmp(1282)("setter must be a function");
          throw tmp13;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (tmp(1314)(obj, "[[Get]]")) {
      const tmp17 = new tmp(1282)("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
      throw tmp17;
    }
    return obj;
  } else {
    const tmp5 = new tmp(1282)("ToPropertyDescriptor requires an object");
    throw tmp5;
  }
};
