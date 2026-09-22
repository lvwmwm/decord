// Module ID: 13246
// Function ID: 13247
// Name: useShopThisLookMarketing
// Dependencies: [32, 8332, 7491, 1943, 2]
// Exports: useShopThisLookMarketing

// Module 13246 (useShopThisLookMarketing)
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7491 */;
import useMaybeFetchEquippedCollectibleProducts from "useMaybeFetchEquippedCollectibleProducts" /* 8332 */;
import _slicedToArray from "module_32" /* 32 */;

const dismissible_content = tmp(1943);
require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/useShopThisLookMarketing.tsx");

export const useShopThisLookMarketing = function useShopThisLookMarketing(id, guildId, isShopThisLookMobileEnabled) {
  useSelectedDismissibleContent;
  if (isShopThisLookMobileEnabled) {
    if (tmp3) {
      const items = [dismissible_content.DismissibleContent.SHOP_THIS_LOOK_WEB_MARKETING];
    }
    const tmp8 = _slicedToArray(tmp5([], undefined, true), 2);
    const obj2 = { isVisible: null != tmp8[0], markAsDismissed: tmp8[1] };
    return obj2;
  }
};
