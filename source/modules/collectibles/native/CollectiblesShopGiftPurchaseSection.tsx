// Module ID: 11816
// Function ID: 91660
// Name: CollectiblesShopGiftPurchaseSection
// Dependencies: [5, 57, 31, 27, 8268, 6663, 653, 1851, 482, 33, 4130, 689, 5160, 8776, 566, 8265, 5464, 9749, 11817, 686, 4337, 4471, 11818, 1934, 477, 675, 9693, 5459, 1212, 4543, 7194, 8740, 3789, 8745, 8774, 8769, 7195, 2]
// Exports: default

// Module 11816 (CollectiblesShopGiftPurchaseSection)
import context from "context";
import _slicedToArray from "_slicedToArray";
import apexExperiment from "apexExperiment";
import { View } from "findLinks";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { useNativeCheckoutStore } from "context";
import ME from "ME";
import GuildFeatures from "GuildFeatures";
import { PaymentGateways } from "sum";
import jsxProd from "useCollectiblesExternalGatewayFacet";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_14;
let closure_15;
let closure_9;
let require = arg1;
function CollectiblesShopGiftPurchaseSection(disabled) {
  let _slicedToArray;
  let nextTier;
  const product = disabled.product;
  const require = product;
  const giftOptions = disabled.giftOptions;
  const baseAnalyticsFields = disabled.baseAnalyticsFields;
  const giftingOrigin = disabled.giftingOrigin;
  let useNativeCheckoutStore;
  const tmp2 = callback3(giftOptions(baseAnalyticsFields[12])().insets.bottom);
  const GiftingBadgeExperiment = require(baseAnalyticsFields[13]).GiftingBadgeExperiment;
  let obj = require(baseAnalyticsFields[14]);
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
  ({ nextTier, badgeProgress: _slicedToArray } = stateFromStoresObject);
  let tmp4 = callback(first.useState(constants2.NOT_STARTED), 2);
  first = tmp4[0];
  let closure_6 = tmp4[1];
  const tmp6 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  awaitSync = giftOptions(baseAnalyticsFields[17])(tmp6, giftOptions).awaitSync;
  obj = { product, analyticsLocations: giftOptions(baseAnalyticsFields[16])().analyticsLocations };
  let id;
  if (null != tmp6) {
    id = tmp6.id;
  }
  obj.orderId = id;
  obj.analyticsData = baseAnalyticsFields;
  obj.onPurchaseComplete = function onPurchaseComplete() {
    let tmp = null == giftOptions.recipient_id;
    if (!tmp) {
      let tmp4 = giftingOrigin !== outer1_11.USER_PROFILE_WISHLIST;
      if (tmp4) {
        tmp4 = giftingOrigin !== outer1_11.DM_CHANNEL_WISHLIST;
      }
      tmp = tmp4;
    }
    if (!tmp) {
      let obj = giftOptions(baseAnalyticsFields[19]);
      obj = { type: "WISHLIST_GIFT_SENT", skuId: product.skuId, recipientId: giftOptions.recipient_id };
      obj.dispatch(obj);
    }
    callback(outer1_17.SUCCEEDED);
    let arr = giftOptions(baseAnalyticsFields[20]);
    arr = arr.pop();
    obj = {
      importer() {
        return product(baseAnalyticsFields[23])(baseAnalyticsFields[22], baseAnalyticsFields.paths).then((arg0) => {
          let closure_0 = arg0.default;
          return (arg0) => {
            const obj = {};
            let STANDARD_BOX = outer3_1.gift_style;
            if (null == STANDARD_BOX) {
              STANDARD_BOX = outer4_12.STANDARD_BOX;
            }
            obj.giftStyle = STANDARD_BOX;
            obj.giftBadgeProgress = outer3_4;
            const merged = Object.assign(arg0);
            return outer4_14(closure_0, obj);
          };
        });
      }
    };
    giftOptions(baseAnalyticsFields[21]).openLazy(obj);
    const obj3 = giftOptions(baseAnalyticsFields[21]);
    if (obj5.isIOS()) {
      giftOptions(baseAnalyticsFields[25]).track(outer1_9.PAYMENT_FLOW_SUCCEEDED, baseAnalyticsFields);
      const obj6 = giftOptions(baseAnalyticsFields[25]);
    }
  };
  obj.onPurchaseError = function onPurchaseError() {
    callback(outer1_17.FAILED);
    giftOptions(baseAnalyticsFields[25]).track(outer1_9.PAYMENT_FLOW_FAILED, baseAnalyticsFields);
  };
  obj.onPurchasePending = function onPurchasePending() {

  };
  obj.giftParams = { isGift: true, options: giftOptions };
  useNativeCheckoutStore = giftOptions(baseAnalyticsFields[18])(obj);
  const effect = first.useEffect(() => () => {
    if (outer1_5 !== outer2_17.SUCCEEDED) {
      giftOptions(baseAnalyticsFields[25]).track(outer2_9.PAYMENT_FLOW_CANCELED, outer1_2);
      const obj = giftOptions(baseAnalyticsFields[25]);
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
      tmp13Result = callback2(giftOptions(baseAnalyticsFields[26]), obj1);
      const tmp13 = callback2;
      const tmp16 = giftOptions(baseAnalyticsFields[26]);
    }
  }
  const items1 = [tmp13Result, , ];
  const obj2 = { variant: "text-xs/normal", style: tmp2.disclaimer };
  const intl = require(baseAnalyticsFields[28]).intl;
  let obj3 = {};
  const intl2 = require(baseAnalyticsFields[28]).intl;
  obj3.buyButtonLabel = intl2.string(require(baseAnalyticsFields[28]).t.ouo4FK);
  obj3.paidServiceTermURL = constants.PAID_TERMS;
  obj3.virtualGoodsURL = constants.PAID_TERMS_VIRTUAL_GOODS;
  obj2.children = intl.format(require(baseAnalyticsFields[28]).t.rsEdd2, obj3);
  items1[1] = callback2(require(baseAnalyticsFields[27]).TextWithIOSLinkWorkaround, obj2);
  const obj4 = { disabled: disabled.isPurchaseDisabled, loading: first === constants2.PURCHASING, variant: "active" };
  const intl3 = require(baseAnalyticsFields[28]).intl;
  obj4.text = intl3.string(require(baseAnalyticsFields[28]).t.ouo4FK);
  // CreateGeneratorClosureLongIndex (0x67)
  obj4.onPress = giftingOrigin(tmp);
  items1[2] = callback2(require(baseAnalyticsFields[29]).Button, obj4);
  obj.children = items1;
  return closure_15(closure_6, obj);
}
({ AnalyticEvents: closure_9, MarketingURLs: closure_10 } = ME);
({ GiftingOrigin: closure_11, PremiumGiftStyles: closure_12 } = GuildFeatures);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { paddingBottom: importDefault(689).space.PX_12 + arg0, paddingTop: importDefault(689).space.PX_12, paddingHorizontal: importDefault(689).space.PX_16, gap: importDefault(689).space.PX_8, backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(importDefault(689).shadows.SHADOW_TOP_HIGH);
  obj.container = obj;
  obj.disclaimer = { includeFontPadding: true };
  return obj;
});
let closure_17 = { NOT_STARTED: "not_started", PURCHASING: "purchasing", SUCCEEDED: "succeeded", FAILED: "failed" };
let result = require("result").fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftPurchaseSection.tsx");

