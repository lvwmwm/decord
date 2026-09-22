// Module ID: 13247
// Function ID: 13248
// Name: openShopThisLookActionSheet
// Dependencies: [4603, 13248, 1896, 2]
// Exports: openShopThisLookActionSheet

// Module 13247 (openShopThisLookActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13248, dependencyMap.paths), c3, arg0, "stack");
};
