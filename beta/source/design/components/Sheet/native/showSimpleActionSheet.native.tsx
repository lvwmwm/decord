// Module ID: 6617
// Function ID: 6618
// Name: Sheet/showSimpleActionSheet
// Dependencies: [4801, 6618, 1987, 2]
// Exports: showSimpleActionSheet

// Module 6617 (Sheet/showSimpleActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
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
  const tmp3 = key(1987)(6618, dependencyMap.paths);
  const merged1 = Object.assign(merged);
  openLazy(tmp3, key, obj, stackingBehavior);
};
