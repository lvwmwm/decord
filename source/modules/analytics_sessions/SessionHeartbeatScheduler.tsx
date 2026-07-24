// Module ID: 6697
// Function ID: 51872
// Name: stopAnalyticsHeartbeat
// Dependencies: [5, 4808, 1194, 4943, 4202, 653, 664, 3, 6698, 6699, 1184, 6700, 6703, 675, 6704, 587, 6705, 645, 686, 566, 491, 2]
// Exports: getActiveSessionUnsafe, initSessionHeartbeatScheduler

// Module 6697 (stopAnalyticsHeartbeat)
import closure_3 from "ME";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import importDefaultResult1 from "_isNativeReflectConstruct";
import ME from "ME";
import importDefaultResult2 from "_isNativeReflectConstruct";
import isForegrounded from "isForegrounded";
import isActiveUserRoute from "isActiveUserRoute";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
function stopAnalyticsHeartbeat() {
  if (null == _null) {
    // // eliminated: always false
  } else {
    const type = _null.type;
    if ("timeout" === type) {
      const _clearTimeout = clearTimeout;
      clearTimeout(_null.id);
      _null = null;
    } else if ("interval" !== type) {
      const type2 = _null.type;
    }
    const _clearInterval = clearInterval;
    clearInterval(_null.id);
  }
}
function trackHeartbeat(arg0) {
  return _trackHeartbeat(...arguments);
}
async function _trackHeartbeat() {
  const timestamp = Date.now();
  const tmp2 = yield outer2_41();
  if (null != tmp2) {
    let obj1 = outer2_1(outer2_2[10]);
    let obj = { category: outer2_14, message: "Tracking Heartbeat" };
    obj = { initialized: tmp2.createdAtTimestamp };
    obj.data = obj;
    obj1.addBreadcrumb(obj);
    obj1 = { client_heartbeat_initialization_timestamp: tmp2.createdAtTimestamp, client_heartbeat_version: 29 };
    const merged = Object.assign(outer2_0(outer2_2[12]).getClientHeartbeatPiggybackProperties());
    const idleSince = outer2_6.getIdleSince();
    let num5 = 0;
    if (null != idleSince) {
      num5 = idleSince;
    }
    const obj2 = { is_idle: outer2_6.isIdle() };
    const _Date = Date;
    obj2.idle_duration_ms = Date.now() - num5;
    obj2.is_afk = outer2_6.isAFK();
    obj2.is_system_suspended = outer2_6.getSystemSuspended();
    obj2.is_system_locked = outer2_6.getSystemLocked();
    const merged1 = Object.assign(obj2);
    const obj6 = outer2_0(outer2_2[12]);
    outer2_1(outer2_2[13]).track(outer2_8.CLIENT_HEARTBEAT, obj1);
    const _performance = performance;
    const outer2_19 = performance.now();
    const obj8 = outer2_1(outer2_2[13]);
    outer2_0(outer2_2[11]).drainClickstream();
    const obj9 = outer2_0(outer2_2[11]);
  } else {
    obj = outer2_1(outer2_2[10]);
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    obj.captureException(Error("Null session when tracking session heartbeat. Waited " + tmp3 - timestamp + "ms"));
  }
}
function buildHeartbeatQOSPayload() {
  const items = [];
  if (tmp) {
    if (isForegrounded) {
      items.push("foregrounded");
    }
    if (closure_21 === constants2.RTC_CONNECTED) {
      items.push("rtc_connected");
    }
  }
  return { active: items.length > 0, ver: 29, reasons: items };
}
function isActive(isScrollingInBoundsSharedValue, parent_id, channelId) {
  return buildHeartbeatQOSPayload().active;
}
function scheduleHeartbeatTracking(APP_STATE_UPDATE) {
  let obj = importDefault(1184);
  obj = { message: `Heartbeat Track State Parameters Changed. Foregrounded ${isForegrounded}, Connection State: ${closure_21}` };
  obj.addBreadcrumb(obj);
  if (isActive()) {
    (function startAnalyticsHeartbeat() {
      if (null == outer1_16) {
        let num = 0;
        if (0 !== outer1_19) {
          const _performance = performance;
          num = outer1_11 - (performance.now() - outer1_19);
        }
        let obj = outer1_1(outer1_2[10]);
        obj = {};
        const _HermesInternal = HermesInternal;
        obj.message = "Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: " + num / 1000 + " seconds. Scheduling Heartbeat";
        obj.addBreadcrumb(obj);
        obj = { type: "timeout" };
        const _setTimeout = setTimeout;
        obj.id = setTimeout(() => {
          outer2_26();
          const outer2_16 = {
            type: "interval",
            id: setInterval(() => {
              outer3_26();
            }, outer2_11)
          };
        }, num);
        outer1_16 = obj;
      }
    })();
  } else {
    stopAnalyticsHeartbeat();
  }
  socket = socket.getSocket();
  if (null != socket) {
    const result = socket.handleActiveStateChange(buildHeartbeatQOSPayload());
  }
}
function scheduleHeartbeatSkippedTracking() {
  if (null == obj) {
    obj = {};
    const _setInterval = setInterval;
    obj.id = setInterval(() => {
      let result = null != outer1_24;
      if (result) {
        let obj = outer1_0(outer1_2[14]);
        result = obj.shouldLogClientHeartbeatSkipped();
      }
      if (result) {
        const _performance = performance;
        if (performance.now() - outer1_19 > outer1_11) {
          obj = { client_heartbeat_version: 29 };
          outer1_1(outer1_2[13]).track(outer1_8.CLIENT_HEARTBEAT_SKIPPED, obj);
          const obj2 = outer1_1(outer1_2[13]);
        }
      }
    }, closure_11);
    obj.type = "interval";
  }
}
function validateClientSession(Storage) {
  let tmp = null;
  if (null != Storage) {
    let tmp4 = Storage;
    if (Storage.version !== require(6705) /* result */.CLIENT_SESSION_STORAGE_VERSION) {
      const _HermesInternal = HermesInternal;
      importDefaultResult2.warn("Throwing away client session with invalid version: " + Storage.version + ", expected " + require(6705) /* result */.CLIENT_SESSION_STORAGE_VERSION);
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
  const tmp = yield outer2_41(false);
  if (null != tmp) {
    const socket = outer2_4.getSocket();
    if (null != socket) {
      ({ createdAtTimestamp, uuid } = tmp);
      const result = socket.handleUpdateTimeSpentSessionId(createdAtTimestamp, uuid, outer2_0(outer2_2[17]).clientLaunchId);
    }
  }
}
function handleAuthenticationChange() {
  const token = importDefaultResult.getToken();
  if (token !== token) {
    const Storage = require(587) /* Storage */.Storage;
    Storage.remove(LAST_CLIENT_HEARTBEAT_SESSION);
    let closure_20 = { state: "loaded", session: null };
    stopAnalyticsHeartbeat();
    let c19 = 0;
  }
  scheduleHeartbeatTracking();
}
function handleRTCStateChange() {
  const state = importDefaultResult1.getState();
  if (state !== state) {
    scheduleHeartbeatTracking();
  }
}
function handleWindowFocus(focused) {
  focused = focused.focused;
  if (focused !== focused) {
    scheduleHeartbeatTracking();
  }
}
function handleLocationChange() {
  const isActiveUserRouteResult = require(6699) /* isActiveUserRoute */.isActiveUserRoute();
  if (isActiveUserRoute !== isActiveUserRouteResult) {
    isActiveUserRoute = isActiveUserRouteResult;
    scheduleHeartbeatTracking();
  }
}
function handleAppStateUpdate(state) {
  if (isForegrounded !== state.state === constants.ACTIVE) {
    isForegrounded = tmp;
    scheduleHeartbeatTracking();
  }
}
function handleFluxInitialized() {
  const state = importDefaultResult1.getState();
  let closure_22 = require(6698) /* isForegrounded */.isForegrounded();
  const obj = require(6698) /* isForegrounded */;
  let closure_23 = require(6699) /* isActiveUserRoute */.isActiveUserRoute();
  handleAuthenticationChange();
}
function getSession() {
  return _getSession(...arguments);
}
async function _getSession() {
  let iter = (function*() {
    let flag = arg0;
    if (flag === undefined) {
      flag = true;
    }
    let session2;
    let c2;
    yield undefined;
    session2 = null;
    let tmp2 = null;
    if ("loaded" === outer2_20.state) {
      const session = outer2_20.session;
      let uuid;
      if (null != session) {
        uuid = session.uuid;
      }
      tmp2 = uuid;
    }
    c2 = tmp2;
    if ("uninitialized" === outer2_20.state) {
      let Storage = outer2_0(outer2_2[15]).Storage;
      session2 = outer2_32(yield Storage.getAfterRefresh(outer2_13));
      const tmp6 = outer2_32;
    } else {
      session2 = outer2_20.session;
    }
    (() => {
      let createdAtTimestamp;
      let uuid;
      const timestamp = Date.now();
      if (outer3_29()) {
        let isSessionExpiredResult = null == tmp2;
        if (!isSessionExpiredResult) {
          isSessionExpiredResult = outer3_0(outer3_2[16]).isSessionExpired(session2);
          const obj2 = outer3_0(outer3_2[16]);
        }
        if (isSessionExpiredResult) {
          let obj = { uuid: outer3_0(outer3_2[20]).v4(), createdAtTimestamp: timestamp, lastUsedTimestamp: timestamp, version: outer3_0(outer3_2[16]).CLIENT_SESSION_STORAGE_VERSION };
          session2 = obj;
          let outer3_18 = 0;
          const obj4 = outer3_0(outer3_2[20]);
        }
        session2.lastUsedTimestamp = timestamp;
        const _performance = performance;
        const nowResult = performance.now();
        if (nowResult - outer3_18 >= outer3_12) {
          const Storage = outer3_0(outer3_2[15]).Storage;
          const result = Storage.set(outer3_13, tmp14);
          outer3_18 = nowResult;
        }
        tmp14 = session2;
      } else {
        let isSessionExpiredResult1 = null != tmp2;
        if (isSessionExpiredResult1) {
          obj = outer3_0(outer3_2[16]);
          isSessionExpiredResult1 = obj.isSessionExpired(session2);
        }
        if (isSessionExpiredResult1) {
          session2 = null;
        }
      }
      while (true) {
        obj = {};
        let str = "loaded";
        obj.state = "loaded";
        let tmp24 = session2;
        obj.session = session2;
        let outer3_20 = obj;
        let tmp25 = session2;
        let tmp26 = null != session2;
        if (!tmp26) {
          break;
        } else {
          let tmp27 = c2;
          let tmp28 = session2;
          tmp26 = c2 !== session2.uuid;
          break;
        }
        if (tmp26) {
          tmp26 = flag;
        }
        if (tmp26) {
          let tmp29 = outer3_4;
          let socket = outer3_4.getSocket();
          if (null != socket) {
            let tmp30 = session2;
            let tmp31 = session2;
            let tmp32 = outer3_0;
            let tmp33 = outer3_2;
            let num7 = 17;
            ({ createdAtTimestamp, uuid } = session2);
            let result1 = socket.handleUpdateTimeSpentSessionId(createdAtTimestamp, uuid, outer3_0(outer3_2[17]).clientLaunchId);
          }
        }
        let tmp35 = session2;
        return session2;
      }
    })();
  })();
  iter.next();
  return iter;
}
({ AnalyticEvents: closure_8, AppStates: closure_9, RTCConnectionStates: closure_10 } = ME);
let closure_11 = 15 * require("set").Millis.MINUTE;
const SECOND = require("set").Millis.SECOND;
const LAST_CLIENT_HEARTBEAT_SESSION = "LAST_CLIENT_HEARTBEAT_SESSION";
const user = "user";
importDefaultResult2 = new importDefaultResult2("SessionHeartbeatScheduler");
let c16 = null;
let c17 = null;
let c18 = 0;
let c19 = 0;
let closure_20 = { state: "uninitialized" };
let state = importDefaultResult1.getState();
isForegrounded = isForegrounded.isForegrounded();
isActiveUserRoute = isActiveUserRoute.isActiveUserRoute();
let token = importDefaultResult.getToken();
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/analytics_sessions/SessionHeartbeatScheduler.tsx");

export const initSessionHeartbeatScheduler = function initSessionHeartbeatScheduler() {
  importDefault(1184).addBreadcrumb({ message: "Initializing SessionHeartbeatScheduler" });
  importDefaultResult1.addChangeListener(handleRTCStateChange);
  importDefaultResult.addChangeListener(handleAuthenticationChange);
  const obj = importDefault(1184);
  const subscription = importDefault(686).subscribe("WINDOW_FOCUS", handleWindowFocus);
  const obj2 = importDefault(686);
  const subscription1 = importDefault(686).subscribe("APP_STATE_UPDATE", handleAppStateUpdate);
  const obj3 = importDefault(686);
  const subscription2 = importDefault(686).subscribe("CONNECTION_OPEN", forceDispatchSessionIdUpdate);
  const obj4 = importDefault(686);
  const result = require(6699) /* isActiveUserRoute */.subscribeToLocationChanges(handleLocationChange);
  scheduleHeartbeatTracking();
  scheduleHeartbeatSkippedTracking();
  const initialized = importDefault(566).initialized;
  initialized.then(handleFluxInitialized);
};
export { getSession };
export const getActiveSessionUnsafe = function getActiveSessionUnsafe() {
  if ("uninitialized" === closure_20.state) {
    const Storage = require(587) /* Storage */.Storage;
    let session = validateClientSession(Storage.get(LAST_CLIENT_HEARTBEAT_SESSION));
  } else {
    session = closure_20.session;
  }
  let tmp6 = null;
  if (null != session) {
    tmp6 = null;
    if (!obj.isSessionExpired(session)) {
      tmp6 = session;
    }
    obj = require(6705) /* result */;
  }
  return tmp6;
};
