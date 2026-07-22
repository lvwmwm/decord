// Module ID: 4940
// Function ID: 42346
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4940 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function isSystemIdle() {
  let tmp = closure_16;
  if (!closure_16) {
    tmp = closure_17;
  }
  if (!tmp) {
    const obj = arg1(dependencyMap[8]);
    tmp = arg1(dependencyMap[8]).isAndroid() && closure_18;
    const tmp4 = arg1(dependencyMap[8]).isAndroid() && closure_18;
  }
  return tmp;
}
function checkIdleAFK() {
  if (Date.now() - closure_13 <= closure_9) {
    if (!isSystemIdle()) {
      if (closure_14) {
        let obj = importDefault(dependencyMap[11]);
        obj.dispatch({ ao: true, ip: null });
      }
    }
    const AfkTimeout = arg1(dependencyMap[9]).AfkTimeout;
    const setting = AfkTimeout.getSetting();
    if (0 !== setting) {
      if (null == closure_12) {
        const _Date = Date;
        const _Math = Math;
        const diff = Date.now() - closure_13;
        if (diff <= Math.min(setting * importDefault(dependencyMap[10]).Millis.SECOND, closure_9)) {
          if (!isSystemIdle()) {
            if (closure_15) {
              importDefault(dependencyMap[11]).dispatch({ <string:1741837664>: 112, <string:1741711309>: "center" });
              const obj4 = importDefault(dependencyMap[11]);
            }
          }
        }
      }
    }
    if (!closure_15) {
      importDefault(dependencyMap[11]).dispatch({ <string:1741837664>: "3cb840d03313467838d658bbec801fcd", <string:1741711309>: "icon7" });
      const obj5 = importDefault(dependencyMap[11]);
    }
  }
  if (!closure_14) {
    obj = { ao: "png", ip: "axo-id", idleSince: closure_13 };
    importDefault(dependencyMap[11]).dispatch(obj);
    const obj2 = importDefault(dependencyMap[11]);
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
    bypassIdleUpdate = timestamp <= closure_13;
  }
  if (!bypassIdleUpdate) {
    bypassIdleUpdate = timestamp.bypassIdleUpdate;
  }
  if (!bypassIdleUpdate) {
    let closure_12 = null;
    if (!tmp) {
      const _Date = Date;
      timestamp = Date.now();
    }
    closure_13 = timestamp;
    checkIdleAFK();
  }
  return false;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ IDLE_DURATION: closure_9, AppStates: closure_10 } = arg1(dependencyMap[6]));
const SpeakingFlags = arg1(dependencyMap[7]).SpeakingFlags;
let closure_13 = Date.now();
let closure_14 = false;
let closure_15 = false;
let closure_16 = false;
let closure_17 = false;
let closure_18 = false;
if (arg1(dependencyMap[8]).isPlatformEmbedded) {
  let powerMonitor;
  if (null != importDefault(dependencyMap[12])) {
    powerMonitor = importDefault(dependencyMap[12]).powerMonitor;
  }
  if (null != powerMonitor) {
    function checkNativeIdle() {
      function handleIdleTime(systemIdleTimeMs) {
        const diff = Date.now() - systemIdleTimeMs;
        let tmp2 = null == closure_12;
        if (!tmp2) {
          tmp2 = diff > closure_12;
        }
        if (tmp2) {
          const _Math = Math;
          closure_13 = Math.max(diff, closure_13);
          closure_12 = null;
        }
        callback2();
        const timerId = setTimeout(closure_24, 10 * callback(closure_2[10]).Millis.SECOND);
      }
      let getSystemIdleTimeMs;
      if (null != importDefault(dependencyMap[12])) {
        const powerMonitor = importDefault(dependencyMap[12]).powerMonitor;
        if (null != powerMonitor) {
          getSystemIdleTimeMs = powerMonitor.getSystemIdleTimeMs;
        }
      }
      if (null != getSystemIdleTimeMs) {
        const powerMonitor2 = importDefault(dependencyMap[12]).powerMonitor;
        const systemIdleTimeMs = powerMonitor2.getSystemIdleTimeMs();
        if (systemIdleTimeMs instanceof Promise) {
          systemIdleTimeMs.then(handleIdleTime);
        } else {
          handleIdleTime(systemIdleTimeMs);
        }
      }
    }
    checkNativeIdle();
    powerMonitor = importDefault(dependencyMap[12]).powerMonitor;
    powerMonitor.on("resume", () => {
      let closure_16 = false;
      handlePowerEvent(false);
    });
    const powerMonitor2 = importDefault(dependencyMap[12]).powerMonitor;
    powerMonitor2.on("suspend", () => {
      let closure_16 = true;
      handlePowerEvent(true);
      importDefault(dependencyMap[13]).disconnect();
    });
    const powerMonitor3 = importDefault(dependencyMap[12]).powerMonitor;
    powerMonitor3.on("lock-screen", () => {
      let closure_17 = true;
      handlePowerEvent(true);
    });
    const powerMonitor4 = importDefault(dependencyMap[12]).powerMonitor;
    powerMonitor4.on("unlock-screen", () => {
      let closure_17 = false;
      handlePowerEvent(false);
    });
  }
  importDefault(dependencyMap[14])(() => {
    handleGenericAction({});
  }, 500);
  let tmp12 = (Store) => {
    class IdleStore {
      constructor() {
        self = this;
        tmp = closure_3(this, IdleStore);
        obj = closure_6(IdleStore);
        tmp2 = closure_5;
        if (closure_19()) {
          tmp6 = globalThis;
          _Reflect = Reflect;
          tmp7 = closure_6;
          tmp8 = arguments;
          constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
        } else {
          tmp3 = arguments;
          tmp4 = arguments;
          constructResult = obj(...arguments);
        }
        return tmp2(self, constructResult);
      }
    }
    const arg1 = IdleStore;
    callback2(IdleStore, Store);
    let obj = {
      key: "initialize",
      value() {
        this.waitFor(closure_8);
      }
    };
    const items = [obj, , , , , ];
    obj = {
      key: "isIdle",
      value() {
        return closure_14;
      }
    };
    items[1] = obj;
    obj = {
      key: "isAFK",
      value() {
        return closure_15;
      }
    };
    items[2] = obj;
    items[3] = {
      key: "getIdleSince",
      value() {
        let tmp = null;
        if (closure_14) {
          tmp = closure_13;
        }
        return tmp;
      }
    };
    items[4] = {
      key: "getSystemSuspended",
      value() {
        return closure_16;
      }
    };
    items[5] = {
      key: "getSystemLocked",
      value() {
        return closure_17;
      }
    };
    return callback(IdleStore, items);
  }(importDefault(dependencyMap[15]).Store);
  tmp12.displayName = "IdleStore";
  const obj = {
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
        let closure_12 = null;
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
  tmp12 = new tmp12(importDefault(dependencyMap[11]), obj);
  const result = arg1(dependencyMap[16]).fileFinishedImporting("stores/IdleStore.tsx");
  exports.default = tmp12;
}
const timerId = setInterval(checkIdleAFK, 30 * importDefault(dependencyMap[10]).Millis.SECOND);
