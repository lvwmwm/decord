// Module ID: 13241
// Function ID: 101834
// Name: getInternalSlots
// Dependencies: []

// Module 13241 (getInternalSlots)
arg5.default = function getInternalSlots(arg0) {
  let items = arg1;
  if (undefined === arg1) {
    items = [];
  }
  let value = weakMap.get(arg0);
  if (!value) {
    const _Object = Object;
    const obj = Object.create(null, items.reduce((arg0, arg1) => {
      arg0[arg1] = { enumerable: false, writable: true, configurable: true };
      return arg0;
    }, {}));
    const result = weakMap.set(arg0, obj);
    value = obj;
  }
  return value;
};
const weakMap = new WeakMap();
