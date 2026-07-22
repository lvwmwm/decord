// Module ID: 13509
// Function ID: 102501
// Name: _isNativeReflectConstruct
// Dependencies: [0, 4294967295, 0, 0]

// Module 13509 (_isNativeReflectConstruct)
import __exportStarResult1 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = false;
let closure_8 = [];
let closure_9 = false;
let tmp2 = (Store) => {
  class WebAuthnStore {
    constructor() {
      self = this;
      tmp = __exportStarResult1(this, WebAuthnStore);
      obj = closure_5(WebAuthnStore);
      tmp2 = closure_4;
      if (closure_10()) {
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
  const arg1 = WebAuthnStore;
  callback2(WebAuthnStore, Store);
  let obj = {
    key: "hasFetchedCredentials",
    value() {
      return closure_7;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "hasCredentials",
    get() {
      return length.length > 0;
    }
  };
  items[1] = obj;
  obj = {
    key: "getCredentials",
    value() {
      return closure_8;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasPendingRegisterTrigger",
    value() {
      return closure_9;
    }
  };
  return callback(WebAuthnStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "WebAuthnStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  LOGOUT: function handleReset() {
    let closure_8 = [];
    let closure_7 = false;
    let closure_9 = false;
  },
  MFA_WEBAUTHN_CREDENTIALS_LOADED: function handleWebAuthnCredentialsLoaded(credentials) {
    credentials = credentials.credentials;
    let flag = false;
    if (closure_8 !== credentials) {
      closure_8 = credentials;
      flag = true;
    }
    if (!closure_7) {
      closure_7 = true;
      flag = true;
    }
    return flag;
  },
  AUTHENTICATOR_CREATE: function handleAuthenticatorCreate(credential) {
    credential = credential.credential;
    const arg1 = credential;
    if (credential.type === arg1(dependencyMap[5]).AuthenticatorType.WEBAUTHN) {
      const tmp2 = undefined === closure_8.find((id) => id.id === credential.id);
      if (tmp2) {
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(closure_8, 0);
        items[arraySpreadResult] = credential;
        const sum = arraySpreadResult + 1;
        closure_8 = items;
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
    const arg1 = credential;
    if (credential.type !== arg1(dependencyMap[5]).AuthenticatorType.WEBAUTHN) {
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
    const arg1 = credential;
    if (credential.type !== arg1(dependencyMap[5]).AuthenticatorType.WEBAUTHN) {
      const type = credential.type;
      return false;
    } else {
      closure_8 = closure_8.filter((id) => id.id !== credential.id);
    }
  },
  WEBAUTHN_TRIGGER_REGISTER: function handleTriggerRegister() {
    if (closure_9) {
      return false;
    } else {
      closure_9 = true;
    }
  },
  WEBAUTHN_CLEAR_REGISTER_TRIGGER: function handleClearRegisterTrigger() {
    if (closure_9) {
      closure_9 = false;
    } else {
      return false;
    }
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/webauthn/WebAuthnStore.tsx");

export default tmp2;
