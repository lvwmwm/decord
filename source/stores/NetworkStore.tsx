// Module ID: 4222
// Function ID: 36852
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 653, 1430, 566, 686, 2]

// Module 4222 (_isNativeReflectConstruct)
import awaitOnline from "awaitOnline";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import ME from "ME";

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
  const serviceProvider = type.serviceProvider;
  tmp3.emitChange();
}
const NetworkConnectionTypes = ME.NetworkConnectionTypes;
const NetworkConnectionSpeeds = ME.NetworkConnectionSpeeds;
let UNKNOWN = NetworkConnectionTypes.UNKNOWN;
UNKNOWN = NetworkConnectionSpeeds.UNKNOWN;
let c11 = null;
let tmp3 = ((Store) => {
  class NetworkStoreClass {
    constructor() {
      self = this;
      tmp = outer1_2(this, NetworkStoreClass);
      obj = outer1_5(NetworkStoreClass);
      tmp2 = outer1_4;
      if (outer1_13()) {
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
  callback2(NetworkStoreClass, Store);
  let obj = {
    key: "initialize",
    value() {
      const networkInformation = NetworkStoreClass(outer1_1[6]).getNetworkInformation();
      networkInformation.then(outer1_14);
      const obj = NetworkStoreClass(outer1_1[6]);
      NetworkStoreClass(outer1_1[6]).addChangeCallback(outer1_14);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getType",
    value() {
      return outer1_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "getEffectiveConnectionSpeed",
    value() {
      return outer1_10;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getServiceProvider",
    value() {
      return outer1_11;
    }
  };
  return callback(NetworkStoreClass, items);
})(require("initialize").Store);
tmp3.displayName = "NetworkStore";
tmp3 = new tmp3(require("dispatcher"), {});
let closure_12 = tmp3;
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/NetworkStore.tsx");

export default tmp3;
