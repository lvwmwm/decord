// Module ID: 5151
// Function ID: 5152
// Name: ToPropertyDescriptor
// Dependencies: [5099, 1282, 1314, 5152, 5134]

// Module 5151 (ToPropertyDescriptor)
import _mod1282 from "module_1282" /* 1282 */;
import bind from "bind" /* 1314 */;
import isObject from "isObject" /* 5099 */;
import _mod5134 from "module_5134" /* 5134 */;
import ToBoolean from "ToBoolean" /* 5152 */;


export default function ToPropertyDescriptor(enumerable) {
  if (isObject(enumerable)) {
    const obj = {};
    if (bind(enumerable, "enumerable")) {
      obj["[[Enumerable]]"] = ToBoolean(enumerable.enumerable);
    }
    if (bind(enumerable, "configurable")) {
      obj["[[Configurable]]"] = ToBoolean(enumerable.configurable);
    }
    if (bind(enumerable, "value")) {
      obj["[[Value]]"] = enumerable.value;
    }
    if (bind(enumerable, "writable")) {
      obj["[[Writable]]"] = ToBoolean(enumerable.writable);
    }
    if (bind(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!_mod5134(get)) {
          const self3 = this;
          const self4 = this;
          const tmp5 = new _mod1282("getter must be a function");
          throw tmp5;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (bind(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!_mod5134(enumerable.set)) {
          const self5 = this;
          const self6 = this;
          const tmp7 = new _mod1282("setter must be a function");
          throw tmp7;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (bind(obj, "[[Get]]")) {
      const self7 = this;
      const self8 = this;
      const tmp9 = new _mod1282("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
      throw tmp9;
    }
    return obj;
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1282("ToPropertyDescriptor requires an object");
    throw tmp3;
  }
};
