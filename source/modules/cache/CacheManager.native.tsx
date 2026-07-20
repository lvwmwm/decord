// Module ID: 15863
// Function ID: 121488
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15863 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let importDefaultResult = importDefault(dependencyMap[7]);
importDefaultResult = new importDefaultResult("CacheStore");
let closure_11 = 15 * importDefault(dependencyMap[8]).Millis.MINUTE;
let tmp4 = (arg0) => {
  class CacheManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, CacheManager);
      items1 = [...items];
      obj = closure_6(CacheManager);
      tmp2 = closure_5;
      if (closure_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      CacheManager = tmp2Result;
      tmp2Result.actions = {
        POST_CONNECTION_OPEN: tmp2Result.handleConnectionOpen,
        CONNECTION_CLOSED: tmp2Result.handleConnectionClose,
        APP_STATE_UPDATE(arg0) {
              return tmp2Result.handleAppStateUpdate(arg0);
            },
        WINDOW_FOCUS(arg0) {
              return tmp2Result.handleWindowFocus(arg0);
            }
      };
      return tmp2Result;
    }
  }
  const arg1 = CacheManager;
  callback2(CacheManager, arg0);
  let obj = {
    key: "handleConnectionOpen",
    value() {
      const result = callback(closure_2[9]).doesDatabaseVersionMatchJsConstants();
      result.then((arg0) => {
        if (!arg0) {
          callback(closure_2[10]).writeCaches();
          const obj = callback(closure_2[10]);
        }
      });
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "handleConnectionClose",
    value() {
      return false;
    }
  };
  items[1] = obj;
  obj = {
    key: "handleAppStateUpdate",
    value(state) {
      const obj = CacheManager(closure_2[11]);
      const AppStates = CacheManager(closure_2[12]).AppStates;
      let isConnectedResult = CacheManager(closure_2[11]).isAndroid() ? AppStates.BACKGROUND : AppStates.INACTIVE === state.state;
      if (isConnectedResult) {
        isConnectedResult = connected.isConnected();
      }
      if (isConnectedResult) {
        CacheManager(closure_2[10]).writeCaches();
        const obj2 = CacheManager(closure_2[10]);
      }
      return false;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleWindowFocus",
    value(focused) {
      if (!focused.focused) {
        const _Date = Date;
        if (Date.now() - lastWriteTime.lastWriteTime > closure_11) {
          closure_10.verbose("Writing cache from window unfocus");
          CacheManager(closure_2[10]).writeCaches();
          const obj = CacheManager(closure_2[10]);
        } else {
          closure_10.verbose("Not writing cache from window unfocus");
        }
      }
      return false;
    }
  };
  return callback(CacheManager, items);
}(importDefault(dependencyMap[13]));
tmp4 = new tmp4();
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/cache/CacheManager.native.tsx");

export default tmp4;
