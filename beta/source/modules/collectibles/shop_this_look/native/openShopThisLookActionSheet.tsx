// Module ID: 13432
// Function ID: 13433
// Name: openShopThisLookActionSheet
// Dependencies: [4725, 13433, 1984, 2]
// Exports: openShopThisLookActionSheet

// Module 13432 (openShopThisLookActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13433, dependencyMap.paths), c3, arg0, "stack");
};
