// Module ID: 1889
// Function ID: 21098
// Name: combineKey
// Dependencies: [1890, 2]
// Exports: combineKey, combineKeyPrefix

// Module 1889 (combineKey)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/kv-storage/js/util/Key.tsx");

export const combineKey = function combineKey(prefix, items) {
  if (Array.isArray(items)) {
    items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(prefix, 0));
    let items1 = items;
  } else {
    items1 = [];
    arraySpreadResult = HermesBuiltin.arraySpread(prefix, 0);
    items1[arraySpreadResult] = items;
    const sum = arraySpreadResult + 1;
  }
  if (items1.length >= 1) {
    if (items1.length <= require(1890) /* TableId */.MAXIMUM_KEY_BITS) {
      return items1;
    }
  }
  const error = new Error("combination results in an invalid key that has " + items1.length + " elements: " + JSON.stringify(items1));
  throw error;
};
export const combineKeyPrefix = function combineKeyPrefix(prefix, items) {
  if (Array.isArray(items)) {
    items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(prefix, 0));
    let items1 = items;
  } else {
    items1 = [];
    arraySpreadResult = HermesBuiltin.arraySpread(prefix, 0);
    items1[arraySpreadResult] = items;
    const sum = arraySpreadResult + 1;
  }
  if (items1.length <= require(1890) /* TableId */.MAXIMUM_KEY_BITS) {
    return items1;
  } else {
    const _Error = Error;
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    const error = new Error("combination results in an invalid prefix key that has " + items1.length + " elements: " + JSON.stringify(items1));
    throw error;
  }
};
