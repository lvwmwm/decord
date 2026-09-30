// Module ID: 12755
// Function ID: 12756
// Name: openShopThisLookActionSheet
// Dependencies: [4830, 12756, 1981, 2]
// Exports: openShopThisLookActionSheet

// Module 12755 (openShopThisLookActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12756, dependencyMap.paths), c3, arg0, "stack");
};
