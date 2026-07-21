// Module ID: 6658
// Function ID: 51241
// Name: context
// Dependencies: []
// Exports: createNativeStore, useNativeCheckoutStore, useNativeCheckoutStoreOrNull

// Module 6658 (context)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const importDefaultResultResult = importDefault(dependencyMap[1])(importDefault(dependencyMap[4])(), 2);
let closure_6 = importDefaultResultResult[1];
const context = importAllResult.createContext("unset_context");
const importDefaultResult = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/checkout/native/NativeCheckoutStore.tsx");

export const NativeCheckoutStoreContextOrNull = context;
export const useNativeCheckoutStore = function useNativeCheckoutStore(arg0) {
  let shallow = arg1;
  if (arg1 === undefined) {
    shallow = arg1(dependencyMap[5]).shallow;
  }
  return callback()(arg0, shallow);
};
export const useNativeCheckoutStoreOrNull = function useNativeCheckoutStoreOrNull(arg0) {
  let shallow = arg1;
  if (arg1 === undefined) {
    shallow = arg1(dependencyMap[5]).shallow;
  }
  const context = importAllResult.useContext(context);
  let contextResult = null;
  if ("unset_context" !== context) {
    contextResult = context(arg0, shallow);
  }
  return contextResult;
};
export const createNativeStore = function createNativeStore(arg0) {
  ({ order: closure_0, checkoutInitParameters: closure_1, contextMetadata: closure_2, paymentGateway: closure_3, orderRequired: closure_4, onOrderRetryCancellation: closure_5 } = arg0);
  return arg1(dependencyMap[6]).createWithEqualityFn((arg0, arg1) => {
    function runPatchOrderLineItems() {
      return _runPatchOrderLineItems(...arguments);
    }
    async function _runPatchOrderLineItems(orderLineItems, externalGatewayFacet, arg2) {
      const orderRecord = callback2().orderRecord;
      if (null == orderRecord) {
        const _Error = Error;
        const error = new Error("Patch being called in a missing order state");
        throw error;
      } else {
        let obj = callback(closure_2[7]);
        obj = {};
        ({ id: obj2.orderId, revision: obj2.expectedRevision } = orderRecord);
        obj.orderLineItems = orderLineItems;
        obj.externalGatewayFacet = externalGatewayFacet;
        const tmp5 = yield obj.patchOrder(obj);
        obj = { orderRecord: closure_5.createFromServer(tmp5) };
        callback(obj);
        return tmp5;
      }
    }
    function runRecreateOrder() {
      return _runRecreateOrder(...arguments);
    }
    async function _runRecreateOrder(country, arg1) {
      const orderRecord = lib().orderRecord;
      if (null != orderRecord) {
        const orderLineItems = orderRecord.orderLineItems;
        const mapped = orderLineItems.map((sku_id) => ({ sku_id: sku_id.sku_id, quantity: sku_id.quantity, purchase_type: sku_id.purchase_type, subscription_plan_id: sku_id.subscription_plan_id }));
        let tmp2;
        if (obj7.some(mapped, (subscription_plan_id) => null != subscription_plan_id.subscription_plan_id)) {
          let obj = {};
          obj = {};
          ({ currency: obj2.currency, country: obj2.country_code } = country);
          obj.subscription_preview = obj;
          tmp2 = obj;
          if (null != lib.activeSubscription) {
            obj.subscription_id = lib.activeSubscription.id;
            tmp2 = obj;
          }
        }
        let tmp4;
        if (null != orderRecord.externalGatewayFacet) {
          obj = {};
          const line_items = orderRecord.externalGatewayFacet.line_items;
          obj.line_items = line_items.map((external_product_id) => ({ external_product_id: external_product_id.external_product_id }));
          tmp4 = obj;
        }
        const obj7 = lib(closure_2[8]);
        const obj1 = { orderLineItems: mapped, paymentGateway: closure_3, isGift: lib.isGift, subscriptionFacet: tmp2, externalGatewayFacet: tmp4, countryCode: country.country };
        const obj2 = { orderRecord: closure_5.createFromServer(yield callback(closure_2[7]).createOrder(obj1)) };
        callback(obj2);
        const obj4 = callback(closure_2[7]);
      }
    }
    const obj = {};
    let fromServer = null;
    if (null != arg0) {
      fromServer = _runPatchOrderLineItems.createFromServer(arg0);
    }
    obj.orderRecord = fromServer;
    obj.setOrder = function setOrder(order) {
      return order({ orderRecord: _runPatchOrderLineItems.createFromServer(order) });
    };
    obj.getCheckoutContextRecord = function getCheckoutContextRecord() {
      const orderRecord = arg1().orderRecord;
      let prop = null;
      if (null != orderRecord) {
        prop = orderRecord.checkoutContextRecord;
      }
      return prop;
    };
    obj.isPatchOrderLoading = false;
    const callback = callback(async (arg0, arg1) => {
      arg0({ isPatchOrderLoading: true });
      arg0({ isPatchOrderLoading: false });
      return yield closure_4(arg0, arg1);
    });
    obj.patchOrderLineItems = function() {
      return callback2(...arguments);
    };
    obj.isCreateOrderLoading = false;
    let closure_2 = callback(async (arg0) => {
      arg0({ isCreateOrderLoading: true });
      yield closure_6(arg0);
      arg0({ isCreateOrderLoading: false });
    });
    obj.recreateOrder = function() {
      return callback(...arguments);
    };
    obj.checkoutInitParameters = arg1;
    obj.contextMetadata = closure_2;
    obj.orderRequired = runPatchOrderLineItems;
    obj.checkoutSucceeded = false;
    obj.setCheckoutSucceeded = function setCheckoutSucceeded() {
      return arg0({ checkoutSucceeded: true });
    };
    obj.onOrderRetryCancellation = _runPatchOrderLineItems;
    return obj;
  }, arg1(dependencyMap[5]).shallow);
};
export const NativeCheckoutStoreContext = importDefaultResultResult[0];
