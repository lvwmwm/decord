// Module ID: 13098
// Function ID: 13099
// Name: openShopThisLookActionSheet
// Dependencies: [5056, 13099, 2000, 2]
// Exports: openShopThisLookActionSheet

// Module 13098 (openShopThisLookActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13099, dependencyMap.paths), c3, arg0, "stack");
};
