// Module ID: 16629
// Function ID: 129710
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 4096, 15671, 2]

// Module 16629 (_isNativeReflectConstruct)
import removeInAppBrowserCloseSubscription from "removeInAppBrowserCloseSubscription";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
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
function _superPropGet(arg0, arg1, arg2, arg3) {
  let closure_0 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const tmpResult = _get(_getPrototypeOf(prototype), arg1, arg2);
  const dependencyMap = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(closure_0, arg0);
    }
  }
  return fn;
}
let tmp2 = ((AccountLinkManager) => {
  class AccountLinkManagerNative {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_2(this, AccountLinkManagerNative);
      items1 = [...items];
      obj = outer1_5(AccountLinkManagerNative);
      tmp2 = outer1_4;
      if (outer1_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items1, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.unsubscribeBrowser = null;
      tmp2Result.isBrowserOpen = false;
      return tmp2Result;
    }
  }
  callback2(AccountLinkManagerNative, AccountLinkManager);
  let obj = {
    key: "_initialize",
    value() {
      const self = this;
      outer1_9(self, "_initialize", this, 3)([]);
      this.unsubscribeBrowser = AccountLinkManagerNative(outer1_1[6]).subscribeToIsInAppBrowserOpen((isBrowserOpen) => {
        self.isBrowserOpen = isBrowserOpen;
        if (arg1) {
          self.evaluatePending();
        }
      });
    }
  };
  let items = [obj, , ];
  obj = {
    key: "_terminate",
    value() {
      const self = this;
      outer1_9(AccountLinkManagerNative, "_terminate", this, 3)([]);
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
        outer1_9(AccountLinkManagerNative, "evaluatePending", self, 3)([]);
      }
    }
  };
  items[2] = obj;
  return callback(AccountLinkManagerNative, items);
})(require("_createForOfIteratorHelperLoose").AccountLinkManager);
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/application_account_linking/native/AccountLinkManagerNative.tsx");

export default tmp2;
