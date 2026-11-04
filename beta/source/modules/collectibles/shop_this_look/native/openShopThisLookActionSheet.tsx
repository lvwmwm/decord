// Module ID: 14822
// Function ID: 14823
// Name: openShopThisLookActionSheet
// Dependencies: [5258, 14823, 1994, 2]
// Exports: openShopThisLookActionSheet

// Module 14822 (openShopThisLookActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export function openShopThisLookActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14823, dependencyMap.paths), c3, arg0, "stack");
}
