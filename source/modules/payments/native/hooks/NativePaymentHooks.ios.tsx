// Module ID: 7191
// Function ID: 57875
// Name: useNativeIAPPayments
// Dependencies: []
// Exports: useCancelSubscription, useCreateSubscription, useGoogleSkuIds, useResubscribeSubscription

// Module 7191 (useNativeIAPPayments)
function useNativeIAPPayments() {
  let obj = arg1(dependencyMap[9]);
  const items = [closure_6, closure_9];
  const tmp = callback2(obj.useStateFromStoresArray(items, () => {
    const items = [closure_6.isGenericIapConnected(), closure_6.genericProductsLoaded(), closure_6.getStoreFront(), products.getProducts()];
    return items;
  }), 4);
  let first = tmp[0];
  const arg1 = first;
  const importDefault = tmp3;
  const dependencyMap = tmp4;
  let closure_3 = tmp[3];
  if (first) {
    first = tmp3;
  }
  if (first) {
    first = null != tmp4;
  }
  const callback2 = first;
  const items1 = [tmp[1]];
  const effect = React.useEffect(() => {
    if (!tmp3) {
      const products = tmp3(tmp4[10]).loadProducts();
      const obj = tmp3(tmp4[10]);
    }
  }, items1);
  importDefault(dependencyMap[11])(() => {
    let tmp = first;
    if (!first) {
      tmp = closure_15;
    }
    if (!tmp) {
      closure_15 = true;
      let mapped;
      let obj = first(tmp4[12]);
      obj = {};
      obj = { alertPriority: "0" };
      obj.tags = obj;
      const obj1 = {};
      if (null != closure_3) {
        mapped = closure_3.map((identifier) => identifier.identifier);
      }
      if (null == mapped) {
        mapped = [];
      }
      obj1.loadedProducts = mapped;
      obj1.connected = first;
      obj1.genericProductsLoaded = tmp4;
      obj1.storeFront = closure_3;
      obj.extra = obj1;
      const result = obj.captureBillingMessage("useNativeIAPPayments failed to load required context", obj);
    }
  }, 5000);
  obj = { nativePaymentsConnected: first, storeFront: tmp[2] };
  return obj;
}
function computeCanUpdateSubscription(currency, currency2) {
  return null != currency && null != currency2 && currency.currency === currency2.currency;
}
function useCreateSubscription(planId) {
  planId = planId.planId;
  const arg1 = planId;
  const skuId = planId.skuId;
  const importDefault = skuId;
  const applicationId = planId.applicationId;
  const dependencyMap = applicationId;
  const analyticsLocation = planId.analyticsLocation;
  let callback = analyticsLocation;
  const tmp = useNativeIAPPayments();
  const nativePaymentsConnected = tmp.nativePaymentsConnected;
  let closure_4 = nativePaymentsConnected;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_7];
  const items1 = [planId];
  const stateFromStores = obj.useStateFromStores(items, () => callback.get(planId), items1);
  const tmp3 = importDefault(dependencyMap[13])(stateFromStores, tmp.storeFront);
  const React = tmp3;
  const tmp4 = importDefault(dependencyMap[14])(() => planId(applicationId[15]).getNewAnalyticsLoadId());
  let closure_6 = tmp4;
  const items2 = [tmp4, analyticsLocation, applicationId, planId, skuId];
  callback = React.useCallback(() => {
    let obj = planId(applicationId[16]);
    obj = { load_id: tmp4, payment_type: closure_10[closure_11.SUBSCRIPTION], subscription_plan_gateway_plan_id: planId(applicationId[17]).ProductIds.GENERIC_SUBSCRIPTION, subscription_type: constants.GUILD, is_gift: false, location: analyticsLocation, application_id: applicationId, subscription_plan_id: planId, sku_id: skuId };
    const result = obj.trackPaymentFlowStartedAnalyticsAndCTP(obj);
  }, items2);
  closure_7 = callback;
  obj = {
    createSubscription: React.useCallback(callback(async () => {
      callback2(closure_2[18])(closure_4, "cannot connect to IAP API");
      callback2(closure_2[18])(null != closure_5, "plan not found");
      yield callback2(closure_2[10]).restoreAndApplyPurchases();
      callback3();
      const obj = callback2(closure_2[10]);
      yield callback(closure_2[10]).createGenericSubscription(closure_5);
      const obj2 = callback(closure_2[10]);
      yield callback(closure_2[19]).fetchSubscriptions();
    }), items3),
    nativePaymentsConnected
  };
  const items3 = [tmp3, nativePaymentsConnected, callback];
  return obj;
}
function useCancelSubscription(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const tmp = useNativeIAPPayments();
  const nativePaymentsConnected = tmp.nativePaymentsConnected;
  const dependencyMap = nativePaymentsConnected;
  const storeFront = tmp.storeFront;
  const callback = storeFront;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_8];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => subscriptionById.getSubscriptionById(arg0), items1);
  let closure_4 = stateFromStores;
  const items2 = [storeFront, stateFromStores];
  const memo = React.useMemo(() => callback(stateFromStores, storeFront), items2);
  const React = memo;
  const tmp4 = importDefault(dependencyMap[20])(arg0);
  let closure_6 = tmp4;
  obj = {
    cancelSubscription: React.useCallback(callback(async () => {
      callback2(closure_2[18])(closure_5, "Cannot update subscription");
      callback2(closure_2[18])(closure_2, "Cannot connect to IAP API");
      callback2(closure_2[18])(null != closure_6, "Subscription not found");
      const obj = callback(closure_2[10]);
      const tmp4 = yield callback(closure_2[10]).cancelGenericSubscription(closure_6.requestIdentifier, closure_6.subscriptionId, closure_1);
      yield callback(closure_2[19]).fetchSubscriptions();
      return tmp4;
    }), items3),
    nativePaymentsConnected
  };
  const items3 = [memo, tmp4, nativePaymentsConnected, arg1];
  return obj;
}
function useResubscribeSubscription(arg0) {
  const arg1 = arg0;
  const tmp = useNativeIAPPayments();
  const nativePaymentsConnected = tmp.nativePaymentsConnected;
  const importDefault = nativePaymentsConnected;
  const storeFront = tmp.storeFront;
  const dependencyMap = storeFront;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_8];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => subscriptionById.getSubscriptionById(arg0), items1);
  const callback = stateFromStores;
  const items2 = [storeFront, stateFromStores];
  const memo = React.useMemo(() => callback(stateFromStores, storeFront), items2);
  let closure_4 = memo;
  const tmp4 = importDefault(dependencyMap[21])(arg0);
  const React = tmp4;
  obj = {
    resubscribeSubscription: React.useCallback(callback(async () => {
      callback2(closure_2[18])(closure_4, "Cannot update subscription");
      callback2(closure_2[18])(callback2, "Cannot connect to IAP API");
      callback2(closure_2[18])(null != closure_5, "Subscription not found");
      callback2(closure_2[18])(null != closure_3, "Subscription not found");
      const obj = callback(closure_2[10]);
      const tmp5 = yield callback(closure_2[10]).resubscribeGenericSubscription(closure_5, closure_3.isACOM);
      yield callback(closure_2[19]).fetchSubscriptions();
      return tmp5;
    }), items3),
    nativePaymentsConnected
  };
  const items3 = [memo, nativePaymentsConnected, tmp4, stateFromStores];
  return obj;
}
function useGoogleSkuIds() {
  return closure_14;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ PurchaseTypeToAnalyticsPaymentType: closure_10, PurchaseTypes: closure_11, SubscriptionTypes: closure_12 } = arg1(dependencyMap[7]));
let importDefaultResult = importDefault(dependencyMap[8]);
importDefaultResult = new importDefaultResult("NativePaymentHooks.ios.tsx");
let closure_14 = { "Bool(false)": null, "Bool(false)": null };
let closure_15 = false;
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/payments/native/hooks/NativePaymentHooks.ios.tsx");

export default { useNativeIAPPayments, useGoogleSkuIds, useCreateSubscription, useCancelSubscription, useResubscribeSubscription };
export { useNativeIAPPayments };
export { useCreateSubscription };
export { useCancelSubscription };
export { useResubscribeSubscription };
export { useGoogleSkuIds };
