// Module ID: 13674
// Function ID: 104981
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1881, 566, 686, 2]

// Module 13674 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
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
let c7 = false;
let closure_8 = [];
let c9 = false;
let tmp2 = ((Store) => {
  class WebAuthnStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, WebAuthnStore);
      obj = outer1_5(WebAuthnStore);
      tmp2 = outer1_4;
      if (outer1_10()) {
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
  callback2(WebAuthnStore, Store);
  let obj = {
    key: "hasFetchedCredentials",
    value() {
      return outer1_7;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "hasCredentials",
    get() {
      return outer1_8.length > 0;
    }
  };
  items[1] = obj;
  obj = {
    key: "getCredentials",
    value() {
      return outer1_8;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasPendingRegisterTrigger",
    value() {
      return outer1_9;
    }
  };
  return callback(WebAuthnStore, items);
})(require("initialize").Store);
tmp2.displayName = "WebAuthnStore";
tmp2 = new tmp2(require("dispatcher"), {
  LOGOUT: function handleReset() {
    let closure_8 = [];
    let c7 = false;
    let c9 = false;
  },
  MFA_WEBAUTHN_CREDENTIALS_LOADED: function handleWebAuthnCredentialsLoaded(credentials) {
    credentials = credentials.credentials;
    let flag = false;
    if (credentials !== credentials) {
      flag = true;
    }
    if (!c7) {
      c7 = true;
      flag = true;
    }
    return flag;
  },
  AUTHENTICATOR_CREATE: function handleAuthenticatorCreate(credential) {
    credential = credential.credential;
    if (credential.type === credential(1881).AuthenticatorType.WEBAUTHN) {
      const tmp2 = undefined === items.find((id) => id.id === credential.id);
      if (tmp2) {
        items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
        items[arraySpreadResult] = credential;
        const sum = arraySpreadResult + 1;
      }
      let flag = tmp2;
    } else {
      const type = credential.type;
      flag = false;
    }
    return flag;
  },
  AUTHENTICATOR_UPDATE: function handleAuthenticatorUpdate(credential) {
    credential = credential.credential;
    if (credential.type !== credential(1881).AuthenticatorType.WEBAUTHN) {
      const type = credential.type;
      return false;
    } else {
      closure_8 = closure_8.map((id) => {
        let tmp = id;
        if (id.id === credential.id) {
          tmp = credential;
        }
        return tmp;
      });
    }
  },
  AUTHENTICATOR_DELETE: function handleAuthenticatorDelete(credential) {
    credential = credential.credential;
    if (credential.type !== credential(1881).AuthenticatorType.WEBAUTHN) {
      const type = credential.type;
      return false;
    } else {
      closure_8 = closure_8.filter((id) => id.id !== credential.id);
    }
  },
  WEBAUTHN_TRIGGER_REGISTER: function handleTriggerRegister() {
    if (c9) {
      return false;
    } else {
      c9 = true;
    }
  },
  WEBAUTHN_CLEAR_REGISTER_TRIGGER: function handleClearRegisterTrigger() {
    if (c9) {
      c9 = false;
    } else {
      return false;
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/webauthn/WebAuthnStore.tsx");

export default tmp2;
