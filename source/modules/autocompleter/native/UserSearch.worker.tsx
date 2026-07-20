// Module ID: 7089
// Function ID: 57024
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7089 (_isNativeReflectConstruct)
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
const tmp = arg1(dependencyMap[5]);
const UserSearchWorkerManager = tmp.NativeModules.UserSearchWorkerManager;
let tmp2 = (NativeEventEmitter) => {
  class UserSearchWorker {
    constructor() {
      self = this;
      tmp = UserSearchWorker(this, UserSearchWorker);
      items = [];
      items[0] = closure_5;
      obj = closure_3(UserSearchWorker);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      UserSearchWorker = tmp2Result;
      set = new Set();
      tmp2Result.handlers = set;
      tmp2Result.subscription = null;
      tmp2Result.handleCallback = (arg0) => {
        const handlers = arg0.handlers;
        const item = handlers.forEach((arg0) => arg0({ data: arg0 }));
      };
      return tmp2Result;
    }
  }
  let closure_0 = UserSearchWorker;
  callback2(UserSearchWorker, NativeEventEmitter);
  let obj = {
    key: "postMessage",
    value(arg0) {
      if (arg0) {
        const _JSON = JSON;
        closure_5.onmessage(JSON.stringify(arg0));
      } else {
        const _Error = Error;
        const error = new Error("Invalid data");
        throw error;
      }
    }
  };
  const items = [obj, , , ];
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
      closure_5.terminate();
    }
  };
  return callback(UserSearchWorker, items);
}(tmp.NativeEventEmitter);
tmp2 = new tmp2();
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/autocompleter/native/UserSearch.worker.tsx");

export default tmp2;
