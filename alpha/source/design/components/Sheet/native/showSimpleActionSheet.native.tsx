// Module ID: 7442
// Function ID: 7443
// Name: Sheet/showSimpleActionSheet
// Dependencies: [4724, 7443, 1980, 2]
// Exports: showSimpleActionSheet

// Module 7442 (Sheet/showSimpleActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
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
  obj.openLazy(key(1980)(7443, dependencyMap.paths), key, obj2, key.stackingBehavior);
};
