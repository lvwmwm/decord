// Module ID: 5802
// Function ID: 5803
// Name: showSimpleActionSheet
// Dependencies: [4310, 5803, 2007, 2]
// Exports: showSimpleActionSheet

// Module 5802 (showSimpleActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("design/components/Sheet/native/showSimpleActionSheet.native.tsx");

export const showSimpleActionSheet = function showSimpleActionSheet(key) {
  key = key.key;
  const merged = Object.assign(key, Object.create(null));
  let obj = importDefault(4310);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.hideActionSheet = function hideActionSheet() {
    outer1_1(outer1_2[0]).hideActionSheet(key);
  };
  obj.openLazy(key(2007)(5803, dependencyMap.paths), key, obj, key.stackingBehavior);
};
