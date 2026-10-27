// Module ID: 14288
// Function ID: 14289
// Name: openShopThisLookActionSheet
// Dependencies: [5211, 14289, 1999, 2]
// Exports: openShopThisLookActionSheet

// Module 14288 (openShopThisLookActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14289, dependencyMap.paths), c3, arg0, "stack");
};
