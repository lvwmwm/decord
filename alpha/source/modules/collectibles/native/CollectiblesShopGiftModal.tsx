// Module ID: 11277
// Function ID: 11278
// Name: CollectiblesShopGiftModal
// Dependencies: [19, 7784, 1074, 1085, 21, 9479, 1364, 4427, 11278, 11276, 11084, 11066, 11088, 11279, 11282, 11000, 8466, 8453, 504, 7407, 7427, 2009, 7783, 11087, 1115, 2]
// Exports: default

// Module 11277 (CollectiblesShopGiftModal)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7783 */;
import BadgeId from "BadgeId" /* 8453 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8466 */;
import openGiftModal from "openGiftModal" /* 11276 */;
import CollectiblesShopCheckoutDetailsDefault from "CollectiblesShopCheckoutDetails" /* 11279 */;
import CollectiblesShopGiftPurchaseSectionDefault from "CollectiblesShopGiftPurchaseSection" /* 11282 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7784 */;

require = fn;
function CollectiblesShopGiftModalContent(product) {
  product = product.product;
  require = product;
  ({ analyticsLocations, onGiftModalDismiss } = product);
  const giftingOrigin = product.giftingOrigin;
  ({ lockedRecipientUser, validateRecipient } = product);
  const GiftACOMOrderExperiment = require("ACOMExperiments").GiftACOMOrderExperiment;
  if (obj.isIOS()) {
    let GOOGLE = tmp3.APPLE_ADVANCED_COMMERCE;
    let tmp4 = tmp3;
  } else {
    GOOGLE = tmp3.GOOGLE;
    tmp4 = tmp3;
  }
  let tmp5 = GOOGLE === tmp4.APPLE_ADVANCED_COMMERCE && GiftACOMOrderExperiment.useConfig({ location: "CollectiblesShopGiftModal" }).enabled;
  if (!tmp5) {
    let result = GOOGLE === tmp4.GOOGLE;
    if (result) {
      result = tmp(tmp2[7]).isGooglePlayBillingSupported();
      const tmpResult = tmp(tmp2[7]);
    }
    tmp5 = result;
  }
  const items = [onGiftModalDismiss];
  obj = require("PlatformUtils");
  const callback = noop.useCallback(() => {
    openGiftModal.closeShopGiftModal();
    if (onGiftModalDismiss != null) {
      onGiftModalDismiss();
    }
  }, items);
  const obj2 = { skuIDs: [], activeSubscription: null, children: null };
  const obj3 = { paymentGateway: GOOGLE, orderRequired: tmp5, skuIds: null, isGift: true, activeSubscription: null, initialExternalGatewayFacet: onGiftModalDismiss(giftingOrigin[8])(product), onOrderRetryCancellation: callback, checkoutAnalyticsFields: { is_gift: true, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id }, analyticsInitialStep: "gift_customization", children: null };
  const items1 = [product.skuId];
  obj3.skuIds = items1;
  const obj4 = { is_gift: true, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id };
  const tmp7 = onGiftModalDismiss(giftingOrigin[8])(product);
  obj3.children = jsx(onGiftModalDismiss(giftingOrigin[12]), {
    skuId: product.skuId,
    analyticsLocations,
    lockedRecipientUser,
    onGiftModalDismiss,
    giftingOrigin,
    validateRecipient,
    renderProductDetails(arg0) {
      ({ recipientUser, isValidRecipient } = arg0);
      return jsx(CollectiblesShopCheckoutDetailsDefault, { product, recipientUser, isValidRecipient, isGift: true });
    },
    renderPurchaseSection(arg0) {
      ({ isPurchaseDisabled, giftOptions } = arg0);
      return jsx(CollectiblesShopGiftPurchaseSectionDefault, { product, isPurchaseDisabled, giftOptions, giftingOrigin });
    }
  });
  obj2.children = jsx(onGiftModalDismiss(giftingOrigin[11]), { paymentGateway: GOOGLE, orderRequired: tmp5, skuIds: null, isGift: true, activeSubscription: null, initialExternalGatewayFacet: onGiftModalDismiss(giftingOrigin[8])(product), onOrderRetryCancellation: callback, checkoutAnalyticsFields: { is_gift: true, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id }, analyticsInitialStep: "gift_customization", children: null }, product.skuId);
  return jsx(require("NativePaymentContext").NativePaymentContextProvider, { skuIDs: [], activeSubscription: null, children: null });
}
const application_id = fn(1074).COLLECTIBLES_APPLICATION_ID;
const PaymentGateways = fn(1085).PaymentGateways;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftModal.tsx");

export default function CollectiblesShopGiftModal(skuId) {
  skuId = skuId.skuId;
  ({ analyticsLocations, onGiftModalDismiss } = skuId);
  let skuId1;
  ({ lockedRecipientUser, giftingOrigin } = skuId);
  const GiftingBadgeExperiment = skuId(skuId1[15]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "CollectiblesShopGiftModal" }).enabled;
  const items = [enabled];
  const effect = noop.useEffect(() => {
    if (enabled) {
      const badge = BadgeDirectoryActionCreators.fetchBadge(BadgeId.BadgeId.GIFTING);
    }
  }, items);
  const items1 = [CollectiblesCategoryStore];
  const items2 = [skuId];
  const stateFromStores = skuId(skuId1[18]).useStateFromStores(items1, () => CollectiblesCategoryStore.getProduct(skuId), items2);
  const items3 = [];
  let obj = skuId(skuId1[18]);
  const tmp5 = enabled;
  const tmp6 = enabled(skuId1[19]);
  items3[HermesBuiltin.arraySpread(analyticsLocations, 0)] = enabled(skuId1[20]).COLLECTIBLES_MOBILE_GIFT_MODAL;
  skuId1 = undefined;
  if (stateFromStores != null) {
    skuId1 = stateFromStores.skuId;
  }
  [][0] = skuId1;
  if (null == stateFromStores) {
    return null;
  } else {
    if (tmpResult.isCollectibleGiftingSupported()) {
      const obj2 = { product: stateFromStores, analyticsLocations: tmp6(items3).analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin, validateRecipient: tmp9 };
      let tmp10Result = tmp10(CollectiblesShopGiftModalContent, obj2);
    } else {
      const obj3 = { onDismiss: onGiftModalDismiss, title: null };
      const intl = tmp(tmp2[24]).intl;
      obj3.title = intl.string(tmp(tmp2[24]).t["JCFN/y"]);
      tmp10Result = tmp10(tmp5(tmp2[23]), obj3);
      const tmp5Result = tmp5(tmp2[23]);
    }
    tmpResult = tmp(tmp2[7]);
  }
};
