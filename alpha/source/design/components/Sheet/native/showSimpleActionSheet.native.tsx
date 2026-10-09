// Module ID: 6885
// Function ID: 6886
// Name: Sheet/showSimpleActionSheet
// Dependencies: [5055, 6886, 2000, 2]
// Exports: showSimpleActionSheet

// Module 6885 (Sheet/showSimpleActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
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
  const tmp3 = key(2000)(6886, dependencyMap.paths);
  const merged1 = Object.assign(merged);
  openLazy(tmp3, key, obj, stackingBehavior);
};
