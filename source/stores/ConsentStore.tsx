// Module ID: 5590
// Function ID: 47459
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5590 (_isNativeReflectConstruct)
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
let closure_5 = false;
let closure_6 = false;
let closure_7 = {};
let closure_8 = null;
let tmp2 = (Store) => {
  class ConsentStore {
    constructor() {
      self = this;
      tmp = ConsentStore(this, ConsentStore);
      obj = closure_3(ConsentStore);
      tmp2 = closure_2;
      if (closure_9()) {
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
  let closure_0 = ConsentStore;
  callback2(ConsentStore, Store);
  let obj = {
    key: "hasConsented",
    value(arg0) {
      let consented = null != closure_7[arg0];
      if (consented) {
        consented = closure_7[arg0].consented;
      }
      return consented;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "consents",
    get() {
      return closure_7;
    }
  };
  items[1] = obj;
  obj = {
    key: "fetchedConsents",
    get() {
      return closure_5;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "receivedConsentsInConnectionOpen",
    get() {
      return closure_6;
    }
  };
  items[4] = {
    key: "getAuthenticationConsentRequired",
    value() {
      return closure_8;
    }
  };
  return callback(ConsentStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "ConsentStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  CONNECTION_OPEN: function handleConnectionOpen(consents) {
    consents = consents.consents;
    if (null != consents) {
      const obj = {};
      const merged = Object.assign(closure_7);
      const merged1 = Object.assign(consents);
      closure_7 = obj;
      let closure_6 = true;
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(consents) {
    const merged = Object.assign(consents.consents);
    let closure_7 = {};
    let closure_5 = true;
  },
  UPDATE_CONSENTS: function handleUpdateConsents(consents) {
    const merged = Object.assign(consents.consents);
    let closure_7 = {};
    let closure_5 = true;
  },
  SET_CONSENT_REQUIRED: function handleConsentRequired(consentRequired) {
    consentRequired = consentRequired.consentRequired;
  },
  LOGOUT: function handleLogout() {
    let closure_8 = null;
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("stores/ConsentStore.tsx");

export default tmp2;
