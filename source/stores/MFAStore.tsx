// Module ID: 12671
// Function ID: 98662
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 684, 22, 566, 686, 2]

// Module 12671 (_isNativeReflectConstruct)
import apply from "apply";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let c8 = false;
let closure_9 = [];
let c10 = "";
let c11 = false;
let closure_12 = { viewNonce: "", regenerateNonce: "" };
let tmp2 = ((Store) => {
  class MFAStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, MFAStore);
      obj = outer1_6(MFAStore);
      tmp2 = outer1_5;
      if (outer1_13()) {
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
  callback2(MFAStore, Store);
  let obj = {
    key: "getVerificationKey",
    value() {
      return outer1_10;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getBackupCodes",
    value() {
      return outer1_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "togglingSMS",
    get() {
      return outer1_8;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getNonces",
    value() {
      return outer1_12;
    }
  };
  items[4] = {
    key: "hasSeenBackupPrompt",
    get() {
      return outer1_11;
    }
  };
  return callback(MFAStore, items);
})(require("initialize").Store);
tmp2.displayName = "MFAStore";
tmp2 = new tmp2(require("dispatcher"), {
  MFA_ENABLE_SUCCESS: function handleEnableSuccess(token) {
    token = token.token;
    if (undefined !== token) {
      importAll(684).setToken(token);
      const obj = importAll(684);
    }
    const codes = token.codes;
  },
  MFA_DISABLE_SUCCESS: function handleDisableSuccess(token) {
    importAll(684).setToken(token.token);
  },
  MFA_SMS_TOGGLE: function handleSMSToggle() {
    let c8 = true;
  },
  MFA_SMS_TOGGLE_COMPLETE: function handleSMSToggleComplete() {
    let c8 = false;
  },
  MFA_CLEAR_BACKUP_CODES: function handleClearBackupCodes() {
    let closure_9 = [];
  },
  MFA_VIEW_BACKUP_CODES: function handleGetBackupCodes(arg0) {
    let codes;
    let key;
    ({ codes, key } = arg0);
    let closure_9 = importDefault(22).sortBy(codes, "code");
  },
  MFA_SEND_VERIFICATION_KEY: function handleSendVerificationEmail(nonces) {
    nonces = nonces.nonces;
  },
  MFA_SEEN_BACKUP_CODE_PROMPT: function handleSeenBackupPrompt() {
    let c11 = true;
  },
  CONNECTION_OPEN() {

  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/MFAStore.tsx");

export default tmp2;
