// Module ID: 12570
// Function ID: 12571
// Name: SHOP_THIS_LOOK_ACTION_SHEET_KEY
// Dependencies: [4310, 12571, 2007, 2]
// Exports: openShopThisLookActionSheet

// Module 12570 (SHOP_THIS_LOOK_ACTION_SHEET_KEY)
let c3 = "Shop This Look";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(12571, dependencyMap.paths), c3, arg0, "stack");
};
