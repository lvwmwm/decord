// Module ID: 5702
// Function ID: 5703
// Name: showSimpleActionSheet
// Dependencies: [4270, 5703, 1988, 2]
// Exports: showSimpleActionSheet

// Module 5702 (showSimpleActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("design/components/Sheet/native/showSimpleActionSheet.native.tsx");

export const showSimpleActionSheet = function showSimpleActionSheet(key) {
  key = key.key;
  const merged = Object.assign(key, Object.create(null));
  let obj = importDefault(4270);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.hideActionSheet = function hideActionSheet() {
    outer1_1(outer1_2[0]).hideActionSheet(key);
  };
  obj.openLazy(key(1988)(5703, dependencyMap.paths), key, obj, key.stackingBehavior);
};
