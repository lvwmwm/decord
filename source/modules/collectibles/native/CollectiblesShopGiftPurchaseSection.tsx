// Module ID: 11805
// Function ID: 91597
// Name: CollectiblesShopGiftPurchaseSection
// Dependencies: []
// Exports: default

// Module 11805 (CollectiblesShopGiftPurchaseSection)
function CollectiblesShopGiftPurchaseSection(disabled) {
  let nextTier;
  const product = disabled.product;
  const arg1 = product;
  const giftOptions = disabled.giftOptions;
  const importDefault = giftOptions;
  const baseAnalyticsFields = disabled.baseAnalyticsFields;
  const dependencyMap = baseAnalyticsFields;
  const callback = disabled.giftingOrigin;
  let useNativeCheckoutStore;
  const tmp2 = callback4(importDefault(dependencyMap[12])().insets.bottom);
  const GiftingBadgeExperiment = arg1(dependencyMap[13]).GiftingBadgeExperiment;
  let obj = arg1(dependencyMap[14]);
  const items = [awaitSync];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { nextTier: awaitSync.getNextTier(product(baseAnalyticsFields[15]).BadgeId.GIFTING), giftsToNextTier: awaitSync.getRemainingToNextTier(product(baseAnalyticsFields[15]).BadgeId.GIFTING) };
    let current;
    const singleRequirementProgress = awaitSync.getSingleRequirementProgress(product(baseAnalyticsFields[15]).BadgeId.GIFTING);
    if (null != singleRequirementProgress) {
      current = singleRequirementProgress.current;
    }
    obj.badgeProgress = current;
    return obj;
  });
  ({ nextTier, badgeProgress: closure_4 } = stateFromStoresObject);
  const tmp4 = callback2(React.useState(constants2.NOT_STARTED), 2);
  const first = tmp4[0];
  const React = first;
  let closure_6 = tmp4[1];
  const tmp6 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  const awaitSync = importDefault(dependencyMap[17])(tmp6, giftOptions).awaitSync;
  obj = { product, analyticsLocations: importDefault(dependencyMap[16])().analyticsLocations };
  let id;
  if (null != tmp6) {
    id = tmp6.id;
  }
  obj.orderId = id;
  obj.analyticsData = baseAnalyticsFields;
  obj.onPurchaseComplete = function onPurchaseComplete() {
    let tmp = null == giftOptions.recipient_id;
    if (!tmp) {
      let tmp4 = giftingOrigin !== constants2.USER_PROFILE_WISHLIST;
      if (tmp4) {
        tmp4 = giftingOrigin !== constants2.DM_CHANNEL_WISHLIST;
      }
      tmp = tmp4;
    }
    if (!tmp) {
      let obj = giftOptions(baseAnalyticsFields[19]);
      obj = { type: "WISHLIST_GIFT_SENT", skuId: product.skuId, recipientId: giftOptions.recipient_id };
      obj.dispatch(obj);
    }
    callback(constants3.SUCCEEDED);
    let arr = giftOptions(baseAnalyticsFields[20]);
    arr = arr.pop();
    obj = {
      importer() {
        return callback(paths[23])(paths[22], paths.paths).then((arg0) => {
          let closure_0 = arg0.default;
          return (arg0) => {
            const obj = {};
            let STANDARD_BOX = gift_style.gift_style;
            if (null == STANDARD_BOX) {
              STANDARD_BOX = constants.STANDARD_BOX;
            }
            obj.giftStyle = STANDARD_BOX;
            obj.giftBadgeProgress = closure_4;
            const merged = Object.assign(arg0);
            return closure_14(closure_0, obj);
          };
        });
      }
    };
    giftOptions(baseAnalyticsFields[21]).openLazy(obj);
    const obj3 = giftOptions(baseAnalyticsFields[21]);
    if (obj5.isIOS()) {
      giftOptions(baseAnalyticsFields[25]).track(constants.PAYMENT_FLOW_SUCCEEDED, baseAnalyticsFields);
      const obj6 = giftOptions(baseAnalyticsFields[25]);
    }
  };
  obj.onPurchaseError = function onPurchaseError() {
    callback(constants3.FAILED);
    giftOptions(baseAnalyticsFields[25]).track(constants.PAYMENT_FLOW_FAILED, baseAnalyticsFields);
  };
  obj.onPurchasePending = function onPurchasePending() {

  };
  obj.giftParams = { isGift: true, options: giftOptions };
  useNativeCheckoutStore = importDefault(dependencyMap[18])(obj);
  const effect = React.useEffect(() => () => {
    if (closure_5 !== constants2.SUCCEEDED) {
      callback(closure_2[25]).track(constants.PAYMENT_FLOW_CANCELED, closure_2);
      const obj = callback(closure_2[25]);
    }
  }, []);
  obj = { style: tmp2.container };
  let tmp13Result = null;
  if (GiftingBadgeExperiment.useConfig({ location: "CollectiblesShopGiftPurchaseSection" }).enabled) {
    tmp13Result = null;
    if (null != nextTier) {
      const obj1 = { giftsToNextTier: stateFromStoresObject.giftsToNextTier };
      const name = nextTier.name;
      let str = "";
      if (null != name) {
        str = name;
      }
      obj1.nextTierName = str;
      obj1.nextTierIcon = nextTier.simple_icon_url;
      tmp13Result = callback3(importDefault(dependencyMap[26]), obj1);
      const tmp13 = callback3;
      const tmp16 = importDefault(dependencyMap[26]);
    }
  }
  const items1 = [tmp13Result, , ];
  const obj2 = { variant: "text-xs/normal", style: tmp2.disclaimer };
  const intl = arg1(dependencyMap[28]).intl;
  const obj3 = {};
  const intl2 = arg1(dependencyMap[28]).intl;
  obj3.buyButtonLabel = intl2.string(arg1(dependencyMap[28]).t.ouo4FK);
  obj3.paidServiceTermURL = constants.PAID_TERMS;
  obj3.virtualGoodsURL = constants.PAID_TERMS_VIRTUAL_GOODS;
  obj2.children = intl.format(arg1(dependencyMap[28]).t.rsEdd2, obj3);
  items1[1] = callback3(arg1(dependencyMap[27]).TextWithIOSLinkWorkaround, obj2);
  const obj4 = { disabled: disabled.isPurchaseDisabled, loading: first === constants2.PURCHASING, variant: "active" };
  const intl3 = arg1(dependencyMap[28]).intl;
  obj4.text = intl3.string(arg1(dependencyMap[28]).t.ouo4FK);
  // CreateGeneratorClosureLongIndex (0x67)
  obj4.onPress = callback(tmp);
  items1[2] = callback3(arg1(dependencyMap[29]).Button, obj4);
  obj.children = items1;
  return closure_15(closure_6, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
const useNativeCheckoutStore = arg1(dependencyMap[5]).useNativeCheckoutStore;
({ AnalyticEvents: closure_9, MarketingURLs: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
({ GiftingOrigin: closure_11, PremiumGiftStyles: closure_12 } = arg1(dependencyMap[7]));
const PaymentGateways = arg1(dependencyMap[8]).PaymentGateways;
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[9]));
const tmp4 = arg1(dependencyMap[9]);
let closure_16 = arg1(dependencyMap[10]).createStyles((arg0) => {
  let obj = {};
  obj = { paddingBottom: importDefault(dependencyMap[11]).space.PX_12 + arg0, paddingTop: importDefault(dependencyMap[11]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, gap: importDefault(dependencyMap[11]).space.PX_8, backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(importDefault(dependencyMap[11]).shadows.SHADOW_TOP_HIGH);
  obj.container = obj;
  obj.disclaimer = { includeFontPadding: true };
  return obj;
});
let closure_17 = { NOT_STARTED: "not_started", PURCHASING: "purchasing", SUCCEEDED: "succeeded", FAILED: "failed" };
const obj = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[37]).fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftPurchaseSection.tsx");

export default function WrappedCollectiblesShopGiftPurchaseSection(arg0) {
  let baseAnalyticsFields;
  let giftOptions;
  let giftingOrigin;
  let isPurchaseDisabled;
  let onGiftModalDismiss;
  let product;
  ({ product, onGiftModalDismiss } = arg0);
  const arg1 = onGiftModalDismiss;
  ({ isPurchaseDisabled, giftOptions, baseAnalyticsFields, giftingOrigin } = arg0);
  const GiftACOMOrderExperiment = arg1(dependencyMap[30]).GiftACOMOrderExperiment;
  let obj = arg1(dependencyMap[31]);
  const androidShopOrdersEnabled = obj.useAndroidShopOrdersEnabled({ location: "WrappedCollectiblesShopGiftPurchaseSection" });
  const tmp3 = arg1(dependencyMap[24]).isIOS() ? PaymentGateways.APPLE_ADVANCED_COMMERCE : PaymentGateways.GOOGLE;
  let tmp4 = tmp3 === PaymentGateways.APPLE_ADVANCED_COMMERCE && GiftACOMOrderExperiment.useConfig({ location: "WrappedCollectiblesShopGiftPurchaseSection" }).enabled;
  if (!tmp4) {
    let result = tmp3 === PaymentGateways.GOOGLE;
    if (result) {
      result = arg1(dependencyMap[32]).isGooglePlayBillingSupported();
      const obj3 = arg1(dependencyMap[32]);
    }
    if (result) {
      result = androidShopOrdersEnabled;
    }
    tmp4 = result;
  }
  const items = [onGiftModalDismiss];
  const obj2 = arg1(dependencyMap[24]);
  const callback = React.useCallback(() => {
    onGiftModalDismiss(closure_2[34]).closeShopGiftModal();
    if (null != onGiftModalDismiss) {
      onGiftModalDismiss();
    }
  }, items);
  obj = { skuIDs: [], activeSubscription: null };
  obj = { paymentGateway: tmp3, orderRequired: tmp4 };
  const items1 = [product.skuId];
  obj.skuIds = items1;
  obj.isGift = true;
  obj.activeSubscription = null;
  obj.initialExternalGatewayFacet = importDefault(dependencyMap[33])(product);
  obj.onOrderRetryCancellation = callback;
  const tmp9 = importDefault(dependencyMap[33])(product);
  obj.children = callback3(CollectiblesShopGiftPurchaseSection, { product, isPurchaseDisabled, giftOptions, baseAnalyticsFields, giftingOrigin });
  obj.children = callback3(importDefault(dependencyMap[36]), obj, product.skuId);
  return callback3(arg1(dependencyMap[35]).NativePaymentContextProvider, obj);
};
