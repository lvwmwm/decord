// Module ID: 12800
// Function ID: 12801
// Name: openShopThisLookActionSheet
// Dependencies: [4854, 12801, 1987, 2]
// Exports: openShopThisLookActionSheet

// Module 12800 (openShopThisLookActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12801, dependencyMap.paths), c3, arg0, "stack");
};
