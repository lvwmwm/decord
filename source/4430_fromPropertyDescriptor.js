// Module ID: 4430
// Function ID: 38875
// Name: fromPropertyDescriptor
// Dependencies: []

// Module 4430 (fromPropertyDescriptor)

export default function fromPropertyDescriptor([[Value]]) {
  if (undefined === __Value__) {
    return __Value__;
  } else {
    const obj = {};
    if ("[[Value]]" in __Value__) {
      obj.value = __Value__.[[Value]];
    }
    if ("[[Writable]]" in __Value__) {
      obj.writable = __Value__.[[Writable]];
    }
    if ("[[Get]]" in __Value__) {
      obj.get = __Value__.[[Get]];
    }
    if ("[[Set]]" in __Value__) {
      obj.set = __Value__.[[Set]];
    }
    if ("[[Enumerable]]" in __Value__) {
      obj.enumerable = __Value__.[[Enumerable]];
    }
    if ("[[Configurable]]" in __Value__) {
      obj.configurable = __Value__.[[Configurable]];
    }
    return obj;
  }
};
