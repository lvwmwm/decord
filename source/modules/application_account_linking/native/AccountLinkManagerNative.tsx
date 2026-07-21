// Module ID: 16457
// Function ID: 127170
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16457 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _superPropGet(arg0, arg1, arg2, arg3) {
  arg1 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const tmpResult = closure_6(closure_5(prototype), arg1, arg2);
  const dependencyMap = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(arg2, arg0);
    }
  }
  return fn;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let tmp2 = (AccountLinkManager) => {
  class AccountLinkManagerNative {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, AccountLinkManagerNative);
      items1 = [...items];
      obj = closure_5(AccountLinkManagerNative);
      tmp2 = closure_4;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.unsubscribeBrowser = null;
      tmp2Result.isBrowserOpen = false;
      return tmp2Result;
    }
  }
  const arg1 = AccountLinkManagerNative;
  callback2(AccountLinkManagerNative, AccountLinkManager);
  let obj = {
    key: "_initialize",
    value() {
      const AccountLinkManagerNative = this;
      callback4(AccountLinkManagerNative, "_initialize", this, 3)([]);
      this.unsubscribeBrowser = AccountLinkManagerNative(closure_1[6]).subscribeToIsInAppBrowserOpen((isBrowserOpen) => {
        self.isBrowserOpen = isBrowserOpen;
        if (arg1) {
          self.evaluatePending();
        }
      });
    }
  };
  const items = [obj, , ];
  obj = {
    key: "_terminate",
    value() {
      const self = this;
      callback4(AccountLinkManagerNative, "_terminate", this, 3)([]);
      const unsubscribeBrowser = this.unsubscribeBrowser;
      if (null != unsubscribeBrowser) {
        unsubscribeBrowser.call(self);
      }
      self.unsubscribeBrowser = null;
    }
  };
  items[1] = obj;
  obj = {
    key: "evaluatePending",
    value() {
      const self = this;
      if (!this.isBrowserOpen) {
        callback4(AccountLinkManagerNative, "evaluatePending", self, 3)([]);
      }
    }
  };
  items[2] = obj;
  return callback(AccountLinkManagerNative, items);
}(arg1(dependencyMap[7]).AccountLinkManager);
tmp2 = new tmp2();
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/application_account_linking/native/AccountLinkManagerNative.tsx");

export default tmp2;
