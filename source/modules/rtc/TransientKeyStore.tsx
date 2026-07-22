// Module ID: 8873
// Function ID: 69962
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8873 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const map = new Map();
let tmp3 = (Store) => {
  class TransientKeyStore {
    constructor() {
      self = this;
      tmp = TransientKeyStore(this, TransientKeyStore);
      obj = closure_3(TransientKeyStore);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = TransientKeyStore;
  callback2(TransientKeyStore, Store);
  let obj = {
    key: "getUsers",
    value() {
      return closure_5;
    }
  };
  const items = [obj, ];
  obj = {
    key: "isKeyVerified",
    value(arg0, arg1) {
      const value = closure_5.get(arg0);
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
}(importDefault(dependencyMap[5]).Store);
tmp3.displayName = "TransientKeyStore";
tmp3 = new tmp3(importDefault(dependencyMap[6]), {
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
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/rtc/TransientKeyStore.tsx");

export default tmp3;
