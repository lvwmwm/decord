// Module ID: 15056
// Function ID: 15057
// Name: useShopThisLookMarketing
// Dependencies: [32, 8859, 7641, 4973, 2]
// Exports: useShopThisLookMarketing

// Module 15056 (useShopThisLookMarketing)
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7641 */;
import useMaybeFetchEquippedCollectibleProducts from "useMaybeFetchEquippedCollectibleProducts" /* 8859 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let tmp;
const dismissible_content = tmp(4973);
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/useShopThisLookMarketing.tsx");

export function useShopThisLookMarketing(id, guildId, isShopThisLookMobileEnabled) {
  const obj = useMaybeFetchEquippedCollectibleProducts;
  const tmp3 = obj.useEquippedCollectibleSkuIds(id, guildId).length > 0;
  useSelectedDismissibleContent;
  const tmp6 = isShopThisLookMobileEnabled;
  if (tmp6) {
    if (tmp3) {
      const items = [dismissible_content.DismissibleContent.SHOP_THIS_LOOK_WEB_MARKETING];
    }
    const tmp9 = _slicedToArray(tmp5([], { bypassAutoDismiss: true }), 2);
    return { isVisible: null != tmp9[0], markAsDismissed: tmp9[1] };
  }
}
