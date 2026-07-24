// Module ID: 6663
// Function ID: 51301
// Name: context
// Dependencies: [5, 57, 31, 6664, 6667, 3743, 677, 6668, 22, 3791, 6669, 2]
// Exports: createNativeStore, useNativeCheckoutStore, useNativeCheckoutStoreOrNull

// Module 6663 (context)
import isIterable from "isIterable";
import importAllResult from "result";
import _callSuper from "_callSuper";
import importDefaultResult from "_slicedToArray";

const require = arg1;
const importDefaultResultResult = require("_slicedToArray")(require("createDefinedContext")(), 2);
let closure_6 = importDefaultResultResult[1];
let context = importAllResult.createContext("unset_context");
const result = require("result").fileFinishedImporting("modules/checkout/native/NativeCheckoutStore.tsx");

export const NativeCheckoutStoreContextOrNull = context;
export const useNativeCheckoutStore = function useNativeCheckoutStore(arg0) {
  let shallow = arg1;
  if (arg1 === undefined) {
    shallow = require(3743) /* isIterable */.shallow;
  }
  return callback()(arg0, shallow);
};
export const useNativeCheckoutStoreOrNull = function useNativeCheckoutStoreOrNull(arg0) {
  let shallow = arg1;
  if (arg1 === undefined) {
    shallow = require(3743) /* isIterable */.shallow;
  }
  context = importAllResult.useContext(context);
  let contextResult = null;
  if ("unset_context" !== context) {
    contextResult = context(arg0, shallow);
  }
  return contextResult;
};
export const createNativeStore = function createNativeStore(arg0) {
  let isIterable;
  let closure_4;
  let _callSuper;
  let dependencyMap;
  let importDefault;
  let require;
  ({ order: require, checkoutInitParameters: importDefault, contextMetadata: dependencyMap, paymentGateway: isIterable, orderRequired: closure_4, onOrderRetryCancellation: _callSuper } = arg0);
  return require(677) /* useStoreWithEqualityFn */.createWithEqualityFn((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    function runPatchOrderLineItems() {
      return _runPatchOrderLineItems(...arguments);
    }
    async function _runPatchOrderLineItems(arg0, arg1, arg2) {
      const orderRecord = outer2_1().orderRecord;
      if (null == orderRecord) {
        const _Error = Error;
        const error = new Error("Patch being called in a missing order state");
        throw error;
      } else {
        let obj = outer4_0(outer4_2[7]);
        obj = {};
        ({ id: obj2.orderId, revision: obj2.expectedRevision } = orderRecord);
        obj.orderLineItems = arg0;
        obj.externalGatewayFacet = arg1;
        const tmp5 = yield obj.patchOrder(obj);
        obj = { orderRecord: outer4_5.createFromServer(tmp5) };
        outer2_0(obj);
        return tmp5;
      }
    }
    function runRecreateOrder() {
      return _runRecreateOrder(...arguments);
    }
    async function _runRecreateOrder(arg0, arg1) {
      const orderRecord = outer2_1().orderRecord;
      if (null != orderRecord) {
        const orderLineItems = orderRecord.orderLineItems;
        const mapped = orderLineItems.map((sku_id) => ({ sku_id: sku_id.sku_id, quantity: sku_id.quantity, purchase_type: sku_id.purchase_type, subscription_plan_id: sku_id.subscription_plan_id }));
        let tmp2;
        if (obj7.some(mapped, (subscription_plan_id) => null != subscription_plan_id.subscription_plan_id)) {
          let obj = {};
          obj = {};
          ({ currency: obj2.currency, country: obj2.country_code } = arg0);
          obj.subscription_preview = obj;
          tmp2 = obj;
          if (null != closure_1.activeSubscription) {
            obj.subscription_id = closure_1.activeSubscription.id;
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
        obj7 = outer4_1(outer4_2[8]);
        const obj1 = { orderLineItems: mapped, paymentGateway: isIterable, isGift: closure_1.isGift, subscriptionFacet: tmp2, externalGatewayFacet: tmp4, countryCode: arg0.country };
        const obj2 = { orderRecord: outer4_5.createFromServer(yield outer4_0(outer4_2[7]).createOrder(obj1)) };
        outer2_0(obj2);
        const obj4 = outer4_0(outer4_2[7]);
      }
    }
    let obj = {};
    let fromServer = null;
    if (null != closure_0) {
      fromServer = outer1_5.createFromServer(closure_0);
    }
    obj.orderRecord = fromServer;
    obj.setOrder = function setOrder(order) {
      return callback({ orderRecord: outer2_5.createFromServer(order) });
    };
    obj.getCheckoutContextRecord = function getCheckoutContextRecord() {
      const orderRecord = callback2().orderRecord;
      let prop = null;
      if (null != orderRecord) {
        prop = orderRecord.checkoutContextRecord;
      }
      return prop;
    };
    obj.isPatchOrderLoading = false;
    let isIterable = outer1_3(async (arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      outer1_0({ isPatchOrderLoading: true });
      outer1_0({ isPatchOrderLoading: false });
      return yield outer1_4(arg0, arg1);
    });
    obj.patchOrderLineItems = function() {
      return callback4(...arguments);
    };
    obj.isCreateOrderLoading = false;
    let closure_2 = outer1_3(async (arg0) => {
      let closure_0 = arg0;
      outer1_0({ isCreateOrderLoading: true });
      yield outer1_6(arg0);
      outer1_0({ isCreateOrderLoading: false });
    });
    obj.recreateOrder = function() {
      return callback3(...arguments);
    };
    obj.checkoutInitParameters = closure_1;
    obj.contextMetadata = closure_2;
    obj.orderRequired = runPatchOrderLineItems;
    obj.checkoutSucceeded = false;
    obj.setCheckoutSucceeded = function setCheckoutSucceeded() {
      return callback({ checkoutSucceeded: true });
    };
    obj.onOrderRetryCancellation = _runPatchOrderLineItems;
    return obj;
  }, require(3743) /* isIterable */.shallow);
};
export const NativeCheckoutStoreContext = importDefaultResultResult[0];
