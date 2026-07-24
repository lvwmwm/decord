// Module ID: 8919
// Function ID: 70218
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 8919 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
const map = new Map();
let tmp3 = ((Store) => {
  class TransientKeyStore {
    constructor() {
      self = this;
      tmp = TransientKeyStore(this, TransientKeyStore);
      obj = outer1_3(TransientKeyStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(TransientKeyStore, Store);
  let obj = {
    key: "getUsers",
    value() {
      return outer1_5;
    }
  };
  const items = [obj, ];
  obj = {
    key: "isKeyVerified",
    value(arg0, arg1) {
      const value = outer1_5.get(arg0);
      if (null != arg1) {
        if (null != value) {
          if (value.length === arg1.length) {
            let num = 0;
            if (0 < arg1.length) {
              while (arg1[num] === value[num]) {
                num = num + 1;
              }
              return false;
            }
            return true;
          }
        }
      }
      return false;
    }
  };
  items[1] = obj;
  return callback(TransientKeyStore, items);
})(require("initialize").Store);
tmp3.displayName = "TransientKeyStore";
tmp3 = new tmp3(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map.clear();
  },
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: function handleSecureFramesTransientKeyCreate(key) {
    const uint8Array = new Uint8Array(key.key);
    const result = map.set(key.userId, uint8Array);
  },
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: function handleSecureFramesTransientKeyDelete(userId) {
    return map.delete(userId.userId);
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/rtc/TransientKeyStore.tsx");

export default tmp3;
