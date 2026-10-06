// Module ID: 49
// Function ID: 50
// Name: defineLazyObjectProperty
// Dependencies: []
// Exports: default

// Module 49 (defineLazyObjectProperty)
let closure_2;


export default function defineLazyObjectProperty(arg0, arg1, get) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  get = get.get;
  let tmp = false !== get.enumerable;
  const enumerable = tmp;
  const writable = false !== get.writable;
  let c6 = false;
  let obj = {
    get: function getValue() {
      const tmp = c6;
      if (!tmp) {
        const tmp3 = get();
        closure_2 = tmp3;
        c6 = true;
        const _Object = Object;
        const obj = { value: tmp3, configurable: true, enumerable, writable };
        Object.defineProperty(closure_0, closure_1, obj);
      }
      return closure_2;
    },
    set: function setValue(value) {
      closure_2 = value;
      c6 = true;
      const obj = { value, configurable: true, enumerable, writable };
      Object.defineProperty(closure_0, closure_1, obj);
    },
    configurable: true,
    enumerable: tmp
  };
  Object.defineProperty(arg0, arg1, obj);
};
