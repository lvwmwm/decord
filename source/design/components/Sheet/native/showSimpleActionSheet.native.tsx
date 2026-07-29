// Module ID: 5549
// Function ID: 5550
// Name: showSimpleActionSheet
// Dependencies: [4157, 5550, 1959, 2]
// Exports: showSimpleActionSheet

// Module 5549 (showSimpleActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("design/components/Sheet/native/showSimpleActionSheet.native.tsx");

export const showSimpleActionSheet = function showSimpleActionSheet(key) {
  key = key.key;
  const merged = Object.assign(key, Object.create(null));
  let obj = importDefault(4157);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.hideActionSheet = function hideActionSheet() {
    outer1_1(outer1_2[0]).hideActionSheet(key);
  };
  obj.openLazy(key(1959)(5550, dependencyMap.paths), key, obj, key.stackingBehavior);
};
