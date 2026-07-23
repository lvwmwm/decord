// Module ID: 7099
// Function ID: 57092
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 27, 2]

// Module 7099 (_isNativeReflectConstruct)
import set from "set";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import get_ActivityIndicator from "get ActivityIndicator";

function _isNativeReflectConstruct() {
  let set = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return set;
  }
  const result = _isNativeReflectConstruct();
}
const UserSearchWorkerManager = get_ActivityIndicator.NativeModules.UserSearchWorkerManager;
let tmp2 = ((NativeEventEmitter) => {
  class UserSearchWorker {
    constructor() {
      self = this;
      tmp = UserSearchWorker(this, apply);
      items = [];
      items[0] = outer1_5;
      obj = outer1_3(apply);
      tmp2 = outer1_2;
      if (outer1_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, items, outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      set = new Set();
      tmp2Result.handlers = set;
      tmp2Result.subscription = null;
      tmp2Result.handleCallback = (arg0) => {
        const handlers = arg0.handlers;
        const item = handlers.forEach((arg0) => arg0({ data: set }));
      };
      return tmp2Result;
    }
  }
  callback2(UserSearchWorker, NativeEventEmitter);
  let obj = {
    key: "postMessage",
    value(arg0) {
      if (arg0) {
        const _JSON = JSON;
        outer1_5.onmessage(JSON.stringify(arg0));
      } else {
        const _Error = Error;
        const error = new Error("Invalid data");
        throw error;
      }
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "addEventListener",
    value(arg0, arg1) {
      const self = this;
      if ("message" === arg0) {
        if (null == self.subscription) {
          self.subscription = self.addListener("ReturnResults", self.handleCallback);
        }
        const handlers = self.handlers;
        handlers.add(arg1);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "removeEventListener",
    value(arg0, arg1) {
      const self = this;
      if ("message" === arg0) {
        const handlers = self.handlers;
        handlers.delete(arg1);
        if (0 === self.handlers.size) {
          const subscription = self.subscription;
          if (null != subscription) {
            subscription.remove();
          }
          self.subscription = null;
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "terminate",
    value() {
      outer1_5.terminate();
    }
  };
  return callback(UserSearchWorker, items);
})(get_ActivityIndicator.NativeEventEmitter);
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/autocompleter/native/UserSearch.worker.tsx");

export default tmp2;
