// Module ID: 10284
// Function ID: 10285
// Name: SocialLayerStorefrontGiftModal
// Dependencies: [19, 5822, 1074, 21, 504, 6583, 6603, 1364, 8666, 5298, 1241, 10262, 4501, 10285, 1115, 10282, 10269, 10286, 10468, 10469, 2]
// Exports: default

// Module 10284 (SocialLayerStorefrontGiftModal)
import Fragment from "Fragment" /* 21 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators" /* 10262 */;
import SocialLayerStorefrontGiftProductDetailsDefault from "SocialLayerStorefrontGiftProductDetails" /* 10468 */;
import SocialLayerStorefrontGiftPurchaseSectionDefault from "SocialLayerStorefrontGiftPurchaseSection" /* 10469 */;
import react from "react" /* 19 */;
import SKUStore from "SKUStore" /* 5822 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ AnalyticEvents: closure_4, PaymentGateways: hasOwnProperty } = Constants);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftModal.tsx");

export default function SocialLayerStorefrontGiftModal(skuId) {
  let GOOGLE;
  let analyticsLocations;
  let giftingOrigin;
  let intl;
  let items3;
  let obj5;
  let onGiftModalDismiss;
  let tmp9;
  skuId = skuId.skuId;
  ({ analyticsLocations, onGiftModalDismiss, giftingOrigin } = skuId);
  let stateFromStores;
  let analyticsLocations2;
  const lockedRecipientUser = skuId.lockedRecipientUser;
  let obj = skuId(stateFromStores[4]);
  const items = [analyticsLocations2];
  const items1 = [skuId];
  stateFromStores = obj.useStateFromStores(items, () => SKUStore.get(skuId), items1);
  const items2 = [];
  const tmp6 = giftingOrigin(stateFromStores[5]);
  const arraySpreadResult = HermesBuiltin.arraySpread(items2, analyticsLocations, 0);
  items2[arraySpreadResult] = giftingOrigin(stateFromStores[6]).SLAYER_STOREFRONT_NATIVE_GIFT_MODAL;
  analyticsLocations2 = tmp6(items2).analyticsLocations;
  const obj2 = skuId(stateFromStores[7]);
  if (obj2.isIOS()) {
    GOOGLE = tmp8.APPLE_ADVANCED_COMMERCE;
    tmp9 = tmp8;
  } else {
    GOOGLE = tmp8.GOOGLE;
    tmp9 = tmp8;
  }
  const GiftACOMOrderExperiment = tmp2(tmp3[8]).GiftACOMOrderExperiment;
  let enabled = GiftACOMOrderExperiment.useConfig({ location: "SocialLayerStorefrontGiftModal" }).enabled;
  giftingOrigin(stateFromStores[9])(() => {
    let applicationId;
    const tmp = AnalyticsUtilsDefault;
    const track = tmp.track;
    const OPEN_MODAL = constants.OPEN_MODAL;
    const obj = { location_stack: analyticsLocations2, type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY, sku_id: skuId, application_id: applicationId };
    applicationId = undefined;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    track(OPEN_MODAL, obj);
  });
  let tmp11 = null;
  if (null != stateFromStores) {
    let tmp12Result;
    const tmp2Result = skuId(stateFromStores[12]);
    if (tmp2Result.isSocialLayerStorefrontGiftingSupported()) {
      const obj3 = { skuIDs: [], activeSubscription: null, children: null };
      const NativePaymentContextProvider = tmp2(tmp3[15]).NativePaymentContextProvider;
      ({ paymentGateway: GOOGLE, orderRequired: enabled, skuIds: items3, isGift: true, activeSubscription: null, onOrderRetryCancellation: skuId(stateFromStores[11]).closeSocialLayerStorefrontGiftModal, checkoutAnalyticsFields: obj5, analyticsInitialStep: "gift_customization", children: null });
      giftingOrigin(stateFromStores[16]);
      if (enabled) {
        enabled = GOOGLE === tmp9.APPLE_ADVANCED_COMMERCE;
      }
      items3 = [skuId];
      obj5 = { is_gift: true, location_stack: analyticsLocations2, payment_type: "sku", sku_id: skuId, sku_type: null, sku_product_line: null, application_id: null };
      ({ type: obj7.sku_type, productLine: obj7.sku_product_line, applicationId: obj7.application_id } = stateFromStores);
      tmp12Result = tmp12(NativePaymentContextProvider, obj3);
    } else {
      const obj8 = { onDismiss: onGiftModalDismiss, title: intl.string(skuId(stateFromStores[14]).t["JCFN/y"]) };
      const tmp5Result2 = giftingOrigin(stateFromStores[13]);
      intl = tmp2(tmp3[14]).intl;
      tmp12Result = tmp12(tmp5Result2, obj8);
    }
    tmp11 = tmp12Result;
  }
  return tmp11;
};
