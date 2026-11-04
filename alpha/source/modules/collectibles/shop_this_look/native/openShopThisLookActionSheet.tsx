// Module ID: 15034
// Function ID: 15035
// Name: openShopThisLookActionSheet
// Dependencies: [5382, 15035, 2123, 2]
// Exports: openShopThisLookActionSheet

// Module 15034 (openShopThisLookActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export function openShopThisLookActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15035, dependencyMap.paths), c3, arg0, "stack");
}
