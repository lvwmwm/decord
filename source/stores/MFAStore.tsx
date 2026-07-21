// Module ID: 12550
// Function ID: 96456
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12550 (_isNativeReflectConstruct)
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
let closure_8 = false;
let closure_9 = [];
let closure_10 = "";
let closure_11 = false;
let closure_12 = {};
let tmp2 = (Store) => {
  class MFAStore {
    constructor() {
      self = this;
      tmp = closure_3(this, MFAStore);
      obj = closure_6(MFAStore);
      tmp2 = closure_5;
      if (closure_13()) {
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
  const importDefault = MFAStore;
  callback2(MFAStore, Store);
  let obj = {
    key: "getVerificationKey",
    value() {
      return closure_10;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getBackupCodes",
    value() {
      return closure_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "togglingSMS",
    get() {
      return closure_8;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getNonces",
    value() {
      return closure_12;
    }
  };
  items[4] = {
    key: "hasSeenBackupPrompt",
    get() {
      return closure_11;
    }
  };
  return callback(MFAStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp2.displayName = "MFAStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  MFA_ENABLE_SUCCESS: function handleEnableSuccess(token) {
    token = token.token;
    if (undefined !== token) {
      importAll(dependencyMap[5]).setToken(token);
      const obj = importAll(dependencyMap[5]);
    }
    const codes = token.codes;
  },
  MFA_DISABLE_SUCCESS: function handleDisableSuccess(token) {
    importAll(dependencyMap[5]).setToken(token.token);
  },
  MFA_SMS_TOGGLE: function handleSMSToggle() {
    let closure_8 = true;
  },
  MFA_SMS_TOGGLE_COMPLETE: function handleSMSToggleComplete() {
    let closure_8 = false;
  },
  MFA_CLEAR_BACKUP_CODES: function handleClearBackupCodes() {
    let closure_9 = [];
  },
  MFA_VIEW_BACKUP_CODES: function handleGetBackupCodes(arg0) {
    let codes;
    let key;
    ({ codes, key } = arg0);
    let closure_9 = importDefault(dependencyMap[6]).sortBy(codes, "code");
    let closure_10 = key;
  },
  MFA_SEND_VERIFICATION_KEY: function handleSendVerificationEmail(nonces) {
    nonces = nonces.nonces;
  },
  MFA_SEEN_BACKUP_CODE_PROMPT: function handleSeenBackupPrompt() {
    let closure_11 = true;
  },
  CONNECTION_OPEN() {

  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("stores/MFAStore.tsx");

export default tmp2;
