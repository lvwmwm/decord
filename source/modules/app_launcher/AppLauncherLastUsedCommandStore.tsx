// Module ID: 11269
// Function ID: 87723
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 664, 566, 686, 2]

// Module 11269 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
let closure_5 = 10 * require("set").Millis.MINUTE;
let closure_6 = { lastUsedCommandId: null, lastUsedTimeMs: null };
let tmp2 = ((PersistedStore) => {
  class AppLauncherLastUsedCommandStore {
    constructor() {
      self = this;
      tmp = AppLauncherLastUsedCommandStore(this, AppLauncherLastUsedCommandStore);
      obj = outer1_3(AppLauncherLastUsedCommandStore);
      tmp2 = outer1_2;
      if (outer1_7()) {
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
  callback2(AppLauncherLastUsedCommandStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      if (null != arg0) {
        ({ lastUsedCommandId: outer1_6.lastUsedCommandId, lastUsedTimeMs: outer1_6.lastUsedTimeMs } = arg0);
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getState",
    value() {
      return outer1_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "getLastUsedCommandId",
    value() {
      let lastUsedCommandId = null;
      if (null != outer1_6.lastUsedTimeMs) {
        lastUsedCommandId = null;
        if (null != outer1_6.lastUsedCommandId) {
          if (tmp > outer1_6.lastUsedTimeMs + outer1_5) {
            outer1_6.lastUsedCommandId = null;
            outer1_6.lastUsedTimeMs = null;
          }
          lastUsedCommandId = outer1_6.lastUsedCommandId;
        }
      }
      return lastUsedCommandId;
    }
  };
  items[2] = obj;
  return callback(AppLauncherLastUsedCommandStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "AppLauncherLastUsedCommandStore";
tmp2.persistKey = "AppLauncherLastUsedCommandStore";
tmp2 = new tmp2(require("dispatcher"), {
  APPLICATION_COMMAND_USED: function handleApplicationCommandUsed(command) {
    closure_6.lastUsedCommandId = command.command.id;
    closure_6.lastUsedTimeMs = Date.now();
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/app_launcher/AppLauncherLastUsedCommandStore.tsx");

export default tmp2;
