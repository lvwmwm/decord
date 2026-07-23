// Module ID: 7195
// Function ID: 57900
// Name: NativeCheckoutStoreProvider
// Dependencies: [5, 57, 31, 27, 6663, 4113, 33, 4130, 5450, 7196, 6668, 6669, 5586, 491, 1184, 7202, 2]
// Exports: default

// Module 7195 (NativeCheckoutStoreProvider)
import CustomCheckoutFlow from "CustomCheckoutFlow";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import context from "context";
import { ItemPurchaseType } from "CustomCheckoutFlow";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function NativeCheckoutStoreProvider(children) {
  let CustomCheckoutFlow;
  let _slicedToArray;
  let dependencyMap;
  let order;
  let require;
  ({ checkoutInitParameters: require, order } = children);
  ({ paymentGateway: dependencyMap, orderRequired: CustomCheckoutFlow, onOrderRetryCancellation: _slicedToArray } = children);
  const React = order(5450)(() => {
    let id;
    if (null != order) {
      id = order.id;
    }
    if (null == id) {
      let obj = outer1_0(outer1_2[13]);
      id = obj.v4();
    }
    obj = { message: "Checkout session ID: " + id };
    order(outer1_2[14]).addBreadcrumb(obj);
    obj = { loadId: id, startTime: Date.now() };
    return obj;
  });
  const first = callback(React.useState(() => ref({ order, checkoutInitParameters: closure_0, contextMetadata: result, paymentGateway: closure_2, orderRequired: CustomCheckoutFlow, onOrderRetryCancellation: _slicedToArray })), 1)[0];
  let closure_7 = React.useRef(null != order);
  const items = [order, first];
  const effect = React.useEffect(() => {
    let current = ref.current;
    if (!current) {
      current = null == order;
    }
    if (!current) {
      const state = first.getState();
      state.setOrder(order);
      ref.current = true;
    }
  }, items);
  const items1 = [first];
  const effect1 = React.useEffect(() => () => {
    const state = outer1_6.getState();
    const orderRecord = state.orderRecord;
    if (null != orderRecord) {
      let obj = outer2_0(outer2_2[15]);
      obj = { checkoutSucceeded: tmp2 };
      obj = {};
      ({ id: obj3.id, status: obj3.status } = orderRecord);
      obj.order = obj;
      obj.discardDraftOrder(obj);
    }
  }, items1);
  return <closure_8 value={first}><redux.Provider value={first}>{arg0.children}</redux.Provider></closure_8>;
}
({ createNativeStore: closure_7, NativeCheckoutStoreContext: closure_8, NativeCheckoutStoreContextOrNull: closure_9 } = context);
let closure_12 = _createForOfIteratorHelperLoose.createStyles({ loadingSpinnerContainer: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } });
const result = require("result").fileFinishedImporting("modules/checkout/native/stores/NativeCheckoutStoreProvider.tsx");

