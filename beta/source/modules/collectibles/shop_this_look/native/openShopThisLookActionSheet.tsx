// Module ID: 13446
// Function ID: 13447
// Name: openShopThisLookActionSheet
// Dependencies: [4755, 13447, 1980, 2]
// Exports: openShopThisLookActionSheet

// Module 13446 (openShopThisLookActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13447, dependencyMap.paths), c3, arg0, "stack");
};
