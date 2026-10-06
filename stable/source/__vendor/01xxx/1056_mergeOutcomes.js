// Module ID: 1056
// Function ID: 1057
// Name: mergeOutcomes
// Dependencies: []
// Exports: mergeOutcomes

// Module 1056 (mergeOutcomes)
let map;


export const mergeOutcomes = function mergeOutcomes() {
  const items = [...arguments];
  map = new Map();
  function process(reason) {
    const combined = "" + reason.reason + ":" + reason.category;
    const value = map.get(combined);
    const obj = map;
    if (value) {
      value.quantity = value.quantity + reason.quantity;
    } else {
      const result = obj.set(combined, reason);
    }
  }
  const item = items.forEach((arr) => arr.forEach(process));
  const items1 = [...map.values()];
  return items1;
};
