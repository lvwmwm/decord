// Module ID: 9744
// Function ID: 75736
// Name: SocialLayerStorefrontGiftModal
// Dependencies: [31, 4210, 653, 33, 566, 5497, 5517, 477, 6481, 4594, 675, 9732, 3824, 8748, 1212, 8740, 6644, 8749, 9745, 9746, 2]
// Exports: default

// Module 9744 (SocialLayerStorefrontGiftModal)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { jsx } from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
({ AnalyticEvents: closure_4, PaymentGateways: closure_5 } = ME);
const result = require("ME").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftModal.tsx");

export default function SocialLayerStorefrontGiftModal(skuId) {
  let analyticsLocations;
  let giftingOrigin;
  let onGiftModalDismiss;
  skuId = skuId.skuId;
  ({ analyticsLocations, onGiftModalDismiss, giftingOrigin } = skuId);
  let obj = skuId(applicationId[4]);
  const items = [analyticsLocations2];
  const items1 = [skuId];
  applicationId = obj.useStateFromStores(items, () => analyticsLocations2.get(skuId), items1);
  const items2 = [];
  const tmp = giftingOrigin(applicationId[5]);
  items2[HermesBuiltin.arraySpread(analyticsLocations, 0)] = giftingOrigin(applicationId[6]).SLAYER_STOREFRONT_NATIVE_GIFT_MODAL;
  analyticsLocations2 = tmp(items2).analyticsLocations;
  let obj1 = skuId(applicationId[7]);
  const tmp4 = obj1.isIOS() ? constants.APPLE_ADVANCED_COMMERCE : constants.GOOGLE;
  const GiftACOMOrderExperiment = skuId(applicationId[8]).GiftACOMOrderExperiment;
  let enabled = GiftACOMOrderExperiment.useConfig({ location: "SocialLayerStorefrontGiftModal" }).enabled;
  giftingOrigin(applicationId[9])(() => {
    let obj = giftingOrigin(applicationId[10]);
    obj = { location_stack: analyticsLocations2, type: skuId(applicationId[11]).SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY, sku_id: skuId };
    applicationId = undefined;
    if (null != applicationId) {
      applicationId = applicationId.applicationId;
    }
    obj.application_id = applicationId;
    obj.track(outer1_4.OPEN_MODAL, obj);
  });
  let tmp6 = null;
  if (null == applicationId) {
    return null;
  } else {
    let obj2 = skuId(applicationId[12]);
    if (obj2.isSocialLayerStorefrontGiftingSupported()) {
      obj = { skuIDs: [], activeSubscription: tmp6 };
      obj = { paymentGateway: tmp4 };
      if (enabled) {
        enabled = tmp4 === constants.APPLE_ADVANCED_COMMERCE;
      }
      obj.orderRequired = enabled;
      const items3 = [skuId];
      obj.skuIds = items3;
      obj.isGift = true;
      obj.activeSubscription = tmp6;
      obj.onOrderRetryCancellation = skuId(applicationId[11]).closeSocialLayerStorefrontGiftModal;
      enabled = jsx;
      tmp6 = giftingOrigin(applicationId[17]);
      obj1 = { skuId };
      applicationId = applicationId.applicationId;
      obj1.applicationId = applicationId;
      obj1.analyticsLocations = analyticsLocations2;
      obj1.lockedRecipientUser = skuId.lockedRecipientUser;
      obj1.onGiftModalDismiss = onGiftModalDismiss;
      obj1.giftingOrigin = giftingOrigin;
      obj1.validateRecipient = function validateRecipient(navigation, arg1) {
        return Promise.resolve(true);
      };
      giftingOrigin = function renderProductDetails(arg0) {
        return outer1_6(giftingOrigin(applicationId[18]), { sku: applicationId });
      };
      obj1.renderProductDetails = giftingOrigin;
      obj1.renderPurchaseSection = function renderPurchaseSection(arg0) {
        let giftOptions;
        let isPurchaseDisabled;
        ({ isPurchaseDisabled, giftOptions } = arg0);
        return outer1_6(giftingOrigin(applicationId[19]), { skuId, sku: applicationId, isPurchaseDisabled, giftOptions, giftingOrigin, analyticsLocations: analyticsLocations2 });
      };
      obj.children = <tmp6 skuId={skuId} />;
      obj.children = tmp9(giftingOrigin(applicationId[16]), obj, skuId);
      let tmp9Result = tmp9(skuId(applicationId[15]).NativePaymentContextProvider, obj);
      const tmp18 = giftingOrigin(applicationId[16]);
    } else {
      obj2 = { onDismiss: onGiftModalDismiss };
      const intl = skuId(applicationId[14]).intl;
      obj2.title = intl.string(skuId(applicationId[14]).t["JCFN/y"]);
      tmp9Result = tmp9(giftingOrigin(applicationId[13]), obj2);
      const tmp12 = giftingOrigin(applicationId[13]);
    }
  }
};
