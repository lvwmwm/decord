// Module ID: 14817
// Function ID: 14818
// Name: openShopThisLookActionSheet
// Dependencies: [5226, 14818, 2119, 2]
// Exports: openShopThisLookActionSheet

// Module 14817 (openShopThisLookActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export function openShopThisLookActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14818, dependencyMap.paths), c3, arg0, "stack");
}
