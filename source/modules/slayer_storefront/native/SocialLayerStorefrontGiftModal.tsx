// Module ID: 9739
// Function ID: 75758
// Name: SocialLayerStorefrontGiftModal
// Dependencies: []
// Exports: default

// Module 9739 (SocialLayerStorefrontGiftModal)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ AnalyticEvents: closure_4, PaymentGateways: closure_5 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftModal.tsx");

export default function SocialLayerStorefrontGiftModal(skuId) {
  let analyticsLocations;
  let giftingOrigin;
  let onGiftModalDismiss;
  skuId = skuId.skuId;
  const arg1 = skuId;
  ({ analyticsLocations, onGiftModalDismiss, giftingOrigin } = skuId);
  const importDefault = giftingOrigin;
  let obj = arg1(dependencyMap[4]);
  const items = [closure_3];
  const items1 = [skuId];
  let applicationId = obj.useStateFromStores(items, () => analyticsLocations2.get(skuId), items1);
  const dependencyMap = applicationId;
  const items2 = [];
  const tmp = importDefault(dependencyMap[5]);
  items2[HermesBuiltin.arraySpread(analyticsLocations, 0)] = importDefault(dependencyMap[6]).SLAYER_STOREFRONT_NATIVE_GIFT_MODAL;
  const analyticsLocations2 = tmp(items2).analyticsLocations;
  closure_3 = analyticsLocations2;
  let obj1 = arg1(dependencyMap[7]);
  const tmp4 = obj1.isIOS() ? constants.APPLE_ADVANCED_COMMERCE : constants.GOOGLE;
  const GiftACOMOrderExperiment = arg1(dependencyMap[8]).GiftACOMOrderExperiment;
  let enabled = GiftACOMOrderExperiment.useConfig({ location: "SocialLayerStorefrontGiftModal" }).enabled;
  importDefault(dependencyMap[9])(() => {
    let obj = giftingOrigin(applicationId[10]);
    obj = { location_stack: analyticsLocations2, type: skuId(applicationId[11]).SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY, sku_id: skuId };
    let applicationId;
    if (null != applicationId) {
      applicationId = applicationId.applicationId;
    }
    obj.application_id = applicationId;
    obj.track(constants.OPEN_MODAL, obj);
  });
  let tmp6 = null;
  if (null == applicationId) {
    return null;
  } else {
    let obj2 = arg1(dependencyMap[12]);
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
      obj.onOrderRetryCancellation = arg1(dependencyMap[11]).closeSocialLayerStorefrontGiftModal;
      enabled = jsx;
      tmp6 = importDefault(dependencyMap[17]);
      obj1 = { skuId };
      applicationId = applicationId.applicationId;
      obj1.applicationId = applicationId;
      obj1.analyticsLocations = analyticsLocations2;
      obj1.lockedRecipientUser = skuId.lockedRecipientUser;
      obj1.onGiftModalDismiss = onGiftModalDismiss;
      obj1.giftingOrigin = giftingOrigin;
      obj1.validateRecipient = function validateRecipient(id) {
        return Promise.resolve(true);
      };
      giftingOrigin = function renderProductDetails() {
        return callback(giftingOrigin(applicationId[18]), { sku: applicationId });
      };
      obj1.renderProductDetails = giftingOrigin;
      obj1.renderPurchaseSection = function renderPurchaseSection(arg0) {
        let giftOptions;
        let isPurchaseDisabled;
        ({ isPurchaseDisabled, giftOptions } = arg0);
        return callback(giftingOrigin(applicationId[19]), { skuId, sku: applicationId, isPurchaseDisabled, giftOptions, giftingOrigin, analyticsLocations: analyticsLocations2 });
      };
      obj.children = <tmp6 {...obj1} />;
      obj.children = tmp9(importDefault(dependencyMap[16]), obj, skuId);
      let tmp9Result = tmp9(arg1(dependencyMap[15]).NativePaymentContextProvider, obj);
      const tmp18 = importDefault(dependencyMap[16]);
    } else {
      obj2 = { onDismiss: onGiftModalDismiss };
      const intl = arg1(dependencyMap[14]).intl;
      obj2.title = intl.string(arg1(dependencyMap[14]).t.JCFN/y);
      tmp9Result = tmp9(importDefault(dependencyMap[13]), obj2);
      const tmp12 = importDefault(dependencyMap[13]);
    }
  }
};
