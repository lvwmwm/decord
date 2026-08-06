// Module ID: 12418
// Function ID: 12419
// Name: useShopThisLookMarketing
// Dependencies: [32, 8735, 5943, 1358, 2]
// Exports: useShopThisLookMarketing

// Module 12418 (useShopThisLookMarketing)
import _slicedToArray from "_slicedToArray";

const require = arg1;
const result = require("useSelectedDismissibleContent").fileFinishedImporting("modules/collectibles/shop_this_look/useShopThisLookMarketing.tsx");

export const useShopThisLookMarketing = function useShopThisLookMarketing(id, guildId, isShopThisLookMobileEnabled) {
  let obj = require(8735) /* useEquippedCollectibleSkuIds */;
  require(5943) /* useSelectedDismissibleContent */;
  if (isShopThisLookMobileEnabled) {
    if (tmp3) {
      const items = [require(1358) /* DismissibleContent */.DismissibleContent.SHOP_THIS_LOOK_WEB_MARKETING];
    }
    const tmp8 = callback(tmp5([], undefined, true), 2);
    obj = { isVisible: null, markAsDismissed: null };
    obj[0] = null != tmp8[0];
    obj[1] = tmp8[1];
    return obj;
  }
};
