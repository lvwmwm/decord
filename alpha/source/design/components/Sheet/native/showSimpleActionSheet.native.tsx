// Module ID: 7276
// Function ID: 7277
// Name: Sheet/showSimpleActionSheet
// Dependencies: [5196, 7277, 2002, 2]
// Exports: showSimpleActionSheet

// Module 7276 (Sheet/showSimpleActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Sheet/native/showSimpleActionSheet.native.tsx");

export const showSimpleActionSheet = function showSimpleActionSheet(key) {
  key = key.key;
  const stackingBehavior = key.stackingBehavior;
  const merged = Object.assign(key, Object.assign({ key: 0, stackingBehavior: 0 }));
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  let obj = {
    hideActionSheet() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(key);
    }
  };
  const tmp3 = key(2002)(7277, dependencyMap.paths);
  const merged1 = Object.assign(merged);
  openLazy(tmp3, key, obj, stackingBehavior);
};
