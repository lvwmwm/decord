// Module ID: 12966
// Function ID: 12967
// Name: openShopThisLookActionSheet
// Dependencies: [5054, 12967, 1999, 2]
// Exports: openShopThisLookActionSheet

// Module 12966 (openShopThisLookActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12967, dependencyMap.paths), c3, arg0, "stack");
};
