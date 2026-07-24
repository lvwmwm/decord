// Module ID: 7196
// Function ID: 57949
// Name: useNativeIAPPayments
// Dependencies: [5, 57, 31, 5621, 3781, 3782, 5619, 653, 3, 566, 6658, 7197, 3791, 7198, 5450, 675, 7157, 5622, 44, 4451, 7200, 7201, 2]
// Exports: useCancelSubscription, useCreateSubscription, useGoogleSkuIds, useResubscribeSubscription

// Module 7196 (useNativeIAPPayments)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import result from "result";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import importDefaultResult from "_isNativeReflectConstruct";

let closure_10;
let closure_11;
let closure_12;
const require = arg1;
function useNativeIAPPayments() {
  let obj = first(566);
  let items = [closure_6, closure_9];
  let tmp = first(obj.useStateFromStoresArray(items, () => {
    const items = [outer1_6.isGenericIapConnected(), outer1_6.genericProductsLoaded(), outer1_6.getStoreFront(), outer1_9.getProducts()];
    return items;
  }), 4);
  first = tmp[0];
  const importDefault = tmp3;
  const dependencyMap = tmp4;
  let _isNativeReflectConstruct = tmp[3];
  if (first) {
    first = tmp3;
  }
  if (first) {
    first = null != tmp4;
  }
  const items1 = [tmp[1]];
  const effect = React.useEffect(() => {
    if (!tmp3) {
      const products = tmp3(tmp4[10]).loadProducts();
      const obj = tmp3(tmp4[10]);
    }
  }, items1);
  importDefault(7197)(() => {
    let tmp = first;
    if (!first) {
      tmp = outer1_15;
    }
    if (!tmp) {
      outer1_15 = true;
      let mapped;
      let obj = first(tmp4[12]);
      obj = {};
      obj = { alertPriority: "0" };
      obj.tags = obj;
      const obj1 = {};
      if (null != _isNativeReflectConstruct) {
        mapped = _isNativeReflectConstruct.map((identifier) => identifier.identifier);
      }
      if (null == mapped) {
        mapped = [];
      }
      obj1.loadedProducts = mapped;
      obj1.connected = first;
      obj1.genericProductsLoaded = closure_1;
      obj1.storeFront = _isNativeReflectConstruct;
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
  const skuId = planId.skuId;
  const applicationId = planId.applicationId;
  const analyticsLocation = planId.analyticsLocation;
  const tmp = useNativeIAPPayments();
  const nativePaymentsConnected = tmp.nativePaymentsConnected;
  let obj = planId(applicationId[9]);
  const items = [callback];
  const items1 = [planId];
  const stateFromStores = obj.useStateFromStores(items, () => callback.get(planId), items1);
  const tmp3 = skuId(applicationId[13])(stateFromStores, tmp.storeFront);
  const React = tmp3;
  const tmp4 = skuId(applicationId[14])(() => planId(applicationId[15]).getNewAnalyticsLoadId());
  let closure_6 = tmp4;
  const items2 = [tmp4, analyticsLocation, applicationId, planId, skuId];
  callback = React.useCallback(() => {
    let obj = planId(applicationId[16]);
    obj = { load_id: closure_6, payment_type: outer1_10[outer1_11.SUBSCRIPTION], subscription_plan_gateway_plan_id: planId(applicationId[17]).ProductIds.GENERIC_SUBSCRIPTION, subscription_type: outer1_12.GUILD, is_gift: false, location: analyticsLocation, application_id: applicationId, subscription_plan_id: planId, sku_id: skuId };
    const result = obj.trackPaymentFlowStartedAnalyticsAndCTP(obj);
  }, items2);
  obj = {
    createSubscription: React.useCallback(analyticsLocation(async () => {
      skuId(applicationId[18])(outer1_4, "cannot connect to IAP API");
      skuId(applicationId[18])(null != outer1_5, "plan not found");
      yield skuId(applicationId[10]).restoreAndApplyPurchases();
      outer1_7();
      const obj = skuId(applicationId[10]);
      yield planId(applicationId[10]).createGenericSubscription(outer1_5);
      const obj2 = planId(applicationId[10]);
      yield planId(applicationId[19]).fetchSubscriptions();
    }), items3),
    nativePaymentsConnected
  };
  items3 = [tmp3, nativePaymentsConnected, callback];
  return obj;
}
function useCancelSubscription(arg0, arg1) {
  const _require = arg0;
  const importDefault = arg1;
  const tmp = useNativeIAPPayments();
  const nativePaymentsConnected = tmp.nativePaymentsConnected;
  const storeFront = tmp.storeFront;
  let obj = _require(nativePaymentsConnected[9]);
  const items = [closure_8];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getSubscriptionById(closure_0), items1);
  const items2 = [storeFront, stateFromStores];
  memo = memo.useMemo(() => outer1_17(stateFromStores, storeFront), items2);
  let tmp4 = importDefault(nativePaymentsConnected[20])(arg0);
  let closure_6 = tmp4;
  obj = {
    cancelSubscription: memo.useCallback(storeFront(async () => {
      callback2(nativePaymentsConnected[18])(outer1_5, "Cannot update subscription");
      callback2(nativePaymentsConnected[18])(outer1_2, "Cannot connect to IAP API");
      callback2(nativePaymentsConnected[18])(null != outer1_6, "Subscription not found");
      const obj = callback(nativePaymentsConnected[10]);
      const tmp4 = yield callback(nativePaymentsConnected[10]).cancelGenericSubscription(outer1_6.requestIdentifier, outer1_6.subscriptionId, outer1_1);
      yield callback(nativePaymentsConnected[19]).fetchSubscriptions();
      return tmp4;
    }), items3),
    nativePaymentsConnected
  };
  items3 = [memo, tmp4, nativePaymentsConnected, arg1];
  return obj;
}
function useResubscribeSubscription(arg0) {
  const _require = arg0;
  const tmp = useNativeIAPPayments();
  const nativePaymentsConnected = tmp.nativePaymentsConnected;
  const storeFront = tmp.storeFront;
  let obj = _require(storeFront[9]);
  const items = [closure_8];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getSubscriptionById(closure_0), items1);
  const items2 = [storeFront, stateFromStores];
  const memo = React.useMemo(() => outer1_17(stateFromStores, storeFront), items2);
  const tmp4 = nativePaymentsConnected(storeFront[21])(arg0);
  React = tmp4;
  obj = {
    resubscribeSubscription: React.useCallback(stateFromStores(async () => {
      nativePaymentsConnected(storeFront[18])(outer1_4, "Cannot update subscription");
      nativePaymentsConnected(storeFront[18])(outer1_1, "Cannot connect to IAP API");
      nativePaymentsConnected(storeFront[18])(null != outer1_5, "Subscription not found");
      nativePaymentsConnected(storeFront[18])(null != outer1_3, "Subscription not found");
      const obj = callback(storeFront[10]);
      const tmp5 = yield callback(storeFront[10]).resubscribeGenericSubscription(outer1_5, outer1_3.isACOM);
      yield callback(storeFront[19]).fetchSubscriptions();
      return tmp5;
    }), items3),
    nativePaymentsConnected
  };
  items3 = [memo, nativePaymentsConnected, tmp4, stateFromStores];
  return obj;
}
function useGoogleSkuIds() {
  return closure_14;
}
({ PurchaseTypeToAnalyticsPaymentType: closure_10, PurchaseTypes: closure_11, SubscriptionTypes: closure_12 } = ME);
importDefaultResult = new importDefaultResult("NativePaymentHooks.ios.tsx");
let closure_14 = { isFetchingGoogleSkus: false, fetchError: null };
let c15 = false;
let result = require("result").fileFinishedImporting("modules/payments/native/hooks/NativePaymentHooks.ios.tsx");

export default { useNativeIAPPayments, useGoogleSkuIds, useCreateSubscription, useCancelSubscription, useResubscribeSubscription };
export { useNativeIAPPayments };
export { useCreateSubscription };
export { useCancelSubscription };
export { useResubscribeSubscription };
export { useGoogleSkuIds };
