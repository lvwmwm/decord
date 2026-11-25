// Module ID: 14436
// Function ID: 14437
// Name: openShopThisLookActionSheet
// Dependencies: [5127, 14437, 2119, 2]
// Exports: openShopThisLookActionSheet

// Module 14436 (openShopThisLookActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export function openShopThisLookActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14437, dependencyMap.paths), c3, arg0, "stack");
}
