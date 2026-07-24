// Module ID: 8920
// Function ID: 70229
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 8921, 21, 566, 686, 2]

// Module 8920 (_isNativeReflectConstruct)
import DISCORD_EPOCH from "DISCORD_EPOCH";
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
let closure_8 = {};
let tmp2 = ((PersistedStore) => {
  class VerifiedKeyStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, VerifiedKeyStore);
      obj = outer1_6(VerifiedKeyStore);
      tmp2 = outer1_5;
      if (outer1_9()) {
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
      const outer1_8 = users;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getState",
    value() {
      return { users: outer1_8 };
    }
  };
  items[1] = obj;
  obj = {
    key: "getKeyTrustedAt",
    value(arg0, uint8Array) {
      let tmp;
      const obj = VerifiedKeyStore(outer1_2[5]);
      if (null != outer1_8[arg0]) {
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
      return outer1_1(outer1_2[6]).keys(outer1_8);
    }
  };
  items[5] = {
    key: "getUserVerifiedKeys",
    value(arg0) {
      return outer1_8[arg0];
    }
  };
  return callback(VerifiedKeyStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "VerifiedKeyStore";
tmp2.persistKey = "VerifiedKeyStore";
tmp2 = new tmp2(require("dispatcher"), {
  SECURE_FRAMES_VERIFIED_KEY_CREATE: function handleSecureFramesVerifiedKeyCreate(arg0) {
    let key;
    let userId;
    ({ userId, key } = arg0);
    let obj = dependencyMap[userId];
    if (null == obj) {
      obj = {};
    }
    dependencyMap[userId] = obj;
    const uint8Array = new Uint8Array(key);
    const obj2 = require(8921) /* set */;
    obj[require(8921) /* set */.serializeKey(uint8Array)] = Date.now();
  },
  SECURE_FRAMES_VERIFIED_KEY_DELETE: function handleSecureFramesVerifiedKeyDelete(serializedKey) {
    serializedKey = serializedKey.serializedKey;
    if (null == dependencyMap[serializedKey.userId]) {
      return false;
    } else {
      delete tmp4[tmp];
      const _Object = Object;
      let flag = false;
      if (0 === Object.keys(tmp5).length) {
        delete tmp2[tmp3];
        flag = true;
      }
      if (!serializedKey) {
        serializedKey = flag;
      }
      return serializedKey;
    }
  },
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function handleSecureFramesUserVerifiedKeysDelete(arg0) {
    if (null != dependencyMap[arg0.userId]) {
      delete tmp[tmp2];
    }
    return null != dependencyMap[arg0.userId];
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/rtc/VerifiedKeyStore.tsx");

export default tmp2;
