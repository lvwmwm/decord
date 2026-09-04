// Module ID: 13038
// Function ID: 13039
// Name: SHOP_THIS_LOOK_ACTION_SHEET_KEY
// Dependencies: [4448, 13039, 2008, 2]
// Exports: openShopThisLookActionSheet

// Module 13038 (SHOP_THIS_LOOK_ACTION_SHEET_KEY)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;

let c3 = "Shop This Look";
const result = set.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(13039, dependencyMap.paths), c3, arg0, "stack");
};
