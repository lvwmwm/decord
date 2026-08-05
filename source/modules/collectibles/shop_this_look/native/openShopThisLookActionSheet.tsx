// Module ID: 12382
// Function ID: 12383
// Name: SHOP_THIS_LOOK_ACTION_SHEET_KEY
// Dependencies: [4223, 12383, 1959, 2]
// Exports: openShopThisLookActionSheet

// Module 12382 (SHOP_THIS_LOOK_ACTION_SHEET_KEY)
let c3 = "Shop This Look";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  importDefault(4223).openLazy(require(1959) /* asyncRequireImpl */(12383, dependencyMap.paths), c3, arg0, "stack");
};
