// Module ID: 14338
// Function ID: 14339
// Name: openShopThisLookActionSheet
// Dependencies: [5006, 14339, 2121, 2]
// Exports: openShopThisLookActionSheet

// Module 14338 (openShopThisLookActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export function openShopThisLookActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14339, dependencyMap.paths), c3, arg0, "stack");
}
