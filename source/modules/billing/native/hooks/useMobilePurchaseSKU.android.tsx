// Module ID: 9740
// Function ID: 75770
// Name: items
// Dependencies: [5, 31, 6663, 1849, 653, 5622, 3, 7119, 8740, 7196, 5450, 675, 686, 6668, 3791, 1832, 7367, 491, 2]
// Exports: default

// Module 9740 (items)
import GPlayConnectionState from "GPlayConnectionState";
import result from "result";
import { useNativeCheckoutStoreOrNull as closure_5 } from "context";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CurrencyCodes } from "ME";
import { GPlayBillingResult } from "GPlayConnectionState";
import importDefaultResult from "_isNativeReflectConstruct";

const require = arg1;
importDefaultResult = new importDefaultResult("useMobilePurchaseSKU.android");
let items = [, , , ];
({ USER_CANCELED: arr[0], SERVICE_TIMEOUT: arr[1], ERROR: arr[2], ITEM_UNAVAILABLE: arr[3] } = GPlayBillingResult);
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
  let storeFront;
  let c15;
  let c16;
  let closure_17;
  let c18;
  let c19;
  let callback;
  let callback1;
  let callback2;
  const currentUser = onPurchaseError.getCurrentUser();
  handlePremiumPurchase = skuId(analyticsLocations[7]).useHandlePremiumPurchase();
  let obj2 = skuId(analyticsLocations[7]);
  androidShopOrdersEnabled = skuId(analyticsLocations[8]).useAndroidShopOrdersEnabled({ location: "useMobilePurchaseSKU" });
  const obj3 = skuId(analyticsLocations[8]);
  storeFront = skuId(analyticsLocations[9]).useNativeIAPPayments().storeFront;
  const tmp4 = onPurchaseComplete((recreateOrder) => recreateOrder.recreateOrder);
  c15 = tmp4;
  const tmp5 = onPurchaseComplete((setCheckoutSucceeded) => setCheckoutSucceeded.setCheckoutSucceeded);
  c16 = tmp5;
  closure_17 = analyticsData.useRef(false);
  const tmp6 = undefined !== currentUser && currentUser.isStaff();
  c18 = tmp6;
  const tmp7 = platformSkuId(analyticsLocations[10])(() => skuId(analyticsLocations[11]).getNewAnalyticsLoadId());
  let isGift;
  if (null != giftParams) {
    isGift = giftParams.isGift;
  }
  c19 = tmp9;
  if (null == analyticsLoadId) {
    analyticsLoadId = tmp7;
    analyticsLoadId = tmp7;
  }
  const items = [onPurchaseComplete, tmp5];
  callback = analyticsData.useCallback(() => {
    platformSkuId(analyticsLocations[12]).unsubscribe("GPLAY_PURCHASE_VERIFIED", callback);
    closure_17.current = false;
    if (null != _undefined) {
      _undefined();
    }
    onPurchaseComplete();
  }, items);
  const items1 = [onPurchaseError, callback];
  callback1 = analyticsData.useCallback(() => {
    platformSkuId(analyticsLocations[12]).unsubscribe("GPLAY_PURCHASE_VERIFIED", callback);
    closure_17.current = false;
    onPurchaseError();
  }, items1);
  const items2 = [callback, onPurchaseError, onPurchasePending, orderId, androidShopOrdersEnabled, tmp4, storeFront, platformSkuId, skuId];
  callback2 = analyticsData.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = analyticsLoadId(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items2);
  const items3 = [callback2, callback, callback1];
  const effect = analyticsData.useEffect(() => {
    const subscription = platformSkuId(analyticsLocations[12]).subscribe("GPLAY_UPDATE_PURCHASE_STATE", callback2);
    let obj = platformSkuId(analyticsLocations[12]);
    const subscription1 = platformSkuId(analyticsLocations[12]).subscribe("GPLAY_PURCHASE_VERIFIED", callback);
    let obj2 = platformSkuId(analyticsLocations[12]);
    const subscription2 = platformSkuId(analyticsLocations[12]).subscribe("GPLAY_PURCHASE_VERIFICATION_FAILED", callback1);
    return () => {
      platformSkuId(analyticsLocations[12]).unsubscribe("GPLAY_UPDATE_PURCHASE_STATE", outer1_22);
      const obj = platformSkuId(analyticsLocations[12]);
      platformSkuId(analyticsLocations[12]).unsubscribe("GPLAY_PURCHASE_VERIFIED", outer1_20);
      const obj2 = platformSkuId(analyticsLocations[12]);
      platformSkuId(analyticsLocations[12]).unsubscribe("GPLAY_PURCHASE_VERIFICATION_FAILED", outer1_21);
    };
  }, items3);
  // CreateGeneratorClosureLongIndex (0x67)
  const items4 = [skuId, platformSkuId, tmp6, null != isGift && isGift, handlePremiumPurchase, onPurchaseComplete, onPurchaseError, freePurchaseCallback, analyticsLoadId, analyticsLocations, analyticsData, giftParams, flag, orderId, androidShopOrdersEnabled];
  return analyticsData.useCallback(analyticsLoadId(tmp), items4);
};
