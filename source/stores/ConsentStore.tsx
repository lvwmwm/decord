// Module ID: 5592
// Function ID: 47498
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 5592 (_isNativeReflectConstruct)
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
let c5 = false;
let c6 = false;
let closure_7 = {};
let c8 = null;
let tmp2 = ((Store) => {
  class ConsentStore {
    constructor() {
      self = this;
      tmp = ConsentStore(this, ConsentStore);
      obj = outer1_3(ConsentStore);
      tmp2 = outer1_2;
      if (outer1_9()) {
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
  callback2(ConsentStore, Store);
  let obj = {
    key: "hasConsented",
    value(arg0) {
      let consented = null != outer1_7[arg0];
      if (consented) {
        consented = outer1_7[arg0].consented;
      }
      return consented;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "consents",
    get() {
      return outer1_7;
    }
  };
  items[1] = obj;
  obj = {
    key: "fetchedConsents",
    get() {
      return outer1_5;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "receivedConsentsInConnectionOpen",
    get() {
      return outer1_6;
    }
  };
  items[4] = {
    key: "getAuthenticationConsentRequired",
    value() {
      return outer1_8;
    }
  };
  return callback(ConsentStore, items);
})(require("initialize").Store);
tmp2.displayName = "ConsentStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(consents) {
    consents = consents.consents;
    if (null != consents) {
      const obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(consents);
      let c6 = true;
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(consents) {
    const obj = {};
    const merged = Object.assign(consents.consents);
    let c5 = true;
  },
  UPDATE_CONSENTS: function handleUpdateConsents(consents) {
    const obj = {};
    const merged = Object.assign(consents.consents);
    let c5 = true;
  },
  SET_CONSENT_REQUIRED: function handleConsentRequired(consentRequired) {
    consentRequired = consentRequired.consentRequired;
  },
  LOGOUT: function handleLogout() {
    let c8 = null;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/ConsentStore.tsx");

export default tmp2;
