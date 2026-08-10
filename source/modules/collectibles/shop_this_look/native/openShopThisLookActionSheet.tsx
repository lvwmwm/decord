// Module ID: 12503
// Function ID: 12504
// Name: SHOP_THIS_LOOK_ACTION_SHEET_KEY
// Dependencies: [4271, 12504, 1988, 2]
// Exports: openShopThisLookActionSheet

// Module 12503 (SHOP_THIS_LOOK_ACTION_SHEET_KEY)
let c3 = "Shop This Look";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  importDefault(4271).openLazy(require(1988) /* asyncRequireImpl */(12504, dependencyMap.paths), c3, arg0, "stack");
};
