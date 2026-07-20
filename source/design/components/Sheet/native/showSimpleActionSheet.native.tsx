// Module ID: 5494
// Function ID: 46822
// Name: showSimpleActionSheet
// Dependencies: []
// Exports: showSimpleActionSheet

// Module 5494 (showSimpleActionSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("design/components/Sheet/native/showSimpleActionSheet.native.tsx");

export const showSimpleActionSheet = function showSimpleActionSheet(key) {
  const require = key;
  let obj = Object.create(null);
  obj.key = 0;
  obj.stackingBehavior = 0;
  const merged = Object.assign(key, obj);
  obj = importDefault(dependencyMap[0]);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["hideActionSheet"] = function hideActionSheet() {
    callback(closure_2[0]).hideActionSheet(key);
  };
  obj.openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), key.key, obj, key.stackingBehavior);
};
