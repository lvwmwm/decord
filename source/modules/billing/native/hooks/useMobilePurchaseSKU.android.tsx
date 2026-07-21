// Module ID: 9732
// Function ID: 75716
// Name: items
// Dependencies: []
// Exports: default

// Module 9732 (items)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).useNativeCheckoutStoreOrNull;
let closure_6 = importDefault(dependencyMap[3]);
const CurrencyCodes = arg1(dependencyMap[4]).CurrencyCodes;
const GPlayBillingResult = arg1(dependencyMap[5]).GPlayBillingResult;
let importDefaultResult = importDefault(dependencyMap[6]);
importDefaultResult = new importDefaultResult("useMobilePurchaseSKU.android");
const items = [, , , ];
({ USER_CANCELED: arr[0], SERVICE_TIMEOUT: arr[1], ERROR: arr[2], ITEM_UNAVAILABLE: arr[3] } = GPlayBillingResult);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/billing/native/hooks/useMobilePurchaseSKU.android.tsx");

export default function useMobilePurchaseSKU(skuId) {
  skuId = skuId.skuId;
  const arg1 = skuId;
  const platformSkuId = skuId.platformSkuId;
  const importDefault = platformSkuId;
  const analyticsLocations = skuId.analyticsLocations;
  const dependencyMap = analyticsLocations;
  let analyticsLoadId = skuId.analyticsLoadId;
  let callback = analyticsLoadId;
  const analyticsData = skuId.analyticsData;
  const React = analyticsData;
  const onPurchaseComplete = skuId.onPurchaseComplete;
  let callback2 = onPurchaseComplete;
  const onPurchaseError = skuId.onPurchaseError;
  let currentUser = onPurchaseError;
  const CurrencyCodes = freePurchaseCallback;
  const onPurchasePending = skuId.onPurchasePending;
  const giftParams = skuId.giftParams;
  let flag = skuId.isFreeForStaffSelfPurchase;
  if (flag === undefined) {
    flag = true;
  }
  let items = flag;
  const orderId = skuId.orderId;
  let handlePremiumPurchase;
  let androidShopOrdersEnabled;
  let storeFront;
  let tmp4;
  let tmp5;
  let closure_17;
  let tmp6;
  let tmp9;
  callback = undefined;
  let callback1;
  callback2 = undefined;
  currentUser = currentUser.getCurrentUser();
  handlePremiumPurchase = arg1(dependencyMap[7]).useHandlePremiumPurchase();
  const obj2 = arg1(dependencyMap[7]);
  androidShopOrdersEnabled = arg1(dependencyMap[8]).useAndroidShopOrdersEnabled({ location: "useMobilePurchaseSKU" });
  const obj3 = arg1(dependencyMap[8]);
  storeFront = arg1(dependencyMap[9]).useNativeIAPPayments().storeFront;
  tmp4 = callback2((recreateOrder) => recreateOrder.recreateOrder);
  tmp5 = callback2((setCheckoutSucceeded) => setCheckoutSucceeded.setCheckoutSucceeded);
  closure_17 = React.useRef(false);
  tmp6 = undefined !== currentUser && currentUser.isStaff();
  const tmp7 = importDefault(dependencyMap[10])(() => skuId(analyticsLocations[11]).getNewAnalyticsLoadId());
  let isGift;
  if (null != giftParams) {
    isGift = giftParams.isGift;
  }
  tmp9 = null != isGift && isGift;
  if (null == analyticsLoadId) {
    callback = tmp7;
    analyticsLoadId = tmp7;
  }
  items = [onPurchaseComplete, tmp5];
  callback = React.useCallback(() => {
    platformSkuId(analyticsLocations[12]).unsubscribe("GPLAY_PURCHASE_VERIFIED", callback);
    closure_17.current = false;
    if (null != tmp5) {
      tmp5();
    }
    onPurchaseComplete();
  }, items);
  const items1 = [onPurchaseError, callback];
  callback1 = React.useCallback(() => {
    platformSkuId(analyticsLocations[12]).unsubscribe("GPLAY_PURCHASE_VERIFIED", callback);
    closure_17.current = false;
    onPurchaseError();
  }, items1);
  const items2 = [callback, onPurchaseError, onPurchasePending, orderId, androidShopOrdersEnabled, tmp4, storeFront, platformSkuId, skuId];
  callback2 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = tmp7(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items2);
  const items3 = [callback2, callback, callback1];
  const effect = React.useEffect(() => {
    const subscription = platformSkuId(analyticsLocations[12]).subscribe("GPLAY_UPDATE_PURCHASE_STATE", callback2);
    const obj = platformSkuId(analyticsLocations[12]);
    const subscription1 = platformSkuId(analyticsLocations[12]).subscribe("GPLAY_PURCHASE_VERIFIED", callback);
    const obj2 = platformSkuId(analyticsLocations[12]);
    const subscription2 = platformSkuId(analyticsLocations[12]).subscribe("GPLAY_PURCHASE_VERIFICATION_FAILED", callback1);
    return () => {
      callback(closure_2[12]).unsubscribe("GPLAY_UPDATE_PURCHASE_STATE", closure_22);
      const obj = callback(closure_2[12]);
      callback(closure_2[12]).unsubscribe("GPLAY_PURCHASE_VERIFIED", closure_20);
      const obj2 = callback(closure_2[12]);
      callback(closure_2[12]).unsubscribe("GPLAY_PURCHASE_VERIFICATION_FAILED", closure_21);
    };
  }, items3);
  // CreateGeneratorClosureLongIndex (0x67)
  const items4 = [skuId, platformSkuId, tmp6, tmp9, handlePremiumPurchase, onPurchaseComplete, onPurchaseError, skuId.freePurchaseCallback, analyticsLoadId, analyticsLocations, analyticsData, giftParams, flag, orderId, androidShopOrdersEnabled];
  return React.useCallback(callback(tmp), items4);
};
