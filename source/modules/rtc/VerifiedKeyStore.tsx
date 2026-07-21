// Module ID: 8873
// Function ID: 69949
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = {};
let tmp2 = (PersistedStore) => {
  class VerifiedKeyStore {
    constructor() {
      self = this;
      tmp = closure_3(this, VerifiedKeyStore);
      obj = closure_6(VerifiedKeyStore);
      tmp2 = closure_5;
      if (closure_9()) {
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
  const arg1 = VerifiedKeyStore;
  callback2(VerifiedKeyStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(users) {
      users = undefined;
      if (null != users) {
        users = users.users;
      }
      if (null == users) {
        users = {};
      }
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getState",
    value() {
      return { users: closure_8 };
    }
  };
  items[1] = obj;
  obj = {
    key: "getKeyTrustedAt",
    value(arg0, uint8Array) {
      let tmp;
      const obj = VerifiedKeyStore(closure_2[5]);
      if (null != closure_8[arg0]) {
        tmp = tmp2[obj.serializeKey(obj, uint8Array)];
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isKeyVerified",
    value(arg0, arg1) {
      return null != this.getKeyTrustedAt(arg0, arg1);
    }
  };
  items[4] = {
    key: "getUserIds",
    value() {
      return callback(closure_2[6]).keys(closure_8);
    }
  };
  items[5] = {
    key: "getUserVerifiedKeys",
    value(arg0) {
      return closure_8[arg0];
    }
  };
  return callback(VerifiedKeyStore, items);
}(importDefault(dependencyMap[7]).PersistedStore);
tmp2.displayName = "VerifiedKeyStore";
tmp2.persistKey = "VerifiedKeyStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  SECURE_FRAMES_VERIFIED_KEY_CREATE: function handleSecureFramesVerifiedKeyCreate(arg0) {
    let key;
    let userId;
    ({ userId, key } = arg0);
    let obj = closure_8[userId];
    if (null == obj) {
      obj = {};
    }
    closure_8[userId] = obj;
    const uint8Array = new Uint8Array(key);
    const obj2 = arg1(dependencyMap[5]);
    obj[arg1(dependencyMap[5]).serializeKey(uint8Array)] = Date.now();
  },
  SECURE_FRAMES_VERIFIED_KEY_DELETE: function handleSecureFramesVerifiedKeyDelete(serializedKey) {
    serializedKey = serializedKey.serializedKey;
    if (null == closure_8[serializedKey.userId]) {
      return false;
    } else {
      delete r5[r0];
      const _Object = Object;
      let flag = false;
      if (0 === Object.keys(tmp).length) {
        delete r2[r3];
        flag = true;
      }
      if (!serializedKey) {
        serializedKey = flag;
      }
      return serializedKey;
    }
  },
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function handleSecureFramesUserVerifiedKeysDelete(arg0) {
    if (null != closure_8[arg0.userId]) {
      delete r1[r2];
    }
    return null != closure_8[arg0.userId];
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/rtc/VerifiedKeyStore.tsx");

export default tmp2;
