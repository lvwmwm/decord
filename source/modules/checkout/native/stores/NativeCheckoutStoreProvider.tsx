// Module ID: 7190
// Function ID: 57855
// Name: NativeCheckoutStoreProvider
// Dependencies: []
// Exports: default

// Module 7190 (NativeCheckoutStoreProvider)
function NativeCheckoutStoreProvider(children) {
  let order;
  ({ checkoutInitParameters: closure_0, order } = children);
  const importDefault = order;
  ({ paymentGateway: closure_2, orderRequired: closure_3, onOrderRetryCancellation: closure_4 } = children);
  const React = importDefault(dependencyMap[8])(() => {
    let id;
    if (null != order) {
      id = order.id;
    }
    if (null == id) {
      let obj = callback(closure_2[13]);
      id = obj.v4();
    }
    obj = { message: "Checkout session ID: " + id };
    order(closure_2[14]).addBreadcrumb(obj);
    obj = { loadId: id, startTime: Date.now() };
    return obj;
  });
  const first = callback(React.useState(() => ref({ order, checkoutInitParameters: closure_0, contextMetadata: closure_5, paymentGateway: closure_2, orderRequired: closure_3, onOrderRetryCancellation: closure_4 })), 1)[0];
  const View = first;
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
    const state = state.getState();
    const orderRecord = state.orderRecord;
    if (null != orderRecord) {
      let obj = callback(closure_2[15]);
      obj = { checkoutSucceeded: tmp2 };
      obj = {};
      ({ id: obj3.id, status: obj3.status } = orderRecord);
      obj.order = obj;
      obj.discardDraftOrder(obj);
    }
  }, items1);
  return <closure_8 value={first}><redux.Provider value={first}>{arg0.children}</redux.Provider></closure_8>;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
({ createNativeStore: closure_7, NativeCheckoutStoreContext: closure_8, NativeCheckoutStoreContextOrNull: closure_9 } = arg1(dependencyMap[4]));
const ItemPurchaseType = arg1(dependencyMap[5]).ItemPurchaseType;
const jsx = arg1(dependencyMap[6]).jsx;
const tmp2 = arg1(dependencyMap[4]);
let closure_12 = arg1(dependencyMap[7]).createStyles({ loadingSpinnerContainer: { 9223372036854775807: 0, 618913616341: 0, 0: 0, 9223372036854775807: 0 } });
const obj = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/checkout/native/stores/NativeCheckoutStoreProvider.tsx");

export default function NativeCheckoutStoreProviderWrapper(orderRequired) {
  let paymentGateway;
  let skuIds;
  orderRequired = orderRequired.orderRequired;
  const arg1 = orderRequired;
  ({ skuIds, paymentGateway } = orderRequired);
  const importDefault = paymentGateway;
  const isGift = orderRequired.isGift;
  const dependencyMap = isGift;
  const onOrderCreated = orderRequired.onOrderCreated;
  let closure_3 = onOrderCreated;
  const activeSubscription = orderRequired.activeSubscription;
  let callback = activeSubscription;
  const defaultPlans = orderRequired.defaultPlans;
  const React = defaultPlans;
  const onOrderRetryCancellation = orderRequired.onOrderRetryCancellation;
  const View = onOrderRetryCancellation;
  const initialSubscriptionFacet = orderRequired.initialSubscriptionFacet;
  const initialExternalGatewayFacet = orderRequired.initialExternalGatewayFacet;
  let callback2;
  let NativeCheckoutStoreProvider;
  callback = undefined;
  let callback1;
  const tmp2 = callback(React.useState(null), 2);
  let closure_9 = tmp2[1];
  const tmp3 = callback(React.useState(orderRequired), 2);
  let closure_10 = tmp3[1];
  const jsx = React.useRef(false);
  let first = null;
  const tmp = callback2();
  if (skuIds.length > 0) {
    first = skuIds[0];
  }
  const tmp4Result = importDefault(dependencyMap[8])(first);
  callback2 = tmp4Result;
  if (null == tmp4Result) {
    if (null == defaultPlans) {
      if (orderRequired) {
        const _Error = Error;
        throw Error("SkuIDs needs to a specified!");
      }
    }
  }
  let obj = arg1(dependencyMap[9]);
  const storeFront = obj.useNativeIAPPayments().storeFront;
  NativeCheckoutStoreProvider = storeFront;
  const items = [paymentGateway, onOrderCreated, isGift, storeFront, initialExternalGatewayFacet];
  callback = React.useCallback(() => {
    let closure_0 = onOrderCreated(async (arg0) => {
      const fn = function*(arg0) {
        let orderLineItems;
        let subscriptionFacet;
        ({ orderLineItems, subscriptionFacet } = arg0);
        yield undefined;
        let obj = callback(closure_2[10]);
        obj = { orderLineItems, paymentGateway: closure_1, isGift: closure_2, subscriptionFacet, externalGatewayFacet: closure_8 };
        let country;
        if (null != country) {
          country = country.country;
        }
        obj.countryCode = country;
        const tmp4 = yield obj.createOrder(obj);
        callback3(tmp4);
        if (null != callback2) {
          callback2(tmp4);
        }
        callback4(false);
      };
      fn.next();
      return fn;
    });
    return function() {
      return callback(...arguments);
    };
  }(), items);
  const items1 = [callback, onOrderRetryCancellation];
  callback1 = React.useCallback(() => {
    let closure_0 = onOrderCreated(async (arg0) => {
      yield closure_14(arg0);
    });
    return function() {
      return callback(...arguments);
    };
  }(), items1);
  const items2 = [tmp4Result, orderRequired, callback1, defaultPlans, storeFront, activeSubscription, initialSubscriptionFacet];
  const effect = React.useEffect(() => {
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
          } else if (null != tmp4Result) {
            obj = { sku_id: tmp4Result, quantity: 1, purchase_type: constants.ONE_TIME };
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
    obj = { style: tmp.loadingSpinnerContainer, children: jsx(arg1(dependencyMap[12]).ActivityIndicator, { font: 397, dx: 97 }) };
    let tmp10Result = tmp10(View, obj);
  } else {
    obj = {};
    const obj1 = { skuIds, isGift, activeSubscription, referralTrialOfferId: null };
    obj.checkoutInitParameters = obj1;
    obj.order = tmp2[0];
    obj.paymentGateway = paymentGateway;
    obj.onOrderRetryCancellation = onOrderRetryCancellation;
    obj.orderRequired = orderRequired;
    obj.children = orderRequired.children;
    tmp10Result = tmp10(NativeCheckoutStoreProvider, obj);
  }
  return tmp10Result;
};
