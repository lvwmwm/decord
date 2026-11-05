// Module ID: 14653
// Function ID: 14654
// Name: CollectiblesShopGiftModal
// Dependencies: [19, 7865, 1072, 1083, 21, 10096, 1377, 2188, 14654, 14652, 10873, 10860, 10877, 14655, 14658, 10796, 8914, 8901, 504, 7465, 7490, 2155, 7864, 10876, 1113, 2]
// Exports: default

// Module 14653 (CollectiblesShopGiftModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import Constants2 from "Constants" /* 1083 */;
import StringUtils from "StringUtils" /* 2155 */;
import BadgeId from "BadgeId" /* 8901 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8914 */;
import openGiftModal from "openGiftModal" /* 14652 */;
import CollectiblesShopCheckoutDetailsDefault from "CollectiblesShopCheckoutDetails" /* 14655 */;
import CollectiblesShopGiftPurchaseSectionDefault from "CollectiblesShopGiftPurchaseSection" /* 14658 */;
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7865 */;
import size from "module_2" /* 2 */;

let tmp;
const CollectiblesActionCreators = tmp(7864);
function CollectiblesShopGiftModalContent(product) {
  let GOOGLE;
  let analyticsLocations;
  let lockedRecipientUser;
  let onGiftModalDismiss;
  let tmp4;
  let validateRecipient;
  product = product.product;
  require = product;
  ({ analyticsLocations, onGiftModalDismiss } = product);
  const giftingOrigin = product.giftingOrigin;
  ({ lockedRecipientUser, validateRecipient } = product);
  const GiftACOMOrderExperiment = require("ACOMExperiments").GiftACOMOrderExperiment;
  const enabled = GiftACOMOrderExperiment.useConfig({ location: "CollectiblesShopGiftModal" }).enabled;
  let obj = require("PlatformUtils");
  if (obj.isIOS()) {
    GOOGLE = tmp3.APPLE_ADVANCED_COMMERCE;
    tmp4 = tmp3;
  } else {
    GOOGLE = tmp3.GOOGLE;
    tmp4 = tmp3;
  }
  let tmp5 = GOOGLE === tmp4.APPLE_ADVANCED_COMMERCE && enabled;
  if (!tmp5) {
    let result = GOOGLE === tmp4.GOOGLE;
    if (result) {
      const tmpResult = require("BillingPlatformUtils");
      result = tmpResult.isGooglePlayBillingSupported();
    }
    tmp5 = result;
  }
  const items = [onGiftModalDismiss];
  const tmp7 = onGiftModalDismiss(giftingOrigin[8])(product);
  const callback = react.useCallback(() => {
    const obj = openGiftModal;
    obj.closeShopGiftModal();
    if (onGiftModalDismiss != null) {
      onGiftModalDismiss();
    }
  }, items);
  const NativePaymentContextProvider = tmp(tmp2[10]).NativePaymentContextProvider;
  const items1 = [product.skuId];
  const obj4 = { is_gift: true, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id };
  onGiftModalDismiss(giftingOrigin[11]);
  return <NativePaymentContextProvider skuIDs={[]} activeSubscription={null}>{null}</NativePaymentContextProvider>;
}
const application_id = Constants.COLLECTIBLES_APPLICATION_ID;
const PaymentGateways = Constants2.PaymentGateways;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftModal.tsx");

export default function CollectiblesShopGiftModal(skuId) {
  let analyticsLocations;
  let giftingOrigin;
  let intl;
  let lockedRecipientUser;
  let onGiftModalDismiss;
  skuId = skuId.skuId;
  ({ analyticsLocations, onGiftModalDismiss } = skuId);
  let skuId1;
  let tmp3 = skuId1;
  ({ lockedRecipientUser, giftingOrigin } = skuId);
  const GiftingBadgeExperiment = skuId(skuId1[15]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "CollectiblesShopGiftModal" }).enabled;
  const items = [enabled];
  const effect = react.useEffect(() => {
    const tmp = enabled;
    if (tmp) {
      const obj = BadgeDirectoryActionCreators;
      const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
    }
  }, items);
  let obj = skuId(skuId1[18]);
  const items1 = [CollectiblesCategoryStore];
  const items2 = [skuId];
  const stateFromStores = obj.useStateFromStores(items1, () => CollectiblesCategoryStore.getProduct(skuId), items2);
  const items3 = [];
  const tmp7 = enabled(skuId1[19]);
  const arraySpreadResult = HermesBuiltin.arraySpread(items3, analyticsLocations, 0);
  items3[arraySpreadResult] = enabled(skuId1[20]).COLLECTIBLES_MOBILE_GIFT_MODAL;
  skuId1 = undefined;
  const analyticsLocations2 = tmp7(items3).analyticsLocations;
  const tmp6 = enabled;
  if (stateFromStores != null) {
    skuId1 = stateFromStores.skuId;
  }
  [][0] = skuId1;
  let tmp11 = null;
  if (null != stateFromStores) {
    let tmp12Result;
    const tmp2Result = skuId(tmp3[7]);
    if (tmp2Result.isCollectibleGiftingSupported()) {
      const obj2 = { product: stateFromStores, analyticsLocations: analyticsLocations2, lockedRecipientUser, onGiftModalDismiss, giftingOrigin, validateRecipient: tmp10 };
      tmp12Result = tmp12(CollectiblesShopGiftModalContent, obj2);
    } else {
      const obj3 = { onDismiss: onGiftModalDismiss, title: intl.string(skuId(tmp3[24]).t["JCFN/y"]) };
      const tmp6Result = tmp6(tmp3[23]);
      intl = tmp2(tmp3[24]).intl;
      tmp12Result = tmp12(tmp6Result, obj3);
    }
    tmp11 = tmp12Result;
  }
  return tmp11;
};
