// Module ID: 14780
// Function ID: 14781
// Name: openShopThisLookActionSheet
// Dependencies: [5253, 14781, 1995, 2]
// Exports: openShopThisLookActionSheet

// Module 14780 (openShopThisLookActionSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export function openShopThisLookActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14781, dependencyMap.paths), c3, arg0, "stack");
}
