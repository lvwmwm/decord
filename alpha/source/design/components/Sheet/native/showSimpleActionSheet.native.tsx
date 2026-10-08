// Module ID: 6878
// Function ID: 6879
// Name: Sheet/showSimpleActionSheet
// Dependencies: [5054, 6879, 1999, 2]
// Exports: showSimpleActionSheet

// Module 6878 (Sheet/showSimpleActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
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
  const tmp3 = key(1999)(6879, dependencyMap.paths);
  const merged1 = Object.assign(merged);
  openLazy(tmp3, key, obj, stackingBehavior);
};
