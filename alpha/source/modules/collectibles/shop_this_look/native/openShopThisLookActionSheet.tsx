// Module ID: 15033
// Function ID: 15034
// Name: openShopThisLookActionSheet
// Dependencies: [5382, 15034, 2123, 2]
// Exports: openShopThisLookActionSheet

// Module 15033 (openShopThisLookActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export function openShopThisLookActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15034, dependencyMap.paths), c3, arg0, "stack");
}
