// Module ID: 7358
// Function ID: 7359
// Name: Sheet/showSimpleActionSheet
// Dependencies: [5253, 7359, 1995, 2]
// Exports: showSimpleActionSheet

// Module 7358 (Sheet/showSimpleActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Sheet/native/showSimpleActionSheet.native.tsx");

export function showSimpleActionSheet(key) {
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
  const tmp3 = key(1995)(7359, dependencyMap.paths);
  const merged1 = Object.assign(merged);
  openLazy(tmp3, key, obj, stackingBehavior);
}
