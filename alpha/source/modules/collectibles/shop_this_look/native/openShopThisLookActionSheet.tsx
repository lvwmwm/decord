// Module ID: 13046
// Function ID: 13047
// Name: openShopThisLookActionSheet
// Dependencies: [5055, 13047, 2000, 2]
// Exports: openShopThisLookActionSheet

// Module 13046 (openShopThisLookActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13047, dependencyMap.paths), c3, arg0, "stack");
};
