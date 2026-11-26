// Module ID: 14870
// Function ID: 14871
// Name: openShopThisLookActionSheet
// Dependencies: [5257, 14871, 2120, 2]
// Exports: openShopThisLookActionSheet

// Module 14870 (openShopThisLookActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export function openShopThisLookActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14871, dependencyMap.paths), c3, arg0, "stack");
}
