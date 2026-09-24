// Module ID: 13513
// Function ID: 13514
// Name: openShopThisLookActionSheet
// Dependencies: [4796, 13514, 1980, 2]
// Exports: openShopThisLookActionSheet

// Module 13513 (openShopThisLookActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13514, dependencyMap.paths), c3, arg0, "stack");
};
