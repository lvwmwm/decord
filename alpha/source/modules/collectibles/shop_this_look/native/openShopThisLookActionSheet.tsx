// Module ID: 13916
// Function ID: 13917
// Name: openShopThisLookActionSheet
// Dependencies: [5115, 13917, 2000, 2]
// Exports: openShopThisLookActionSheet

// Module 13916 (openShopThisLookActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13917, dependencyMap.paths), c3, arg0, "stack");
};
