// Module ID: 7472
// Function ID: 7473
// Name: Sheet/showSimpleActionSheet
// Dependencies: [4755, 7473, 1980, 2]
// Exports: showSimpleActionSheet

// Module 7472 (Sheet/showSimpleActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Sheet/native/showSimpleActionSheet.native.tsx");

export const showSimpleActionSheet = function showSimpleActionSheet(key) {
  key = key.key;
  const merged = Object.assign(key, Object.assign({ key: 0, stackingBehavior: 0 }));
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.hideActionSheet = function hideActionSheet() {
    ActionSheetActionCreatorsDefault.hideActionSheet(key);
  };
  obj.openLazy(key(1980)(7473, dependencyMap.paths), key, obj2, key.stackingBehavior);
};
