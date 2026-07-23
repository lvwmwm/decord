// Module ID: 15625
// Function ID: 120518
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5066, 566, 686, 2]

// Module 15625 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
const map = new Map();
let set = new Set();
let tmp4 = ((Store) => {
  class AccountLinkStore {
    constructor() {
      self = this;
      tmp = AccountLinkStore(this, AccountLinkStore);
      obj = outer1_3(AccountLinkStore);
      tmp2 = outer1_2;
      if (outer1_8()) {
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
  callback2(AccountLinkStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_5);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getPendingAuthorizations",
    value() {
      return outer1_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "deletePendingAuthorization",
    value(arg0) {
      outer1_6.delete(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGloballyDisabledAuthorizationFlows",
    value() {
      return outer1_7;
    }
  };
  return callback(AccountLinkStore, items);
})(require("initialize").Store);
tmp4.displayName = "AccountLinkStore";
tmp4 = new tmp4(require("dispatcher"), {
  ACCOUNT_LINK_AUTHORIZATION_STARTED: function handleAuthorizationStarted(applicationId) {
    if (tmp) {
      const obj = { applicationId: applicationId.applicationId };
      const _Date = Date;
      obj.startedAt = Date.now();
      obj.accountLinkCallbacks = applicationId.accountLinkCallbacks;
      const result = map.set(applicationId.applicationId, obj);
    }
  },
  ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS: function handleSetGloballyDisabledFlows(flows) {
    const set = new Set(flows.flows);
  }
});
let result = set.fileFinishedImporting("modules/application_account_linking/AccountLinkStore.tsx");

export default tmp4;
