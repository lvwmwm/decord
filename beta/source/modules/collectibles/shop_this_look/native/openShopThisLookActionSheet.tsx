// Module ID: 12555
// Function ID: 12556
// Name: openShopThisLookActionSheet
// Dependencies: [4800, 12556, 1981, 2]
// Exports: openShopThisLookActionSheet

// Module 12555 (openShopThisLookActionSheet)
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12556, dependencyMap.paths), c3, arg0, "stack");
};
