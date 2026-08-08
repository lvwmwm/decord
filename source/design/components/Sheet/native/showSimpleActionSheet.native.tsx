// Module ID: 5762
// Function ID: 5763
// Name: showSimpleActionSheet
// Dependencies: [4271, 5763, 1988, 2]
// Exports: showSimpleActionSheet

// Module 5762 (showSimpleActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("design/components/Sheet/native/showSimpleActionSheet.native.tsx");

export const showSimpleActionSheet = function showSimpleActionSheet(key) {
  key = key.key;
  const merged = Object.assign(key, Object.create(null));
  let obj = importDefault(4271);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.hideActionSheet = function hideActionSheet() {
    outer1_1(outer1_2[0]).hideActionSheet(key);
  };
  obj.openLazy(key(1988)(5763, dependencyMap.paths), key, obj, key.stackingBehavior);
};
