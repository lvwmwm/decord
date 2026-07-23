// Module ID: 1155
// Function ID: 13140
// Name: mergeOutcomes
// Dependencies: [65]
// Exports: mergeOutcomes

// Module 1155 (mergeOutcomes)
import _toConsumableArray from "_toConsumableArray";


export const mergeOutcomes = function mergeOutcomes(_outcomesBuffer, _clearOutcomesResult) {
  const map = new Map();
  function process(reason) {
    const combined = "" + reason.reason + ":" + reason.category;
    const value = map.get(combined);
    if (value) {
      value.quantity = value.quantity + reason.quantity;
    } else {
      const result = map.set(combined, reason);
    }
  }
  const length = arguments.length;
  const arr = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    arr[num] = arguments[num];
  }
  const item = arr.forEach((arr) => arr.forEach(process));
  return map(map.values());
};
