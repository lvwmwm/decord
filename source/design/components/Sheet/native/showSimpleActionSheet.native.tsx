// Module ID: 5801
// Function ID: 5802
// Name: showSimpleActionSheet
// Dependencies: [4312, 5802, 2007, 2]
// Exports: showSimpleActionSheet

// Module 5801 (showSimpleActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("design/components/Sheet/native/showSimpleActionSheet.native.tsx");

export const showSimpleActionSheet = function showSimpleActionSheet(key) {
  key = key.key;
  const merged = Object.assign(key, Object.create(null));
  let obj = importDefault(4312);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.hideActionSheet = function hideActionSheet() {
    outer1_1(outer1_2[0]).hideActionSheet(key);
  };
  obj.openLazy(key(2007)(5802, dependencyMap.paths), key, obj, key.stackingBehavior);
};
