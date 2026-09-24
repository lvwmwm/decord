// Module ID: 13468
// Function ID: 13469
// Name: openShopThisLookActionSheet
// Dependencies: [4757, 13469, 1984, 2]
// Exports: openShopThisLookActionSheet

// Module 13468 (openShopThisLookActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13469, dependencyMap.paths), c3, arg0, "stack");
};
