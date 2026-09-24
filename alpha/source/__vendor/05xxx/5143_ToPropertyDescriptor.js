// Module ID: 5143
// Function ID: 5144
// Name: ToPropertyDescriptor
// Dependencies: [5091, 1282, 1314, 5144, 5126]

// Module 5143 (ToPropertyDescriptor)
import _mod5091 from "module_5091" /* 5091 */;


export default function ToPropertyDescriptor(enumerable) {
  if (_mod5091(enumerable)) {
    const obj = {};
    if (tmp(1314)(enumerable, "enumerable")) {
      obj["[[Enumerable]]"] = tmp(5144)(enumerable.enumerable);
    }
    if (tmp(1314)(enumerable, "configurable")) {
      obj["[[Configurable]]"] = tmp(5144)(enumerable.configurable);
    }
    if (tmp(1314)(enumerable, "value")) {
      obj["[[Value]]"] = enumerable.value;
    }
    if (tmp(1314)(enumerable, "writable")) {
      obj["[[Writable]]"] = tmp(5144)(enumerable.writable);
    }
    if (tmp(1314)(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!tmp(5126)(get)) {
          const tmp9 = new tmp(1282)("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (tmp(1314)(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!tmp(5126)(set)) {
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
