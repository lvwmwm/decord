// Module ID: 5621
// Function ID: 47983
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 22, 5622, 566, 686, 2]

// Module 5621 (_isNativeReflectConstruct)
import SubscriptionPlans from "SubscriptionPlans";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let c8 = null;
let c9 = false;
let c10 = null;
let tmp2 = ((Store) => {
  class GenericIAPStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, GenericIAPStore);
      obj = outer1_6(GenericIAPStore);
      tmp2 = outer1_5;
      if (outer1_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GenericIAPStore, Store);
  let obj = {
    key: "isGenericIapConnected",
    value() {
      return outer1_9;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "genericProductsLoaded",
    value() {
      let tmp = null != outer1_8;
      if (tmp) {
        tmp = outer1_1(outer1_2[5]).filter(outer1_8, (identifier) => {
          const GenericProductIds = GenericIAPStore(outer2_2[6]).GenericProductIds;
          return GenericProductIds.includes(identifier.identifier);
        }).length === GenericIAPStore(outer1_2[6]).GenericProductIds.length;
        const arr = outer1_1(outer1_2[5]);
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getProducts",
    value() {
      return outer1_8;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getStoreFront",
    value() {
      return outer1_10;
    }
  };
  return callback(GenericIAPStore, items);
})(require("initialize").Store);
tmp2.displayName = "GenericIAPStore";
tmp2 = new tmp2(require("dispatcher"), {
  IAP_LOAD_GENERIC_PRODUCTS: function initGenericProducts(arg0) {
    let c10;
    let c8;
    ({ products: c8, storeFront: c10 } = arg0);
  },
  GENERIC_IAP_INIT_CONNECTION: function genericIapInitConnection(connected) {
    connected = connected.connected;
  },
  GENERIC_IAP_INIT_CONNECTION_FAILED: function genericIapInitConnectionFailed() {
    let c9 = false;
  },
  GENERIC_IAP_END_CONNECTION: function genericIapEndConnection() {
    let c9 = false;
  },
  GENERIC_IAP_SET_STORE_FRONT: function setStoreFront(storeFront) {
    storeFront = storeFront.storeFront;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/billing/native/GenericIAPStore.tsx");

export default tmp2;
