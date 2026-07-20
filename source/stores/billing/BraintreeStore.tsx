// Module ID: 3791
// Function ID: 29556
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 3791 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
({ Endpoints: closure_7, PaymentGateways: closure_8, PaymentSourceTypes: closure_9 } = arg1(dependencyMap[5]));
let closure_12 = null;
let closure_13 = null;
let closure_14 = null;
let obj = arg1(dependencyMap[6]);
if (obj.isDesktop()) {
  const _window = window;
  obj = {
    getReturnUrlPrefix() {
        if (null == closure_10) {
          const _Error = Error;
          const error = new Error("popupBridgeState is unset");
          throw error;
        } else {
          const aPIBaseURL = arg1(dependencyMap[7]).getAPIBaseURL();
          return aPIBaseURL + closure_7.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(constants.BRAINTREE, closure_10);
        }
      },
    open(arg0) {
        window.open(arg0);
        tmp3.emitChange();
      }
  };
  window.popupBridge = obj;
}
let tmp3 = (Store) => {
  class BraintreeStore {
    constructor() {
      self = this;
      tmp = closure_2(this, BraintreeStore);
      obj = closure_5(BraintreeStore);
      tmp2 = closure_4;
      if (closure_16()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = BraintreeStore;
  callback2(BraintreeStore, Store);
  let obj = {
    key: "getClient",
    value() {
      return closure_12;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getPayPalClient",
    value() {
      return closure_13;
    }
  };
  items[1] = obj;
  obj = {
    key: "getVenmoClient",
    value() {
      return closure_14;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLastURL",
    value() {
      return closure_11;
    }
  };
  return callback(BraintreeStore, items);
}(importDefault(dependencyMap[8]).Store);
tmp3.displayName = "BraintreeStore";
obj = {
  BRAINTREE_CREATE_CLIENT_SUCCESS: function handleBraintreeCreateClientSuccess(client) {
    client = client.client;
  },
  BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: function handleBraintreeCreatePayPalClientSuccess(paypalClient) {
    paypalClient = paypalClient.paypalClient;
  },
  BILLING_POPUP_BRIDGE_CALLBACK: function handleBillingPopupBridgeCallback(paymentSourceType) {
    if (paymentSourceType.paymentSourceType === constants2.PAYPAL) {
      if (tmp === closure_10) {
        const _window = window;
        if ("function" === typeof onComplete) {
          const obj = { path: tmp2, queryItems: tmp3 };
          onComplete(null, obj);
        }
      }
    }
  },
  BILLING_POPUP_BRIDGE_STATE_UPDATE: function handleBillingPopupBridgeStateUpdate(paymentSourceType) {
    if (paymentSourceType.paymentSourceType === constants2.PAYPAL) {
      const state = paymentSourceType.state;
    }
  },
  BRAINTREE_TEARDOWN_PAYPAL_CLIENT: function handleBraintreeTeardownPayPalClient() {
    let closure_13 = null;
  },
  BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: function handleBraintreeCreateVenmoClientSuccess(venmoClient) {
    venmoClient = venmoClient.venmoClient;
  },
  BRAINTREE_TEARDOWN_VENMO_CLIENT: function handleBraintreeTeardownVenmoClient() {
    let closure_14 = null;
  }
};
tmp3 = new tmp3(importDefault(dependencyMap[9]), obj);
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("stores/billing/BraintreeStore.tsx");

export default tmp3;
