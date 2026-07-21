// Module ID: 15964
// Function ID: 122437
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15964 (_isNativeReflectConstruct)
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
({ AppStates: closure_9, AnalyticEvents: closure_10 } = arg1(dependencyMap[6]));
let importDefaultResult = importDefault(dependencyMap[7]);
importDefaultResult = new importDefaultResult("JSWatchdogManager");
const HALF_SECOND = importDefault(dependencyMap[8]).Millis.HALF_SECOND;
let tmp5 = (arg0) => {
  class JSWatchdogManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, JSWatchdogManager);
      items1 = [...items];
      obj = closure_7(JSWatchdogManager);
      tmp2 = closure_6;
      if (closure_13()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      closure_0 = tmp2Result;
      tmp2Result._enabled = true;
      tmp2Result._timeoutId = null;
      tmp2Result._analyticsReportsRemaining = 3;
      tmp2Result._cachedSession = null;
      tmp2Result._lastSessionId = null;
      tmp2Result._pingCompleted = true;
      tmp2Result.actions = {
        APP_STATE_UPDATE(arg0) {
              tmp2Result.handleAppStateUpdate(arg0);
            },
        CONNECTION_OPEN_SUPPLEMENTAL() {
              const result = tmp2Result.handleConnectionOpenSupplemental();
            }
      };
      return tmp2Result;
    }
  }
  const callback = JSWatchdogManager;
  callback3(JSWatchdogManager, arg0);
  let obj = {
    key: "handleAppStateUpdate",
    value(state) {
      const self = this;
      if (state.state === constants.ACTIVE) {
        self.startWatchdog();
      } else {
        self.stopWatchdog();
      }
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "handleConnectionOpenSupplemental",
    value() {
      let closure_0 = this;
      const timerId = setTimeout(() => {
        self.startWatchdog();
      }, 0);
    }
  };
  items[1] = obj;
  obj = { key: "ping" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_2 = callback(tmp);
  obj.value = function ping() {
    return callback3(...arguments);
  };
  items[2] = obj;
  const obj1 = { key: "startWatchdog" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_1 = callback("startWatchdog");
  obj1.value = function startWatchdog() {
    return callback2(...arguments);
  };
  items[3] = obj1;
  items[4] = {
    key: "stopWatchdog",
    value() {
      closure_11.info("stopWatchdog()");
      this._enabled = false;
      clearTimeout(this._timeoutId);
      this._timeoutId = null;
    }
  };
  items[5] = {
    key: "reportStall",
    value(stallTime) {
      let obj = callback2(closure_2[11]);
      obj = {};
      const merged = Object.assign(callback(closure_2[12]).getDeviceMetadata());
      obj["version"] = 1;
      obj["stall_time"] = stallTime.stallTime;
      obj["is_previous"] = arg2;
      obj["reports_remaining"] = arg3;
      let sessionId = null;
      if (stallTime.sessionId !== arg1) {
        sessionId = stallTime.sessionId;
      }
      obj["stall_session_id"] = sessionId;
      obj["trace"] = null;
      obj.track(constants2.APP_JS_STALLED, obj);
    }
  };
  const obj4 = { key: "getCurrentSessionId" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback("getCurrentSessionId");
  obj4.value = function getCurrentSessionId() {
    return callback(...arguments);
  };
  items[6] = obj4;
  return callback2(JSWatchdogManager, items);
}(importDefault(dependencyMap[15]));
tmp5 = new tmp5();
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/js_watchdog/native/JSWatchdogManager.android.tsx");

export default tmp5;
