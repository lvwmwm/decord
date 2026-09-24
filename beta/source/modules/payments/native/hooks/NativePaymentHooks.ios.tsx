// Module ID: 11140
// Function ID: 11141
// Name: hooks/NativePaymentHooks
// Dependencies: [5, 32, 19, 7518, 4455, 4456, 7516, 1078, 3, 558, 568, 504, 7695, 4465, 11090, 11141, 1245, 5845, 11143, 7519, 38, 5113, 11145, 11146, 2]
// Exports: useGoogleSkuIds

// Module 11140 (hooks/NativePaymentHooks)
import LoggerDefault from "Logger" /* 3 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import BillingUtils from "BillingUtils" /* 4465 */;
import ProductIds from "ProductIds" /* 7519 */;
import BillingActionCreatorsDefault from "BillingActionCreators" /* 7695 */;
import PaymentFlowStartedTriggerPoint from "PaymentFlowStartedTriggerPoint" /* 11143 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GenericIAPStore from "GenericIAPStore" /* 7518 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4455 */;
import SubscriptionStore from "SubscriptionStore" /* 4456 */;
import IAPStore from "IAPStore" /* 7516 */;

require = fn;
const Constants = fn(1078);
({ PurchaseTypeToAnalyticsPaymentType: c10, PurchaseTypes: closure_11, SubscriptionTypes: closure_12 } = Constants);
let closure_13 = new LoggerDefault("NativePaymentHooks.ios.tsx");
let closure_14 = { isFetchingGoogleSkus: false, fetchError: null };
let c15 = false;
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = genericProductsLoaded(568).c(19);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GenericIAPStore, IAPStore];
    const fn = function s() {
      const items = [load_id.genericProductsLoaded(), load_id.getStoreFront(), products.getProducts()];
      return items;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = genericProductsLoaded(568);
  [genericProductsLoaded, cResult[13], cResult[11]] = genericProductsLoaded(504).useStateFromStoresArray(tmp4, tmp5);
  importDefault = tmp10;
  dependencyMap = tmp11;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GenericIAPStore];
    const fn2 = function p() {
      return load_id.canMakePurchase();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp13 = fn2;
    let tmp12 = items1;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  const tmpResult = genericProductsLoaded(504);
  const stateFromStores = genericProductsLoaded(504).useStateFromStores(tmp12, tmp13);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        obj = closure_1(closure_2[12]);
        result = obj.canStorekitMakePayments();
        return;
      }
    }
    const items2 = [];
    cResult[4] = I;
    cResult[5] = items2;
    let tmp17 = items2;
    const tmp16 = I;
  } else {
    class I {
      constructor() {
        obj = closure_1(closure_2[12]);
        result = obj.canStorekitMakePayments();
        return;
      }
    }
    tmp17 = cResult[5];
  }
  const effect = noop.useEffect(tmp16, tmp17);
  if (cResult[6] !== genericProductsLoaded) {
    class I {
      constructor() {
        obj = closure_1(closure_2[12]);
        result = obj.canStorekitMakePayments();
        return;
      }
    }
    const items3 = [genericProductsLoaded];
    cResult[6] = genericProductsLoaded;
    cResult[7] = tmp21;
    cResult[8] = items3;
    let tmp20 = items3;
    const tmp19 = tmp21;
  } else {
    class I {
      constructor() {
        obj = closure_1(closure_2[12]);
        result = obj.canStorekitMakePayments();
        return;
      }
    }
    tmp20 = cResult[8];
  }
  const effect1 = noop.useEffect(tmp19, tmp20);
  let tmp23 = stateFromStores;
  if (stateFromStores) {
    class I {
      constructor() {
        obj = closure_1(closure_2[12]);
        result = obj.canStorekitMakePayments();
        return;
      }
    }
  }
  if (tmp23) {
    class I {
      constructor() {
        obj = closure_1(closure_2[12]);
        result = obj.canStorekitMakePayments();
        return;
      }
    }
    tmp23 = null != tmp10;
  }
  _slicedToArray = tmp23;
  if (cResult[9] === stateFromStores) {
    class I {
      constructor() {
        obj = closure_1(closure_2[12]);
        result = obj.canStorekitMakePayments();
        return;
      }
    }
  }
  class A {
    constructor() {
      tmp = closure_4;
      if (!closure_4) {
        tmp = c15;
      }
      if (!tmp) {
        tmp2 = closure_3;
        flag = false;
        tmp = false === closure_3;
      }
      if (!tmp) {
        flag2 = true;
        c15 = true;
        tmp3 = closure_0;
        tmp4 = closure_2;
        obj = closure_0(closure_2[13]);
        obj1 = { tags: null, extra: null };
        obj1.tags = { alertPriority: "0" };
        arr = closure_2;
        tmp5 = null;
        mapped = undefined;
        if (closure_2 != null) {
          mapped = arr.map((identifier) => identifier.identifier);
        }
        if (mapped == null) {
          mapped = [];
        }
        obj4 = { loadedProducts: null, genericProductsLoaded: null, storeFront: null };
        obj4.loadedProducts = mapped;
        tmp6 = closure_0;
        obj4.genericProductsLoaded = closure_0;
        tmp7 = closure_1;
        obj4.storeFront = closure_1;
        obj1.extra = obj4;
        str = "useNativeIAPPayments failed to load required context";
        result = obj.captureBillingMessage("useNativeIAPPayments failed to load required context", obj1);
      }
      return;
    }
  }
  cResult[9] = stateFromStores;
  cResult[10] = genericProductsLoaded;
  cResult[12] = tmp23;
  cResult[14] = A;
}) : (() => {
  let items = [GenericIAPStore, IAPStore];
  const tmp2 = nativePaymentsConnected(genericProductsLoaded(504).useStateFromStoresArray(items, () => {
    const items = [load_id.genericProductsLoaded(), load_id.getStoreFront(), products.getProducts()];
    return items;
  }), 3);
  genericProductsLoaded = tmp2[0];
  const storeFront = tmp2[1];
  dependencyMap = tmp2[2];
  let obj = genericProductsLoaded(504);
  const items1 = [GenericIAPStore];
  const canMakePayments = genericProductsLoaded(504).useStateFromStores(items1, () => load_id.canMakePurchase());
  const effect = noop.useEffect(() => {
    const result = storeFront(closure_2[12]).canStorekitMakePayments();
  }, []);
  const items2 = [genericProductsLoaded];
  const effect1 = noop.useEffect(() => {
    if (!first) {
      products = BillingActionCreatorsDefault.loadProducts();
    }
  }, items2);
  nativePaymentsConnected = canMakePayments;
  if (canMakePayments) {
    nativePaymentsConnected = genericProductsLoaded;
  }
  if (nativePaymentsConnected) {
    nativePaymentsConnected = null != storeFront;
  }
  storeFront(11090)(() => {
    let tmp = nativePaymentsConnected;
    if (!nativePaymentsConnected) {
      tmp = c15;
    }
    if (!tmp) {
      tmp = false === canMakePayments;
    }
    if (!tmp) {
      c15 = true;
      const obj2 = { tags: { alertPriority: "0" }, extra: null };
      let mapped;
      if (closure_2 != null) {
        mapped = arr.map((identifier) => identifier.identifier);
      }
      if (mapped == null) {
        mapped = [];
      }
      const obj3 = { loadedProducts: mapped, genericProductsLoaded, storeFront };
      obj2.extra = obj3;
      const result = BillingUtils.captureBillingMessage("useNativeIAPPayments failed to load required context", obj2);
      arr = closure_2;
    }
  }, 5000);
  return { nativePaymentsConnected, storeFront, canMakePayments };
});
let closure_16 = tmp4;
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((planId) => {
  const cResult = planId(applicationId[10]).c(18);
  planId = planId.planId;
  const skuId = planId.skuId;
  applicationId = planId.applicationId;
  const analyticsLocation = planId.analyticsLocation;
  const tmp4 = closure_16();
  const nativePaymentsConnected = tmp4.nativePaymentsConnected;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionPlanStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== planId) {
    const fn = function o() {
      return SubscriptionPlanStore.get(planId);
    };
    const items1 = [planId];
    cResult[1] = planId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = planId(applicationId[10]);
  const stateFromStores = planId(applicationId[11]).useStateFromStores(first, tmp7, tmp8);
  const tmp10 = skuId;
  const tmpResult = planId(applicationId[11]);
  closure_5 = skuId(applicationId[15])(stateFromStores, tmp4.storeFront);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        obj = closure_0(applicationId[16]);
        return obj.getNewAnalyticsLoadId();
      }
    }
    cResult[4] = F;
    const tmp12 = F;
  } else {
    class F {
      constructor() {
        obj = closure_0(applicationId[16]);
        return obj.getNewAnalyticsLoadId();
      }
    }
  }
  const tmp13 = tmp10(applicationId[17])(tmp12);
  load_id = tmp13;
  if (cResult[5] === tmp13) {
    class F {
      constructor() {
        obj = closure_0(applicationId[16]);
        return obj.getNewAnalyticsLoadId();
      }
    }
  }
  class G {
    constructor() {
      obj = closure_0(closure_2[18]);
      obj1 = { load_id: closure_6, payment_type: closure_10[PurchaseTypes.SUBSCRIPTION], subscription_plan_gateway_plan_id: closure_0(closure_2[19]).ProductIds.GENERIC_SUBSCRIPTION, subscription_type: SubscriptionTypes.GUILD, is_gift: false, location: analyticsLocation, application_id: applicationId, subscription_plan_id: closure_0, sku_id: skuId };
      result = obj.trackPaymentFlowStartedAnalyticsAndCTP(obj1);
      return;
    }
  }
  cResult[5] = tmp13;
  cResult[6] = analyticsLocation;
  cResult[7] = applicationId;
  cResult[8] = planId;
  cResult[9] = skuId;
  cResult[10] = G;
}) : ((planId) => {
  planId = planId.planId;
  const skuId = planId.skuId;
  const applicationId = planId.applicationId;
  const analyticsLocation = planId.analyticsLocation;
  let callback;
  const tmp = closure_16();
  const nativePaymentsConnected = tmp.nativePaymentsConnected;
  const items = [callback];
  const items1 = [planId];
  const stateFromStores = planId(applicationId[11]).useStateFromStores(items, () => SubscriptionPlanStore.get(planId), items1);
  const tmp3 = skuId(applicationId[15])(stateFromStores, tmp.storeFront);
  noop = tmp3;
  const tmp4 = skuId(applicationId[17])(() => planId(applicationId[16]).getNewAnalyticsLoadId());
  load_id = tmp4;
  const items2 = [tmp4, analyticsLocation, applicationId, planId, skuId];
  callback = noop.useCallback(() => {
    const obj = PaymentFlowStartedTriggerPoint;
    const result = obj.trackPaymentFlowStartedAnalyticsAndCTP({ load_id, payment_type: dependencyMap2[constants.SUBSCRIPTION], subscription_plan_gateway_plan_id: ProductIds.ProductIds.GENERIC_SUBSCRIPTION, subscription_type: constants2.GUILD, is_gift: false, location: analyticsLocation, application_id: applicationId, subscription_plan_id: planId, sku_id: skuId });
  }, items2);
  const obj2 = { createSubscription: null, nativePaymentsConnected };
  const items3 = [tmp3, nativePaymentsConnected, callback];
  obj2.createSubscription = noop.useCallback(analyticsLocation(function*(arg0, value) {
    v4(tmp30[20])(nativePaymentsConnected, "cannot connect to IAP API");
    v4(tmp30[20])(null != closure_5, "plan not found");
    yield v4(tmp30[12]).restoreAndApplyPurchases();
    if (1 === tmp7) {
      c3 = 0;
      logger.error("error consuming pending purchases but we'll try to let user purchase");
      closure_128_7();
      const genericSubscription = tmp3(tmp30[12]).createGenericSubscription(closure_128_5);
      v4 = 2;
      c4 = 1;
      tmp3(tmp30[12]);
    } else if (2 === tmp7) {
      if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        return { value, done: true };
      } else {
        v4 = 4;
        c4 = 1;
        return { value: tmp3(tmp30[21]).fetchSubscriptions(), done: false };
      }
    } else if (3 === tmp7) {
      if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c3 = 0;
      }
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      c4 = 3;
      return { value: "IconComponent", done: null };
    }
    return value;
  }), items3);
  return obj2;
});
ReactCompilerGating = fn(558);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  importDefault = arg1;
  const cResult = require("c").c(15);
  const tmp4 = closure_16();
  nativePaymentsConnected = tmp4.nativePaymentsConnected;
  const storeFront = tmp4.storeFront;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return SubscriptionStore.getSubscriptionById(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === storeFront) {
    if (cResult[5] === stateFromStores) {
      let tmp10 = cResult[6];
    }
    asyncGeneratorStep = tmp10;
    const tmp13 = require("useCancelSubscriptionParams")(arg0);
    closure_4 = tmp13;
    if (cResult[7] === tmp10) {
      if (cResult[8] === tmp13) {
        if (cResult[9] === nativePaymentsConnected) {
          if (cResult[10] === arg1) {
            let tmp14 = cResult[11];
          }
          if (cResult[12] === tmp14) {
            if (cResult[13] === nativePaymentsConnected) {
              let tmp16 = cResult[14];
            }
            return tmp16;
          }
          const obj2 = { cancelSubscription: tmp14, nativePaymentsConnected };
          cResult[12] = tmp14;
          cResult[13] = nativePaymentsConnected;
          cResult[14] = obj2;
          tmp16 = obj2;
        }
      }
    }
    _require = asyncGeneratorStep(async () => {
      closure_1(nativePaymentsConnected[20])(c3, "Cannot update subscription");
      closure_1(nativePaymentsConnected[20])(c2, "Cannot connect to IAP API");
      closure_1(nativePaymentsConnected[20])(null != closure_1_4, "Subscription not found");
      closure_128_0 = await tmp2(nativePaymentsConnected[12]).cancelGenericSubscription(closure_1_4.requestIdentifier, closure_1_4.subscriptionId, closure_1);
      await tmp2(nativePaymentsConnected[21]).fetchSubscriptions();
      return closure_128_0;
    });
    const fn2 = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    cResult[7] = tmp10;
    cResult[8] = tmp13;
    cResult[9] = nativePaymentsConnected;
    cResult[10] = arg1;
    cResult[11] = fn2;
    tmp14 = fn2;
  }
  cResult[4] = storeFront;
  cResult[5] = stateFromStores;
  cResult[6] = null != stateFromStores && null != storeFront && stateFromStores.currency === storeFront.currency;
  tmp10 = tmp11;
}) : ((arg0, arg1) => {
  _require = arg0;
  importDefault = arg1;
  const tmp = closure_16();
  const nativePaymentsConnected = tmp.nativePaymentsConnected;
  const storeFront = tmp.storeFront;
  const items = [SubscriptionStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => SubscriptionStore.getSubscriptionById(closure_0), items1);
  const items2 = [storeFront, stateFromStores];
  memo = memo.useMemo(() => {
    let tmp3 = null != stateFromStores;
    if (tmp3) {
      tmp3 = null != tmp2;
    }
    if (tmp3) {
      tmp3 = stateFromStores.currency === tmp2.currency;
    }
    return tmp3;
  }, items2);
  const tmp4 = require("useCancelSubscriptionParams")(arg0);
  closure_6 = tmp4;
  const obj2 = { cancelSubscription: null, nativePaymentsConnected };
  const items3 = [memo, tmp4, nativePaymentsConnected, arg1];
  obj2.cancelSubscription = memo.useCallback(storeFront(function*() {
    closure_1(38)(memo, "Cannot update subscription");
    closure_1(38)(nativePaymentsConnected, "Cannot connect to IAP API");
    closure_1(38)(null != closure_6, "Subscription not found");
    closure_128_0 = yield tmp2(7695).cancelGenericSubscription(closure_6.requestIdentifier, closure_6.subscriptionId, closure_1);
    yield tmp2(5113).fetchSubscriptions();
    return closure_128_0;
  }), items3);
  return obj2;
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(15);
  const tmp4 = closure_16();
  const nativePaymentsConnected = tmp4.nativePaymentsConnected;
  const storeFront = tmp4.storeFront;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return SubscriptionStore.getSubscriptionById(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === storeFront) {
    if (cResult[5] === stateFromStores) {
      let tmp10 = cResult[6];
    }
    asyncGeneratorStep = tmp10;
    const tmp13 = nativePaymentsConnected(tmp2[23])(arg0);
    closure_4 = tmp13;
    if (cResult[7] === tmp10) {
      if (cResult[8] === nativePaymentsConnected) {
        if (cResult[9] === tmp13) {
          if (cResult[10] === stateFromStores) {
            let tmp14 = cResult[11];
          }
          if (cResult[12] === nativePaymentsConnected) {
            if (cResult[13] === tmp14) {
              let tmp16 = cResult[14];
            }
            return tmp16;
          }
          const obj2 = { resubscribeSubscription: tmp14, nativePaymentsConnected };
          cResult[12] = nativePaymentsConnected;
          cResult[13] = tmp14;
          cResult[14] = obj2;
          tmp16 = obj2;
        }
      }
    }
    _require = asyncGeneratorStep(async () => {
      nativePaymentsConnected(stateFromStores[20])(c3, "Cannot update subscription");
      nativePaymentsConnected(stateFromStores[20])(closure_1, "Cannot connect to IAP API");
      nativePaymentsConnected(stateFromStores[20])(null != closure_1_4, "Subscription not found");
      nativePaymentsConnected(stateFromStores[20])(null != isACOM, "Subscription not found");
      closure_128_0 = await tmp2(stateFromStores[12]).resubscribeGenericSubscription(closure_1_4, isACOM.isACOM);
      await tmp2(stateFromStores[21]).fetchSubscriptions();
      return closure_128_0;
    });
    const fn2 = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    cResult[7] = tmp10;
    cResult[8] = nativePaymentsConnected;
    cResult[9] = tmp13;
    cResult[10] = stateFromStores;
    cResult[11] = fn2;
    tmp14 = fn2;
  }
  cResult[4] = storeFront;
  cResult[5] = stateFromStores;
  cResult[6] = null != stateFromStores && null != storeFront && stateFromStores.currency === storeFront.currency;
  tmp10 = tmp11;
}) : ((arg0) => {
  _require = arg0;
  const tmp = closure_16();
  const nativePaymentsConnected = tmp.nativePaymentsConnected;
  const storeFront = tmp.storeFront;
  const items = [SubscriptionStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => SubscriptionStore.getSubscriptionById(closure_0), items1);
  const items2 = [storeFront, stateFromStores];
  const memo = noop.useMemo(() => {
    let tmp3 = null != stateFromStores;
    if (tmp3) {
      tmp3 = null != tmp2;
    }
    if (tmp3) {
      tmp3 = stateFromStores.currency === tmp2.currency;
    }
    return tmp3;
  }, items2);
  const tmp4 = nativePaymentsConnected(storeFront[23])(arg0);
  noop = tmp4;
  const obj2 = { resubscribeSubscription: null, nativePaymentsConnected };
  const items3 = [memo, nativePaymentsConnected, tmp4, stateFromStores];
  obj2.resubscribeSubscription = noop.useCallback(stateFromStores(function*() {
    nativePaymentsConnected(38)(memo, "Cannot update subscription");
    nativePaymentsConnected(38)(nativePaymentsConnected, "Cannot connect to IAP API");
    nativePaymentsConnected(38)(null != closure_5, "Subscription not found");
    nativePaymentsConnected(38)(null != stateFromStores, "Subscription not found");
    closure_128_0 = yield tmp2(7695).resubscribeGenericSubscription(closure_5, stateFromStores.isACOM);
    yield tmp2(5113).fetchSubscriptions();
    return closure_128_0;
  }), items3);
  return obj2;
});
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GenericIAPStore];
    const fn = function t() {
      return storeFront.getStoreFront();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [GenericIAPStore];
  return initialize.useStateFromStores(items, () => storeFront.getStoreFront());
});
function useGoogleSkuIds() {
  return closure_14;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/payments/native/hooks/NativePaymentHooks.ios.tsx");

export default { useNativeIAPPayments: tmp4, useGoogleSkuIds, useCreateSubscription: tmp5, useCancelSubscription: tmp6, useResubscribeSubscription: tmp7, useMobileStoreFront: tmp8 };
export const useNativeIAPPayments = tmp4;
export const useCreateSubscription = tmp5;
export const useCancelSubscription = tmp6;
export const useResubscribeSubscription = tmp7;
export { useGoogleSkuIds };
export const useMobileStoreFront = tmp8;
