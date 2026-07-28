// Module ID: 5531
// Function ID: 47033
// Name: showSimpleActionSheet
// Dependencies: [4133, 5532, 1935, 2]
// Exports: showSimpleActionSheet

// Module 5531 (showSimpleActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("design/components/Sheet/native/showSimpleActionSheet.native.tsx");

export const showSimpleActionSheet = function showSimpleActionSheet(key) {
  key = key.key;
  let obj = Object.create(null);
  obj.key = 0;
  obj.stackingBehavior = 0;
  const merged = Object.assign(key, obj);
  obj = importDefault(4133);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["hideActionSheet"] = function hideActionSheet() {
    outer1_1(outer1_2[0]).hideActionSheet(key);
  };
  obj.openLazy(key(1935)(5532, dependencyMap.paths), key, obj, key.stackingBehavior);
};
