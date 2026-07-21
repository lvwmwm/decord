// Module ID: 15500
// Function ID: 118302
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15500 (_isNativeReflectConstruct)
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
let closure_5 = importDefault(dependencyMap[5]);
const map = new Map();
const set = new Set();
let tmp4 = (Store) => {
  class AccountLinkStore {
    constructor() {
      self = this;
      tmp = AccountLinkStore(this, AccountLinkStore);
      obj = closure_3(AccountLinkStore);
      tmp2 = closure_2;
      if (closure_8()) {
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
  let closure_0 = AccountLinkStore;
  callback2(AccountLinkStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_5);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getPendingAuthorizations",
    value() {
      return closure_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "deletePendingAuthorization",
    value(arg0) {
      set.delete(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGloballyDisabledAuthorizationFlows",
    value() {
      return closure_7;
    }
  };
  return callback(AccountLinkStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp4.displayName = "AccountLinkStore";
tmp4 = new tmp4(importDefault(dependencyMap[7]), {
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
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/application_account_linking/AccountLinkStore.tsx");

export default tmp4;
