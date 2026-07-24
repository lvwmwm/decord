// Module ID: 9774
// Function ID: 75982
// Name: useMobilePurchaseSKU
// Dependencies: [5, 31, 6663, 1849, 653, 5620, 3, 7118, 8779, 5450, 675, 686, 6668, 3791, 1832, 7367, 491, 2]
// Exports: default

// Module 9774 (useMobilePurchaseSKU)
import GPlayConnectionState from "GPlayConnectionState";
import result from "result";
import { useNativeCheckoutStoreOrNull as closure_5 } from "context";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CurrencyCodes } from "ME";
import importDefaultResult from "_isNativeReflectConstruct";

const require = arg1;
require("GPlayConnectionState").GPlayBillingResult;
importDefaultResult = new importDefaultResult("useMobilePurchaseSKU.android");
const result = require("context").fileFinishedImporting("modules/billing/native/hooks/useMobilePurchaseSKU.android.tsx");

export default function useMobilePurchaseSKU(skuId) {
  skuId = skuId.skuId;
  const platformSkuId = skuId.platformSkuId;
  const analyticsLocations = skuId.analyticsLocations;
  let analyticsLoadId = skuId.analyticsLoadId;
  const analyticsData = skuId.analyticsData;
  const onPurchaseComplete = skuId.onPurchaseComplete;
  const onPurchaseError = skuId.onPurchaseError;
  const freePurchaseCallback = skuId.freePurchaseCallback;
  const onPurchasePending = skuId.onPurchasePending;
  const giftParams = skuId.giftParams;
  let flag = skuId.isFreeForStaffSelfPurchase;
  if (flag === undefined) {
    flag = true;
  }
  const orderId = skuId.orderId;
  let handlePremiumPurchase;
  let androidShopOrdersEnabled;
  let c14;
  let c15;
  let closure_16;
  let c17;
  let c18;
  let callback;
  let callback1;
  let callback2;
  const currentUser = onPurchaseError.getCurrentUser();
  handlePremiumPurchase = skuId(analyticsLocations[7]).useHandlePremiumPurchase();
  let obj2 = skuId(analyticsLocations[7]);
  androidShopOrdersEnabled = skuId(analyticsLocations[8]).useAndroidShopOrdersEnabled({ location: "useMobilePurchaseSKU" });
  const tmp4 = onPurchaseComplete((setOrder) => setOrder.setOrder);
  c14 = tmp4;
  const tmp5 = onPurchaseComplete((setCheckoutSucceeded) => setCheckoutSucceeded.setCheckoutSucceeded);
  c15 = tmp5;
  closure_16 = analyticsData.useRef(false);
  const tmp6 = undefined !== currentUser && currentUser.isStaff();
  c17 = tmp6;
  const tmp7 = platformSkuId(analyticsLocations[9])(() => skuId(analyticsLocations[10]).getNewAnalyticsLoadId());
  let isGift;
  if (null != giftParams) {
    isGift = giftParams.isGift;
  }
  c18 = tmp9;
  if (null == analyticsLoadId) {
    analyticsLoadId = tmp7;
    analyticsLoadId = tmp7;
  }
  const items = [onPurchaseComplete, tmp5];
  callback = analyticsData.useCallback(() => {
    platformSkuId(analyticsLocations[11]).unsubscribe("GPLAY_PURCHASE_VERIFIED", callback);
    closure_16.current = false;
    if (null != _undefined) {
      _undefined();
    }
    onPurchaseComplete();
  }, items);
  const items1 = [onPurchaseError, callback];
  callback1 = analyticsData.useCallback(() => {
    platformSkuId(analyticsLocations[11]).unsubscribe("GPLAY_PURCHASE_VERIFIED", callback);
    closure_16.current = false;
    onPurchaseError();
  }, items1);
  const items2 = [callback, onPurchaseError, onPurchasePending, orderId, androidShopOrdersEnabled, tmp4, platformSkuId, skuId];
  callback2 = analyticsData.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = analyticsLoadId(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items2);
  const items3 = [callback2, callback, callback1];
  const effect = analyticsData.useEffect(() => {
    const subscription = platformSkuId(analyticsLocations[11]).subscribe("GPLAY_UPDATE_PURCHASE_STATE", callback2);
    let obj = platformSkuId(analyticsLocations[11]);
    const subscription1 = platformSkuId(analyticsLocations[11]).subscribe("GPLAY_PURCHASE_VERIFIED", callback);
    let obj2 = platformSkuId(analyticsLocations[11]);
    const subscription2 = platformSkuId(analyticsLocations[11]).subscribe("GPLAY_PURCHASE_VERIFICATION_FAILED", callback1);
    return () => {
      platformSkuId(analyticsLocations[11]).unsubscribe("GPLAY_UPDATE_PURCHASE_STATE", outer1_21);
      const obj = platformSkuId(analyticsLocations[11]);
      platformSkuId(analyticsLocations[11]).unsubscribe("GPLAY_PURCHASE_VERIFIED", outer1_19);
      const obj2 = platformSkuId(analyticsLocations[11]);
      platformSkuId(analyticsLocations[11]).unsubscribe("GPLAY_PURCHASE_VERIFICATION_FAILED", outer1_20);
    };
  }, items3);
  // CreateGeneratorClosureLongIndex (0x67)
  const items4 = [skuId, platformSkuId, tmp6, null != isGift && isGift, handlePremiumPurchase, onPurchaseComplete, onPurchaseError, freePurchaseCallback, analyticsLoadId, analyticsLocations, analyticsData, giftParams, flag, orderId, androidShopOrdersEnabled];
  return analyticsData.useCallback(analyticsLoadId(tmp), items4);
};
