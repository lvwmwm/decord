// Module ID: 6686
// Function ID: 51750
// Name: stopAnalyticsHeartbeat
// Dependencies: []
// Exports: getActiveSessionUnsafe, initSessionHeartbeatScheduler

// Module 6686 (stopAnalyticsHeartbeat)
function stopAnalyticsHeartbeat() {
  if (null == user) {
    // // eliminated: always false
  } else {
    const type = user.type;
    if ("timeout" === type) {
      const _clearTimeout = clearTimeout;
      clearTimeout(user.id);
      const user = null;
    } else if ("interval" !== type) {
      const type2 = user.type;
    }
    const _clearInterval = clearInterval;
    clearInterval(user.id);
  }
}
function trackHeartbeat(arg0) {
  return _trackHeartbeat(...arguments);
}
async function _trackHeartbeat() {
  const timestamp = Date.now();
  const tmp2 = yield closure_41();
  if (null != tmp2) {
    let obj1 = callback2(closure_2[10]);
    let obj = { category: closure_14, message: "Tracking Heartbeat" };
    obj = { initialized: tmp2.createdAtTimestamp };
    obj.data = obj;
    obj1.addBreadcrumb(obj);
    obj1 = { client_heartbeat_initialization_timestamp: tmp2.createdAtTimestamp, client_heartbeat_version: 29 };
    const merged = Object.assign(callback(closure_2[12]).getClientHeartbeatPiggybackProperties());
    const idleSince = store.getIdleSince();
    let num5 = 0;
    if (null != idleSince) {
      num5 = idleSince;
    }
    const obj2 = { is_idle: store.isIdle() };
    const _Date = Date;
    obj2.idle_duration_ms = Date.now() - num5;
    obj2.is_afk = store.isAFK();
    obj2.is_system_suspended = store.getSystemSuspended();
    obj2.is_system_locked = store.getSystemLocked();
    const merged1 = Object.assign(obj2);
    const obj6 = callback(closure_2[12]);
    callback2(closure_2[13]).track(constants.CLIENT_HEARTBEAT, obj1);
    const _performance = performance;
    let closure_19 = performance.now();
    const obj8 = callback2(closure_2[13]);
    callback(closure_2[11]).drainClickstream();
    const obj9 = callback(closure_2[11]);
  } else {
    obj = callback2(closure_2[10]);
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    obj.captureException(Error("Null session when tracking session heartbeat. Waited " + tmp3 - timestamp + "ms"));
  }
}
function buildHeartbeatQOSPayload() {
  const items = [];
  if (tmp) {
    if (closure_22) {
      items.push("foregrounded");
    }
    if (closure_21 === constants2.RTC_CONNECTED) {
      items.push("rtc_connected");
    }
  }
  return { active: items.length > 0, ver: 29, reasons: items };
}
function isActive(guildId, parent_id, channelId) {
  return buildHeartbeatQOSPayload().active;
}
function scheduleHeartbeatTracking(APP_STATE_UPDATE) {
  let obj = importDefault(dependencyMap[10]);
  obj = { message: `Heartbeat Track State Parameters Changed. Foregrounded ${closure_22}, Connection State: ${closure_21}` };
  obj.addBreadcrumb(obj);
  if (isActive()) {
    function startAnalyticsHeartbeat() {
      if (null == obj) {
        let num = 0;
        if (0 !== closure_19) {
          const _performance = performance;
          num = closure_11 - (performance.now() - closure_19);
        }
        let obj = callback(closure_2[10]);
        obj = {};
        const _HermesInternal = HermesInternal;
        obj.message = "Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: " + num / 1000 + " seconds. Scheduling Heartbeat";
        obj.addBreadcrumb(obj);
        obj = { type: "timeout" };
        const _setTimeout = setTimeout;
        obj.id = setTimeout(() => {
          callback();
          const obj = {
            type: "interval",
            id: setInterval(() => {
              callback();
            }, closure_11)
          };
        }, num);
      }
    }();
  } else {
    stopAnalyticsHeartbeat();
  }
  const socket = socket.getSocket();
  if (null != socket) {
    const result = socket.handleActiveStateChange(buildHeartbeatQOSPayload());
  }
}
function scheduleHeartbeatSkippedTracking() {
  if (null == closure_17) {
    const obj = {};
    const _setInterval = setInterval;
    obj.id = setInterval(() => {
      let result = null != closure_24;
      if (result) {
        let obj = callback(closure_2[14]);
        result = obj.shouldLogClientHeartbeatSkipped();
      }
      if (result) {
        const _performance = performance;
        if (performance.now() - closure_19 > closure_11) {
          obj = { client_heartbeat_version: 29 };
          callback2(closure_2[13]).track(constants.CLIENT_HEARTBEAT_SKIPPED, obj);
          const obj2 = callback2(closure_2[13]);
        }
      }
    }, closure_11);
    obj.type = "interval";
    closure_17 = obj;
  }
}
function validateClientSession(Storage) {
  let tmp = null;
  if (null != Storage) {
    let tmp4 = Storage;
    if (Storage.version !== arg1(dependencyMap[16]).CLIENT_SESSION_STORAGE_VERSION) {
      const _HermesInternal = HermesInternal;
      importDefaultResult2.warn("Throwing away client session with invalid version: " + Storage.version + ", expected " + arg1(dependencyMap[16]).CLIENT_SESSION_STORAGE_VERSION);
      tmp4 = null;
    }
    tmp = tmp4;
  }
  return tmp;
}
function forceDispatchSessionIdUpdate() {
  return _forceDispatchSessionIdUpdate(...arguments);
}
async function _forceDispatchSessionIdUpdate() {
  let createdAtTimestamp;
  let uuid;
  const tmp = yield closure_41(false);
  if (null != tmp) {
    const socket = socket.getSocket();
    if (null != socket) {
      ({ createdAtTimestamp, uuid } = tmp);
      const result = socket.handleUpdateTimeSpentSessionId(createdAtTimestamp, uuid, callback(closure_2[17]).clientLaunchId);
    }
  }
}
function handleAuthenticationChange() {
  const token = importDefaultResult.getToken();
  if (closure_24 !== token) {
    closure_24 = token;
    const Storage = arg1(dependencyMap[15]).Storage;
    Storage.remove(closure_13);
    let closure_20 = {};
    stopAnalyticsHeartbeat();
    let closure_19 = 0;
  }
  scheduleHeartbeatTracking();
}
function handleRTCStateChange() {
  const state = importDefaultResult1.getState();
  if (closure_21 !== state) {
    closure_21 = state;
    scheduleHeartbeatTracking();
  }
}
function handleWindowFocus(focused) {
  focused = focused.focused;
  if (closure_22 !== focused) {
    closure_22 = focused;
    scheduleHeartbeatTracking();
  }
}
function handleLocationChange() {
  const isActiveUserRouteResult = arg1(dependencyMap[9]).isActiveUserRoute();
  if (closure_23 !== isActiveUserRouteResult) {
    closure_23 = isActiveUserRouteResult;
    scheduleHeartbeatTracking();
  }
}
function handleAppStateUpdate(state) {
  if (closure_22 !== state.state === constants.ACTIVE) {
    closure_22 = tmp;
    scheduleHeartbeatTracking();
  }
}
function handleFluxInitialized() {
  const state = importDefaultResult1.getState();
  let closure_22 = arg1(dependencyMap[8]).isForegrounded();
  const obj = arg1(dependencyMap[8]);
  let closure_23 = arg1(dependencyMap[9]).isActiveUserRoute();
  handleAuthenticationChange();
}
function getSession() {
  return _getSession(...arguments);
}
async function _getSession() {
  const fn = function*() {
    let flag = arg0;
    if (flag === undefined) {
      flag = true;
    }
    let session2;
    let tmp2;
    yield undefined;
    session2 = null;
    tmp2 = null;
    if ("loaded" === closure_20.state) {
      const session = closure_20.session;
      let uuid;
      if (null != session) {
        uuid = session.uuid;
      }
      tmp2 = uuid;
    }
    if ("uninitialized" === closure_20.state) {
      const Storage = flag(tmp2[15]).Storage;
      session2 = closure_32(yield Storage.getAfterRefresh(closure_13));
      const tmp6 = closure_32;
    } else {
      session2 = closure_20.session;
    }
    () => {
      let createdAtTimestamp;
      let uuid;
      const timestamp = Date.now();
      if (callback()) {
        let isSessionExpiredResult = null == tmp2;
        if (!isSessionExpiredResult) {
          isSessionExpiredResult = flag(tmp2[16]).isSessionExpired(uuid);
          const obj2 = flag(tmp2[16]);
        }
        if (isSessionExpiredResult) {
          let obj = { uuid: flag(tmp2[20]).v4(), createdAtTimestamp: timestamp, lastUsedTimestamp: timestamp, version: flag(tmp2[16]).CLIENT_SESSION_STORAGE_VERSION };
          uuid = obj;
          let nowResult = 0;
          const obj4 = flag(tmp2[20]);
        }
        uuid.lastUsedTimestamp = timestamp;
        const _performance = performance;
        nowResult = performance.now();
        if (nowResult - nowResult >= closure_12) {
          const Storage = flag(tmp2[15]).Storage;
          const result = Storage.set(closure_13, tmp14);
        }
        const tmp14 = uuid;
      } else {
        let isSessionExpiredResult1 = null != tmp2;
        if (isSessionExpiredResult1) {
          obj = flag(tmp2[16]);
          isSessionExpiredResult1 = obj.isSessionExpired(uuid);
        }
        if (isSessionExpiredResult1) {
          uuid = null;
        }
      }
      while (true) {
        obj = {};
        let str = "loaded";
        obj.state = "loaded";
        let tmp24 = uuid;
        obj.session = uuid;
        let tmp25 = uuid;
        let tmp26 = null != uuid;
        if (!tmp26) {
          break;
        } else {
          let tmp27 = tmp2;
          let tmp28 = uuid;
          tmp26 = tmp2 !== uuid.uuid;
          // break
        }
        if (tmp26) {
          tmp26 = flag;
        }
        if (tmp26) {
          let tmp29 = socket;
          let socket = socket.getSocket();
          if (null != socket) {
            let tmp30 = uuid;
            let tmp31 = uuid;
            let tmp32 = flag;
            let tmp33 = tmp2;
            let num7 = 17;
            ({ createdAtTimestamp, uuid } = uuid);
            let result1 = socket.handleUpdateTimeSpentSessionId(createdAtTimestamp, uuid, flag(tmp2[17]).clientLaunchId);
          }
        }
        let tmp35 = uuid;
        return uuid;
      }
    }();
  };
  fn.next();
  return fn;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importDefaultResult = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const importDefaultResult1 = importDefault(dependencyMap[4]);
({ AnalyticEvents: closure_8, AppStates: closure_9, RTCConnectionStates: closure_10 } = arg1(dependencyMap[5]));
let closure_11 = 15 * importDefault(dependencyMap[6]).Millis.MINUTE;
const SECOND = importDefault(dependencyMap[6]).Millis.SECOND;
let closure_13 = "LAST_CLIENT_HEARTBEAT_SESSION";
let closure_14 = "user";
let importDefaultResult2 = importDefault(dependencyMap[7]);
importDefaultResult2 = new importDefaultResult2("SessionHeartbeatScheduler");
let closure_16 = null;
let closure_17 = null;
let closure_18 = 0;
let closure_19 = 0;
let closure_20 = { state: "uninitialized" };
const state = importDefaultResult1.getState();
const tmp2 = arg1(dependencyMap[5]);
let closure_22 = arg1(dependencyMap[8]).isForegrounded();
const obj3 = arg1(dependencyMap[8]);
let closure_23 = arg1(dependencyMap[9]).isActiveUserRoute();
const token = importDefaultResult.getToken();
const obj4 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/analytics_sessions/SessionHeartbeatScheduler.tsx");

export const initSessionHeartbeatScheduler = function initSessionHeartbeatScheduler() {
  importDefault(dependencyMap[10]).addBreadcrumb({ message: "Initializing SessionHeartbeatScheduler" });
  importDefaultResult1.addChangeListener(handleRTCStateChange);
  importDefaultResult.addChangeListener(handleAuthenticationChange);
  const obj = importDefault(dependencyMap[10]);
  const subscription = importDefault(dependencyMap[18]).subscribe("WINDOW_FOCUS", handleWindowFocus);
  const obj2 = importDefault(dependencyMap[18]);
  const subscription1 = importDefault(dependencyMap[18]).subscribe("APP_STATE_UPDATE", handleAppStateUpdate);
  const obj3 = importDefault(dependencyMap[18]);
  const subscription2 = importDefault(dependencyMap[18]).subscribe("CONNECTION_OPEN", forceDispatchSessionIdUpdate);
  const obj4 = importDefault(dependencyMap[18]);
  const result = arg1(dependencyMap[9]).subscribeToLocationChanges(handleLocationChange);
  scheduleHeartbeatTracking();
  scheduleHeartbeatSkippedTracking();
  const initialized = importDefault(dependencyMap[19]).initialized;
  initialized.then(handleFluxInitialized);
};
export { getSession };
export const getActiveSessionUnsafe = function getActiveSessionUnsafe() {
  if ("uninitialized" === closure_20.state) {
    const Storage = arg1(dependencyMap[15]).Storage;
    let session = validateClientSession(Storage.get(closure_13));
  } else {
    session = closure_20.session;
  }
  let tmp6 = null;
  if (null != session) {
    tmp6 = null;
    if (!obj.isSessionExpired(session)) {
      tmp6 = session;
    }
    const obj = arg1(dependencyMap[16]);
  }
  return tmp6;
};
