// Module ID: 14458
// Function ID: 14459
// Name: getInternalSlots
// Dependencies: []
// Exports: default

// Module 14458 (getInternalSlots)
const weakMap = new WeakMap();

export default function getInternalSlots(arg0, arg1) {
  let items = arg1;
  if (undefined === arg1) {
    items = [];
  }
  let value = weakMap.get(arg0);
  const obj = weakMap;
  if (!value) {
    const _Object = Object;
    const obj2 = Object.create(null, items.reduce((acc, item) => {
      acc[item] = { enumerable: false, writable: true, configurable: true };
      return acc;
    }, {}));
    const result = obj.set(arg0, obj2);
    value = obj2;
  }
  return value;
};
