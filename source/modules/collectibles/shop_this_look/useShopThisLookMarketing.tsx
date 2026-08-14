// Module ID: 12587
// Function ID: 12588
// Name: useShopThisLookMarketing
// Dependencies: [32, 8875, 6086, 1377, 2]
// Exports: useShopThisLookMarketing

// Module 12587 (useShopThisLookMarketing)
import _slicedToArray from "_slicedToArray";

const require = arg1;
const result = require("useSelectedDismissibleContent").fileFinishedImporting("modules/collectibles/shop_this_look/useShopThisLookMarketing.tsx");

export const useShopThisLookMarketing = function useShopThisLookMarketing(id, guildId, isShopThisLookMobileEnabled) {
  let obj = require(8875) /* useEquippedCollectibleSkuIds */;
  require(6086) /* useSelectedDismissibleContent */;
  if (isShopThisLookMobileEnabled) {
    if (tmp3) {
      const items = [require(1377) /* DismissibleContent */.DismissibleContent.SHOP_THIS_LOOK_WEB_MARKETING];
    }
    const tmp8 = callback(tmp5([], undefined, true), 2);
    obj = { isVisible: null, markAsDismissed: null };
    obj[0] = null != tmp8[0];
    obj[1] = tmp8[1];
    return obj;
  }
};
