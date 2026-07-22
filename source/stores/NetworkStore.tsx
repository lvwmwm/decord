// Module ID: 4218
// Function ID: 36820
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4218 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleConnectionInfoChange(type) {
  if (null != type.type) {
    let UNKNOWN = type.type;
  } else {
    UNKNOWN = NetworkConnectionTypes.UNKNOWN;
  }
  let UNKNOWN2 = type.effectiveSpeed;
  if (null == UNKNOWN2) {
    UNKNOWN2 = NetworkConnectionSpeeds.UNKNOWN;
  }
  UNKNOWN = UNKNOWN2;
  const serviceProvider = type.serviceProvider;
  tmp3.emitChange();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[5]);
const NetworkConnectionTypes = tmp2.NetworkConnectionTypes;
const NetworkConnectionSpeeds = tmp2.NetworkConnectionSpeeds;
let UNKNOWN = NetworkConnectionTypes.UNKNOWN;
UNKNOWN = NetworkConnectionSpeeds.UNKNOWN;
let closure_11 = null;
let tmp3 = (Store) => {
  class NetworkStoreClass {
    constructor() {
      self = this;
      tmp = closure_2(this, NetworkStoreClass);
      obj = closure_5(NetworkStoreClass);
      tmp2 = closure_4;
      if (closure_13()) {
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
  const importDefault = NetworkStoreClass;
  callback2(NetworkStoreClass, Store);
  let obj = {
    key: "initialize",
    value() {
      const networkInformation = NetworkStoreClass(closure_1[6]).getNetworkInformation();
      networkInformation.then(closure_14);
      const obj = NetworkStoreClass(closure_1[6]);
      NetworkStoreClass(closure_1[6]).addChangeCallback(closure_14);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getType",
    value() {
      return closure_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "getEffectiveConnectionSpeed",
    value() {
      return closure_10;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getServiceProvider",
    value() {
      return closure_11;
    }
  };
  return callback(NetworkStoreClass, items);
}(importDefault(dependencyMap[7]).Store);
tmp3.displayName = "NetworkStore";
tmp3 = new tmp3(importDefault(dependencyMap[8]), {});
const result = arg1(dependencyMap[9]).fileFinishedImporting("stores/NetworkStore.tsx");

export default tmp3;
