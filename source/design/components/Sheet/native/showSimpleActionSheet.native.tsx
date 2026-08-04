// Module ID: 5644
// Function ID: 5645
// Name: showSimpleActionSheet
// Dependencies: [4253, 5645, 1959, 2]
// Exports: showSimpleActionSheet

// Module 5644 (showSimpleActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("design/components/Sheet/native/showSimpleActionSheet.native.tsx");

export const showSimpleActionSheet = function showSimpleActionSheet(key) {
  key = key.key;
  const merged = Object.assign(key, Object.create(null));
  let obj = importDefault(4253);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.hideActionSheet = function hideActionSheet() {
    outer1_1(outer1_2[0]).hideActionSheet(key);
  };
  obj.openLazy(key(1959)(5645, dependencyMap.paths), key, obj, key.stackingBehavior);
};
