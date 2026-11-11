// Module ID: 15573
// Function ID: 15574
// Name: openShopThisLookActionSheet
// Dependencies: [5489, 15574, 2118, 2]
// Exports: openShopThisLookActionSheet

// Module 15573 (openShopThisLookActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export function openShopThisLookActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15574, dependencyMap.paths), c3, arg0, "stack");
}
