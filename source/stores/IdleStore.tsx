// Module ID: 4943
// Function ID: 42364
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 653, 4191, 477, 3803, 664, 686, 3741, 4944, 574, 566, 2]

// Module 4943 (_isNativeReflectConstruct)
import closure_3 from "ME";
import DesktopSources from "DesktopSources";
import initialize from "initialize";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { SpeakingFlags } from "DesktopSources";

let closure_10;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function isSystemIdle() {
  let tmp = c16;
  if (!c16) {
    tmp = c17;
  }
  if (!tmp) {
    const obj = require(477) /* set */;
    tmp = require(477) /* set */.isAndroid() && c18;
    const tmp4 = require(477) /* set */.isAndroid() && c18;
  }
  return tmp;
}
function checkIdleAFK() {
  if (Date.now() - closure_13 <= closure_9) {
    if (!isSystemIdle()) {
      if (c14) {
        let obj = importDefault(686);
        obj.dispatch({ type: "IDLE", idle: false });
      }
    }
    const AfkTimeout = require(3803) /* explicitContentFromProto */.AfkTimeout;
    const setting = AfkTimeout.getSetting();
    if (0 !== setting) {
      if (null == closure_12) {
        const _Date = Date;
        const _Math = Math;
        const diff = Date.now() - closure_13;
        if (diff <= Math.min(setting * importDefault(664).Millis.SECOND, closure_9)) {
          if (!isSystemIdle()) {
            if (c15) {
              importDefault(686).dispatch({ type: "AFK", afk: false });
              const obj4 = importDefault(686);
            }
          }
        }
      }
    }
    if (!c15) {
      importDefault(686).dispatch({ type: "AFK", afk: true });
      const obj5 = importDefault(686);
    }
  }
  if (!c14) {
    obj = { type: "IDLE", idle: true, idleSince: closure_13 };
    importDefault(686).dispatch(obj);
    const obj2 = importDefault(686);
  }
}
function handlePowerEvent(arg0) {
  if (arg0) {
    const _Date = Date;
    let closure_12 = Date.now();
  }
  checkIdleAFK();
}
function handleGenericAction(timestamp) {
  timestamp = timestamp.timestamp;
  let tmp = "OVERLAY_SET_NOT_IDLE" === timestamp.type;
  if (tmp) {
    tmp = null != timestamp;
  }
  let bypassIdleUpdate = tmp;
  if (tmp) {
    bypassIdleUpdate = timestamp <= timestamp;
  }
  if (!bypassIdleUpdate) {
    bypassIdleUpdate = timestamp.bypassIdleUpdate;
  }
  if (!bypassIdleUpdate) {
    let c12 = null;
    if (!tmp) {
      const _Date = Date;
      timestamp = Date.now();
    }
    checkIdleAFK();
  }
  return false;
}
({ IDLE_DURATION: closure_9, AppStates: closure_10 } = ME);
let closure_13 = Date.now();
let c14 = false;
let c15 = false;
let c16 = false;
let c17 = false;
let c18 = false;
if (require("set").isPlatformEmbedded) {
  let powerMonitor;
  if (null != require("set")) {
    powerMonitor = require("set").powerMonitor;
  }
  if (null != powerMonitor) {
    function checkNativeIdle() {
      function handleIdleTime(systemIdleTimeMs) {
        const diff = Date.now() - systemIdleTimeMs;
        let tmp2 = null == outer1_12;
        if (!tmp2) {
          tmp2 = diff > outer1_12;
        }
        if (tmp2) {
          const _Math = Math;
          outer1_13 = Math.max(diff, outer1_13);
          outer1_12 = null;
        }
        outer1_21();
        const timerId = setTimeout(outer1_24, 10 * outer1_1(outer1_2[10]).Millis.SECOND);
      }
      let getSystemIdleTimeMs;
      if (null != importDefault(3741)) {
        const powerMonitor = importDefault(3741).powerMonitor;
        if (null != powerMonitor) {
          getSystemIdleTimeMs = powerMonitor.getSystemIdleTimeMs;
        }
      }
      if (null != getSystemIdleTimeMs) {
        const powerMonitor2 = importDefault(3741).powerMonitor;
        const systemIdleTimeMs = powerMonitor2.getSystemIdleTimeMs();
        if (systemIdleTimeMs instanceof Promise) {
          systemIdleTimeMs.then(handleIdleTime);
        } else {
          handleIdleTime(systemIdleTimeMs);
        }
      }
    }
    checkNativeIdle();
    powerMonitor = require("set").powerMonitor;
    powerMonitor.on("resume", () => {
      let c16 = false;
      handlePowerEvent(false);
    });
    let powerMonitor2 = require("set").powerMonitor;
    powerMonitor2.on("suspend", () => {
      let c16 = true;
      handlePowerEvent(true);
      importDefault(4944).disconnect();
    });
    const powerMonitor3 = require("set").powerMonitor;
    powerMonitor3.on("lock-screen", () => {
      let c17 = true;
      handlePowerEvent(true);
    });
    const powerMonitor4 = require("set").powerMonitor;
    powerMonitor4.on("unlock-screen", () => {
      let c17 = false;
      handlePowerEvent(false);
    });
  }
  require("debounce")(() => {
    handleGenericAction({});
  }, 500);
  let tmp12 = ((Store) => {
    class IdleStore {
      constructor() {
        self = this;
        tmp = outer1_3(this, IdleStore);
        obj = outer1_6(IdleStore);
        tmp2 = outer1_5;
        if (outer1_19()) {
          tmp6 = globalThis;
          _Reflect = Reflect;
          tmp7 = outer1_6;
          tmp8 = arguments;
          constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
        } else {
          tmp3 = arguments;
          tmp4 = arguments;
          constructResult = obj(...arguments);
        }
        return tmp2(self, constructResult);
      }
    }
    callback2(IdleStore, Store);
    let obj = {
      key: "initialize",
      value() {
        this.waitFor(outer1_8);
      }
    };
    const items = [obj, , , , , ];
    obj = {
      key: "isIdle",
      value() {
        return outer1_14;
      }
    };
    items[1] = obj;
    obj = {
      key: "isAFK",
      value() {
        return outer1_15;
      }
    };
    items[2] = obj;
    items[3] = {
      key: "getIdleSince",
      value() {
        let tmp = null;
        if (outer1_14) {
          tmp = outer1_13;
        }
        return tmp;
      }
    };
    items[4] = {
      key: "getSystemSuspended",
      value() {
        return outer1_16;
      }
    };
    items[5] = {
      key: "getSystemLocked",
      value() {
        return outer1_17;
      }
    };
    return callback(IdleStore, items);
  })(require("initialize").Store);
  tmp12.displayName = "IdleStore";
  let obj = {
    IDLE: function handleIdle(idle) {
        idle = idle.idle;
      },
    AFK: function handleAFK(afk) {
        afk = afk.afk;
      },
    SPEAKING: function handleSpeaking(speakingFlags) {
        let tmp2 = speakingFlags.speakingFlags !== SpeakingFlags.NONE;
        if (tmp2) {
          tmp2 = tmp === id.getId();
        }
        if (tmp2) {
          handleGenericAction({});
        }
        return false;
      },
    APP_STATE_UPDATE: function handleAppStateUpdate(state) {
        let closure_18 = state.state === constants.BACKGROUND;
        let c12 = null;
        let closure_13 = Date.now();
        checkIdleAFK();
        return false;
      },
    OVERLAY_SET_NOT_IDLE: handleGenericAction,
    CHANNEL_SELECT: handleGenericAction,
    VOICE_CHANNEL_SELECT: handleGenericAction,
    WINDOW_FOCUS: handleGenericAction,
    OVERLAY_INITIALIZE: handleGenericAction,
    OVERLAY_SET_INPUT_LOCKED: handleGenericAction
  };
  const prototype = tmp12.prototype;
  tmp12 = new tmp12(require("dispatcher"), obj);
  let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/IdleStore.tsx");
  exports.default = tmp12;
}
let timerId = setInterval(checkIdleAFK, 30 * require("set").Millis.SECOND);
