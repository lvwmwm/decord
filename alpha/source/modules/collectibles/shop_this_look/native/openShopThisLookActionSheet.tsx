// Module ID: 12819
// Function ID: 12820
// Name: openShopThisLookActionSheet
// Dependencies: [4860, 12820, 1987, 2]
// Exports: openShopThisLookActionSheet

// Module 12819 (openShopThisLookActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12820, dependencyMap.paths), c3, arg0, "stack");
};
