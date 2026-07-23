// Module ID: 3793
// Function ID: 29566
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 653, 477, 507, 566, 686, 2]

// Module 3793 (_isNativeReflectConstruct)
import closure_2 from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import ME from "ME";
import set from "set";
import set from "_possibleConstructorReturn";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ Endpoints: closure_7, PaymentGateways: closure_8, PaymentSourceTypes: closure_9 } = ME);
let c12 = null;
let c13 = null;
let c14 = null;
if (set.isDesktop()) {
  let _window = window;
  set = {
    getReturnUrlPrefix() {
        if (null == closure_10) {
          const _Error = Error;
          const error = new Error("popupBridgeState is unset");
          throw error;
        } else {
          const aPIBaseURL = require(507) /* _isNativeReflectConstruct */.getAPIBaseURL();
          return aPIBaseURL + closure_7.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(constants.BRAINTREE, closure_10);
        }
      },
    open(arg0) {
        let closure_11 = arg0;
        window.open(arg0);
        tmp3.emitChange();
      }
  };
  window.popupBridge = set;
}
let tmp3 = ((Store) => {
  class BraintreeStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, BraintreeStore);
      obj = outer1_5(BraintreeStore);
      tmp2 = outer1_4;
      if (outer1_16()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(BraintreeStore, Store);
  let obj = {
    key: "getClient",
    value() {
      return outer1_12;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getPayPalClient",
    value() {
      return outer1_13;
    }
  };
  items[1] = obj;
  obj = {
    key: "getVenmoClient",
    value() {
      return outer1_14;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLastURL",
    value() {
      return outer1_11;
    }
  };
  return callback(BraintreeStore, items);
})(require("initialize").Store);
tmp3.displayName = "BraintreeStore";
set = {
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
    let c13 = null;
  },
  BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: function handleBraintreeCreateVenmoClientSuccess(venmoClient) {
    venmoClient = venmoClient.venmoClient;
  },
  BRAINTREE_TEARDOWN_VENMO_CLIENT: function handleBraintreeTeardownVenmoClient() {
    let c14 = null;
  }
};
tmp3 = new tmp3(require("dispatcher"), set);
let closure_15 = tmp3;
let result = set.fileFinishedImporting("stores/billing/BraintreeStore.tsx");

export default tmp3;
