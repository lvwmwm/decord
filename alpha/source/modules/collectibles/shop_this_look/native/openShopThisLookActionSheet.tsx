// Module ID: 14232
// Function ID: 14233
// Name: openShopThisLookActionSheet
// Dependencies: [5208, 14233, 2002, 2]
// Exports: openShopThisLookActionSheet

// Module 14232 (openShopThisLookActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14233, dependencyMap.paths), c3, arg0, "stack");
};