export default function WrappedCollectiblesShopGiftPurchaseSection(arg0) {
  let baseAnalyticsFields;
  let giftOptions;
  let giftingOrigin;
  let isPurchaseDisabled;
  let onGiftModalDismiss;
  let product;
  ({ product, onGiftModalDismiss } = arg0);
  ({ isPurchaseDisabled, giftOptions, baseAnalyticsFields, giftingOrigin } = arg0);
  const GiftACOMOrderExperiment = onGiftModalDismiss(7194).GiftACOMOrderExperiment;
  let obj = onGiftModalDismiss(8740);
  const androidShopOrdersEnabled = obj.useAndroidShopOrdersEnabled({ location: "WrappedCollectiblesShopGiftPurchaseSection" });
  const tmp3 = onGiftModalDismiss(477).isIOS() ? PaymentGateways.APPLE_ADVANCED_COMMERCE : PaymentGateways.GOOGLE;
  let tmp4 = tmp3 === PaymentGateways.APPLE_ADVANCED_COMMERCE && GiftACOMOrderExperiment.useConfig({ location: "WrappedCollectiblesShopGiftPurchaseSection" }).enabled;
  if (!tmp4) {
    let result = tmp3 === PaymentGateways.GOOGLE;
    if (result) {
      result = onGiftModalDismiss(3789).isGooglePlayBillingSupported();
      const obj3 = onGiftModalDismiss(3789);
    }
    if (result) {
      result = androidShopOrdersEnabled;
    }
    tmp4 = result;
  }
  const items = [onGiftModalDismiss];
  const obj2 = onGiftModalDismiss(477);
  const callback = React.useCallback(() => {
    onGiftModalDismiss(outer1_2[34]).closeShopGiftModal();
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
  obj.initialExternalGatewayFacet = importDefault(8745)(product);
  obj.onOrderRetryCancellation = callback;
  const tmp9 = importDefault(8745)(product);
  obj.children = callback2(CollectiblesShopGiftPurchaseSection, { product, isPurchaseDisabled, giftOptions, baseAnalyticsFields, giftingOrigin });
  obj.children = callback2(importDefault(7195), obj, product.skuId);
  return callback2(onGiftModalDismiss(8769).NativePaymentContextProvider, obj);
};
