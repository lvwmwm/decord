// Module ID: 5618
// Function ID: 47959
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5618 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = null;
let closure_9 = false;
let closure_10 = null;
let tmp2 = (Store) => {
  class GenericIAPStore {
    constructor() {
      self = this;
      tmp = closure_3(this, GenericIAPStore);
      obj = closure_6(GenericIAPStore);
      tmp2 = closure_5;
      if (closure_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GenericIAPStore;
  callback2(GenericIAPStore, Store);
  let obj = {
    key: "isGenericIapConnected",
    value() {
      return closure_9;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "genericProductsLoaded",
    value() {
      let tmp = null != closure_8;
      if (tmp) {
        tmp = callback(closure_2[5]).filter(closure_8, (identifier) => {
          const GenericProductIds = callback(closure_2[6]).GenericProductIds;
          return GenericProductIds.includes(identifier.identifier);
        }).length === GenericIAPStore(closure_2[6]).GenericProductIds.length;
        const arr = callback(closure_2[5]);
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getProducts",
    value() {
      return closure_8;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getStoreFront",
    value() {
      return closure_10;
    }
  };
  return callback(GenericIAPStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp2.displayName = "GenericIAPStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  IAP_LOAD_GENERIC_PRODUCTS: function initGenericProducts(arg0) {
    ({ products: closure_8, storeFront: closure_10 } = arg0);
  },
  GENERIC_IAP_INIT_CONNECTION: function genericIapInitConnection(connected) {
    connected = connected.connected;
  },
  GENERIC_IAP_INIT_CONNECTION_FAILED: function genericIapInitConnectionFailed() {
    let closure_9 = false;
  },
  GENERIC_IAP_END_CONNECTION: function genericIapEndConnection() {
    let closure_9 = false;
  },
  GENERIC_IAP_SET_STORE_FRONT: function setStoreFront(storeFront) {
    storeFront = storeFront.storeFront;
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/billing/native/GenericIAPStore.tsx");

export default tmp2;