export default function NativeCheckoutStoreProviderWrapper(orderRequired) {
  let paymentGateway;
  let skuIds;
  orderRequired = orderRequired.orderRequired;
  ({ skuIds, paymentGateway } = orderRequired);
  const isGift = orderRequired.isGift;
  const onOrderCreated = orderRequired.onOrderCreated;
  const activeSubscription = orderRequired.activeSubscription;
  const defaultPlans = orderRequired.defaultPlans;
  const onOrderRetryCancellation = orderRequired.onOrderRetryCancellation;
  const initialSubscriptionFacet = orderRequired.initialSubscriptionFacet;
  const initialExternalGatewayFacet = orderRequired.initialExternalGatewayFacet;
  let callback2;
  let storeFront;
  let callback;
  let callback1;
  const tmp2 = activeSubscription(defaultPlans.useState(null), 2);
  let closure_9 = tmp2[1];
  const tmp3 = activeSubscription(defaultPlans.useState(orderRequired), 2);
  let closure_10 = tmp3[1];
  const jsx = defaultPlans.useRef(false);
  let first = null;
  const tmp = callback2();
  if (skuIds.length > 0) {
    first = skuIds[0];
  }
  const tmp4Result = paymentGateway(isGift[8])(first);
  callback2 = tmp4Result;
  if (null == tmp4Result) {
    if (null == defaultPlans) {
      if (orderRequired) {
        const _Error = Error;
        throw Error("SkuIDs needs to a specified!");
      }
    }
  }
  let obj = orderRequired(isGift[9]);
  storeFront = obj.useNativeIAPPayments().storeFront;
  let items = [paymentGateway, onOrderCreated, isGift, storeFront, initialExternalGatewayFacet];
  callback = defaultPlans.useCallback((() => {
    let closure_0 = onOrderCreated(async (arg0) => {
      const iter = (function*(arg0) {
        let orderLineItems;
        let subscriptionFacet;
        ({ orderLineItems, subscriptionFacet } = arg0);
        yield undefined;
        let obj = orderRequired(isGift[10]);
        obj = { orderLineItems, paymentGateway: outer2_1, isGift: outer2_2, subscriptionFacet, externalGatewayFacet: outer2_8 };
        let country;
        if (null != outer2_13) {
          country = outer2_13.country;
        }
        obj.countryCode = country;
        const tmp4 = yield obj.createOrder(obj);
        outer2_9(tmp4);
        if (null != outer2_3) {
          outer2_3(tmp4);
        }
        outer2_10(false);
      })();
      iter.next();
      return iter;
    });
    return function() {
      return callback(...arguments);
    };
  })(), items);
  let items1 = [callback, onOrderRetryCancellation];
  callback1 = defaultPlans.useCallback((() => {
    let closure_0 = onOrderCreated(async (arg0) => {
      let closure_0 = arg0;
      yield outer2_14(arg0);
    });
    return function() {
      return callback(...arguments);
    };
  })(), items1);
  const items2 = [tmp4Result, orderRequired, callback1, defaultPlans, storeFront, activeSubscription, initialSubscriptionFacet];
  const effect = defaultPlans.useEffect(() => {
    if (!ref.current) {
      if (null != storeFront) {
        if (orderRequired) {
          const items = [];
          if (null != defaultPlans) {
            const push = items.push;
            const items1 = [];
            HermesBuiltin.arraySpread(defaultPlans.map((skuId) => ({ sku_id: skuId.skuId, subscription_plan_id: skuId.subscriptionPlanId, quantity: skuId.quantity, purchase_type: constants.SUBSCRIPTION })), 0);
            HermesBuiltin.apply(items1, items);
            let obj = {};
            obj = { currency: storeFront.currency, country_code: storeFront.country };
            obj.subscription_preview = obj;
            if (null != activeSubscription) {
              obj.subscription_id = activeSubscription.id;
            }
            let tmp23 = null != initialSubscriptionFacet;
            if (tmp23) {
              tmp23 = null != initialSubscriptionFacet.subscription_preview.subscription_trial_id;
            }
            let tmp7 = obj;
            if (tmp23) {
              obj.subscription_preview.subscription_trial_id = initialSubscriptionFacet.subscription_preview.subscription_trial_id;
              tmp7 = obj;
            }
          } else if (null != c12) {
            obj = { sku_id: c12, quantity: 1, purchase_type: constants.ONE_TIME };
            items.push(obj);
          }
          ref.current = true;
          const obj1 = { orderLineItems: items, subscriptionFacet: tmp7 };
          callback1(obj1);
        }
      }
    }
  }, items2);
  if (tmp3[0]) {
    obj = { style: tmp.loadingSpinnerContainer, children: jsx(orderRequired(isGift[12]).ActivityIndicator, { animating: true, size: "large" }) };
    let tmp10Result = tmp10(onOrderRetryCancellation, obj);
  } else {
    obj = {};
    let obj1 = { skuIds, isGift, activeSubscription, referralTrialOfferId: null };
    obj.checkoutInitParameters = obj1;
    obj.order = tmp2[0];
    obj.paymentGateway = paymentGateway;
    obj.onOrderRetryCancellation = onOrderRetryCancellation;
    obj.orderRequired = orderRequired;
    obj.children = orderRequired.children;
    tmp10Result = tmp10(storeFront, obj);
  }
  return tmp10Result;
};
