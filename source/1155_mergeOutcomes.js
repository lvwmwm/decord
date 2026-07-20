// Module ID: 1155
// Function ID: 13135
// Name: mergeOutcomes
// Dependencies: []
// Exports: mergeOutcomes

// Module 1155 (mergeOutcomes)
let closure_0 = importDefault(dependencyMap[0]);

export const mergeOutcomes = function mergeOutcomes(_outcomesBuffer, _clearOutcomesResult) {
  const map = new Map();
  const callback = map;
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
  return callback(map.values());
};
