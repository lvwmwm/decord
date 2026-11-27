// Module ID: 14876
// Function ID: 14877
// Name: openShopThisLookActionSheet
// Dependencies: [5257, 14877, 2120, 2]
// Exports: openShopThisLookActionSheet

// Module 14876 (openShopThisLookActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export function openShopThisLookActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14877, dependencyMap.paths), c3, arg0, "stack");
}
