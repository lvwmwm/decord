// Module ID: 10269
// Function ID: 10270
// Name: NativeCheckoutStoreProvider
// Dependencies: [5, 32, 19, 17, 6844, 1074, 4815, 1085, 21, 4836, 5910, 8667, 573, 6849, 6850, 5889, 1255, 1231, 5298, 10270, 1241, 10272, 2]
// Exports: default

// Module 10269 (NativeCheckoutStoreProvider)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import Constants2 from "Constants" /* 1085 */;
import SentryUtilsDefault from "SentryUtils" /* 1231 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import v1 from "v1" /* 1255 */;
import PaymentConstants from "PaymentConstants" /* 4815 */;
import PaymentFlowStartedTriggerPoint from "PaymentFlowStartedTriggerPoint" /* 10270 */;
import OrderUtils from "OrderUtils" /* 10272 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import NativeCheckoutStore from "NativeCheckoutStore" /* 6844 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c5, country, redux;

let c9;
let metroImportAll;
let metroImportDefault;
function NativeCheckoutStoreProvider(children) {
  let analyticsFields;
  let checkoutInitParameters;
  let closure_7;
  let initialSubscriptionFacet;
  let initial_step;
  let onOrderRetryCancellation;
  let order;
  let orderRequired;
  ({ checkoutInitParameters: require, order } = children);
  ({ paymentGateway: dependencyMap, orderRequired: _asyncToGenerator, onOrderRetryCancellation: _slicedToArray, initialSubscriptionFacet: react, checkoutAnalyticsFields: View, analyticsInitialStep: closure_7 } = children);
  children = children.children;
  const contextMetadata = order(5910)(() => {
    let id;
    if (order != null) {
      id = order.id;
    }
    if (id == null) {
      const obj = v1;
      id = obj.v4();
    }
    const obj2 = SentryUtilsDefault;
    const obj3 = { message: "Checkout session ID: " + id };
    obj2.addBreadcrumb(obj3);
    const obj4 = { loadId: id, startTime: Date.now() };
    return obj4;
  });
  redux = order(5910)(() => {
    const obj = { load_id: contextMetadata.loadId, payment_gateway };
    const merged = Object.assign(View);
    return obj;
  });
  const value = _slicedToArray(react.useState(() => {
    const obj = { order, checkoutInitParameters: require, contextMetadata, analyticsFields, paymentGateway, orderRequired: _asyncToGenerator, onOrderRetryCancellation: _slicedToArray, initialSubscriptionFacet: react };
    return metroImportDefault(obj);
  }), 1)[0];
  const tmp2 = order(5298)(() => {
    if (null != View) {
      let obj = PaymentFlowStartedTriggerPoint;
      const result = obj.trackPaymentFlowStartedAnalyticsAndCTP(analyticsFields);
      const obj2 = { initial_step };
      const track = AnalyticsUtilsDefault.track;
      const PAYMENT_FLOW_LOADED = AnalyticEvents.PAYMENT_FLOW_LOADED;
      AnalyticsUtilsDefault;
      const merged = Object.assign(analyticsFields);
      track(PAYMENT_FLOW_LOADED, obj2);
      return () => {
        let checkoutSucceeded;
        let purchaseInFlight;
        state = state.getState();
        ({ checkoutSucceeded, purchaseInFlight } = state);
        if (!checkoutSucceeded) {
          checkoutSucceeded = state.checkoutFailed;
        }
        if (!checkoutSucceeded) {
          checkoutSucceeded = purchaseInFlight;
        }
        if (!checkoutSucceeded) {
          const obj = order(dependencyMap[20]);
          obj.track(first.PAYMENT_FLOW_CANCELED, analyticsFields);
        }
      };
    }
  });
  const ref = react.useRef(null != order);
  const items = [order, value];
  const effect = react.useEffect(() => {
    let current = ref.current;
    const tmp = ref;
    if (!current) {
      current = null == order;
    }
    if (!current) {
      const state = first.getState();
      state.setOrder(order);
      tmp.current = true;
    }
  }, items);
  const items1 = [value];
  const effect1 = react.useEffect(() => () => {
    let obj5;
    state = state.getState();
    const orderRecord = state.orderRecord;
    if (null != orderRecord) {
      const obj2 = { checkoutSucceeded: tmp2, order: obj5 };
      obj5 = { id: null, status: null };
      ({ id: obj3.id, status: obj3.status } = orderRecord);
      const obj = OrderUtils;
      obj.discardDraftOrder(obj2);
    }
  }, items1);
  return <contextMetadata value={value}><redux.Provider value={value}>{children}</redux.Provider></contextMetadata>;
}
const View = react_native.View;
({ createNativeStore: metroImportDefault, NativeCheckoutStoreContext: metroImportAll, NativeCheckoutStoreContextOrNull: c9 } = NativeCheckoutStore);
const AnalyticEvents = Constants.AnalyticEvents;
const ItemPurchaseType = PaymentConstants.ItemPurchaseType;
const PaymentGateways = Constants2.PaymentGateways;
const jsx = Fragment.jsx;
let closure_14 = createStyles.createStyles({ loadingSpinnerContainer: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } });
let result = size.fileFinishedImporting("modules/checkout/native/stores/NativeCheckoutStoreProvider.tsx");

export default function NativeCheckoutStoreProviderWrapper(orderRequired) {
  let analyticsInitialStep;
  let c9;
  let checkoutAnalyticsFields;
  let obj4;
  let paymentGateway;
  let skuIds;
  let tmp18;
  let tmp3;
  orderRequired = orderRequired.orderRequired;
  ({ skuIds, paymentGateway } = orderRequired);
  let isGift = orderRequired.isGift;
  const onOrderCreated = orderRequired.onOrderCreated;
  const activeSubscription = orderRequired.activeSubscription;
  const defaultPlans = orderRequired.defaultPlans;
  const onOrderRetryCancellation = orderRequired.onOrderRetryCancellation;
  const initialSubscriptionFacet = orderRequired.initialSubscriptionFacet;
  const initialExternalGatewayFacet = orderRequired.initialExternalGatewayFacet;
  let flag = orderRequired.headless;
  const children = orderRequired.children;
  if (flag === undefined) {
    flag = false;
  }
  c9 = undefined;
  let sku_id;
  let mobileStoreFront;
  let callback;
  let callback2;
  ({ checkoutAnalyticsFields, analyticsInitialStep } = orderRequired);
  let obj = defaultPlans;
  const tmp = callback();
  const tmp2 = activeSubscription(defaultPlans.useState(null), 2);
  [tmp3, c9] = tmp2;
  const tmp4 = activeSubscription(defaultPlans.useState(orderRequired), 2);
  let closure_10 = tmp4[1];
  const first = tmp4[0];
  const ref = defaultPlans.useRef(false);
  let tmp7 = isGift;
  let first1 = null;
  const tmp6 = paymentGateway;
  const tmp8 = paymentGateway(isGift[10]);
  if (skuIds.length > 0) {
    first1 = skuIds[0];
  }
  const tmp8Result = tmp8(first1);
  sku_id = tmp8Result;
  if (null == tmp8Result) {
    if (null == defaultPlans) {
      if (orderRequired) {
        const _Error = Error;
        throw Error("SkuIDs needs to a specified!");
      }
    }
  }
  const tmp6Result = tmp6(tmp7[11]);
  mobileStoreFront = tmp6Result.useMobileStoreFront();
  const effect = obj.useEffect(() => {
    let obj = paymentGateway(isGift[12]);
    obj.dispatch({ type: "IAP_CHECKOUT_START" });
    return () => {
      const obj = paymentGateway(isGift[12]);
      obj.dispatch({ type: "IAP_CHECKOUT_END" });
    };
  }, []);
  const useCallback = obj.useCallback;
  onOrderCreated((orderLineItems) => {
    let closure_1;
    let externalGatewayFacet;
    let v2;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      const obj5 = { orderLineItems, paymentGateway: tmp, isGift, subscriptionFacet: tmp, externalGatewayFacet, countryCode: country };
      const createOrder = orderLineItems(closure_2_2[13]).createOrder;
      orderLineItems(closure_2_2[13]);
      if (country != null) {
        country = country.country;
      }
      isGift = yield createOrder(obj5);
      closure_1_9(isGift);
      if (null != v2) {
        v2(isGift);
      }
      closure_1_10(false);
      yield "HermesInternal";
      isGift = tmp4;
      ({ orderLineItems: c0, subscriptionFacet: c1 } = orderLineItems);
      return "flex";
    })();
    iter.next();
    return iter;
  });
  let items = [paymentGateway, onOrderCreated, isGift, mobileStoreFront, initialExternalGatewayFacet];
  callback = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  const useCallback2 = obj.useCallback;
  let closure_0 = onOrderCreated(function*(arg0, value) {
    closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: callback(closure_0), done: false };
            return obj5;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            const obj2 = closure_0(isGift[14]);
            const result = obj2.showCheckoutOrderErrorModal(() => closure_2_14(closure_1_0), () => {
              closure_1_10(false);
              closure_1_6();
            });
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        if (0 === c3) {
          c5 = 3;
          throw tmp12;
        } else {
          c4 = 1;
        }
      }
    }
  });
  let items1 = [callback, onOrderRetryCancellation];
  callback2 = useCallback2(function() {
    return closure_0(...arguments);
  }, items1);
  const items2 = [tmp8Result, orderRequired, callback2, defaultPlans, mobileStoreFront, paymentGateway, activeSubscription, initialSubscriptionFacet];
  const effect1 = obj.useEffect(() => {
    let obj3;
    if (!ref.current) {
      if (null != mobileStoreFront) {
        const tmp7 = orderRequired;
        if (tmp7) {
          if (null != sku_id) {
            let tmp10;
            const items = [];
            const arr2 = defaultPlans;
            if (null != defaultPlans) {
              if (null != mobileStoreFront) {
                const push = items.push;
                const items1 = [];
                HermesBuiltin.arraySpread(items1, arr2.map((skuId) => ({ sku_id: skuId.skuId, subscription_plan_id: skuId.subscriptionPlanId, quantity: skuId.quantity, purchase_type: constants.SUBSCRIPTION })), 0);
                HermesBuiltin.apply(push, items1, items);
                const obj2 = { subscription_preview: obj3 };
                obj3 = { currency: null, country_code: null };
                ({ currency: obj4.currency, country: obj4.country_code } = mobileStoreFront);
                if (null != activeSubscription) {
                  obj2.subscription_id = activeSubscription.id;
                }
                tmp10 = obj2;
                const tmp14 = null != initialSubscriptionFacet && null != initialSubscriptionFacet.subscription_preview.subscription_trial_id;
                if (tmp14) {
                  obj2.subscription_preview.subscription_trial_id = initialSubscriptionFacet.subscription_preview.subscription_trial_id;
                  tmp10 = obj2;
                }
              }
            } else if (null != sku_id) {
              const obj = { sku_id, quantity: 1, purchase_type: ItemPurchaseType.ONE_TIME };
              items.push(obj);
            }
            tmp2.current = true;
            const obj7 = { orderLineItems: items, subscriptionFacet: tmp10 };
            callback2(obj7);
          }
        }
      }
    }
  }, items2);
  if (first) {
    let tmp19 = null;
    if (!flag) {
      let obj2 = { style: tmp.loadingSpinnerContainer, children: mobileStoreFront(orderRequired(tmp7[15]).ActivityIndicator, { animating: true, size: "large" }) };
      tmp19 = mobileStoreFront(onOrderRetryCancellation, obj2);
    }
    tmp18 = tmp19;
  } else {
    let obj3 = { checkoutInitParameters: obj4, order: tmp3, paymentGateway, onOrderRetryCancellation, orderRequired, initialSubscriptionFacet, checkoutAnalyticsFields, analyticsInitialStep, children };
    obj4 = { skuIds, isGift, activeSubscription, referralTrialOfferId: null };
    tmp18 = mobileStoreFront(callback2, obj3);
  }
  return tmp18;
};
