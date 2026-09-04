// Module ID: 13037
// Function ID: 13038
// Name: useShopThisLookMarketing
// Dependencies: [32, 8147, 7326, 1372, 2]
// Exports: useShopThisLookMarketing

// Module 13037 (useShopThisLookMarketing)
import DismissibleContent from "DismissibleContent" /* 1372 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7326 */;
import useEquippedCollectibleSkuIds from "useEquippedCollectibleSkuIds" /* 8147 */;
import closure_2 from "_slicedToArray" /* 32 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/shop_this_look/useShopThisLookMarketing.tsx");

export const useShopThisLookMarketing = function useShopThisLookMarketing(id, guildId, isShopThisLookMobileEnabled) {
  let obj = useEquippedCollectibleSkuIds;
  useSelectedDismissibleContent;
  if (isShopThisLookMobileEnabled) {
    if (tmp3) {
      const items = [DismissibleContent.DismissibleContent.SHOP_THIS_LOOK_WEB_MARKETING];
    }
    const tmp8 = callback(tmp5([], undefined, true), 2);
    obj = { isVisible: null, markAsDismissed: null };
    obj[0] = null != tmp8[0];
    obj[1] = tmp8[1];
    return obj;
  }
};
