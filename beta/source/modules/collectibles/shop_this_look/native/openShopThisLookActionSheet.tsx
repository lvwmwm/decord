// Module ID: 15086
// Function ID: 15087
// Name: openShopThisLookActionSheet
// Dependencies: [5406, 15087, 2118, 2]
// Exports: openShopThisLookActionSheet

// Module 15086 (openShopThisLookActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export function openShopThisLookActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15087, dependencyMap.paths), c3, arg0, "stack");
}
