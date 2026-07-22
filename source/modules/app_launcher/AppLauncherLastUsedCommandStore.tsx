// Module ID: 11230
// Function ID: 87433
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11230 (_isNativeReflectConstruct)
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
let closure_5 = 10 * importDefault(dependencyMap[5]).Millis.MINUTE;
let closure_6 = { "Bool(false)": "o", "Bool(false)": "o" };
let tmp2 = (PersistedStore) => {
  class AppLauncherLastUsedCommandStore {
    constructor() {
      self = this;
      tmp = AppLauncherLastUsedCommandStore(this, AppLauncherLastUsedCommandStore);
      obj = closure_3(AppLauncherLastUsedCommandStore);
      tmp2 = closure_2;
      if (closure_7()) {
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
  let closure_0 = AppLauncherLastUsedCommandStore;
  callback2(AppLauncherLastUsedCommandStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      if (null != arg0) {
        ({ lastUsedCommandId: closure_6.lastUsedCommandId, lastUsedTimeMs: closure_6.lastUsedTimeMs } = arg0);
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getState",
    value() {
      return closure_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "getLastUsedCommandId",
    value() {
      let lastUsedCommandId = null;
      if (null != closure_6.lastUsedTimeMs) {
        lastUsedCommandId = null;
        if (null != closure_6.lastUsedCommandId) {
          if (tmp > closure_6.lastUsedTimeMs + closure_5) {
            closure_6.lastUsedCommandId = null;
            closure_6.lastUsedTimeMs = null;
          }
          lastUsedCommandId = closure_6.lastUsedCommandId;
        }
      }
      return lastUsedCommandId;
    }
  };
  items[2] = obj;
  return callback(AppLauncherLastUsedCommandStore, items);
}(importDefault(dependencyMap[6]).PersistedStore);
tmp2.displayName = "AppLauncherLastUsedCommandStore";
tmp2.persistKey = "AppLauncherLastUsedCommandStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  APPLICATION_COMMAND_USED: function handleApplicationCommandUsed(command) {
    closure_6.lastUsedCommandId = command.command.id;
    closure_6.lastUsedTimeMs = Date.now();
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/app_launcher/AppLauncherLastUsedCommandStore.tsx");

export default tmp2;
