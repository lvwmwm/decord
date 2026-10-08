// Module ID: 11016
// Function ID: 11017
// Dependencies: [10992, 10993, 11017, 11007, 11004, 10999]
// Exports: closeSession, makeSession

// Module 11016
import _mod10999 from "module_10999" /* 10999 */;
import _mod11004 from "module_11004" /* 11004 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 11007 */;
import _mod11017 from "module_11017" /* 11017 */;
import DEBUG_BUILD from "module_10992" /* 10992 */;
import CONSOLE_LEVELS from "module_10993" /* 10993 */;

function updateSession(ipAddress) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  if (obj.user) {
    const tmp = !ipAddress.ipAddress && obj.user.ip_address;
    if (tmp) {
      ipAddress.ipAddress = obj.user.ip_address;
    }
    const tmp2 = ipAddress.did || obj.did;
    if (!tmp2) {
      ipAddress.did = obj.user.id || obj.user.email || obj.user.username;
    }
  }
  let timestamp = obj.timestamp;
  if (!timestamp) {
    const obj2 = _browserPerformanceTimeOriginMode;
    timestamp = obj2.timestampInSeconds();
  }
  ipAddress.timestamp = timestamp;
  if (obj.abnormal_mechanism) {
    ipAddress.abnormal_mechanism = obj.abnormal_mechanism;
  }
  if (obj.ignoreDuration) {
    ipAddress.ignoreDuration = obj.ignoreDuration;
  }
  if (obj.sid) {
    let sid;
    if (32 === obj.sid.length) {
      sid = obj.sid;
    } else {
      const obj3 = _mod11004;
      sid = obj3.uuid4();
    }
    ipAddress.sid = sid;
  }
  if (undefined !== obj.init) {
    ipAddress.init = obj.init;
  }
  const tmp7 = !ipAddress.did && obj.did;
  if (tmp7) {
    const _HermesInternal = HermesInternal;
    ipAddress.did = "" + obj.did;
  }
  if (typeof obj.started === "number") {
    ipAddress.started = obj.started;
  }
  if (ipAddress.ignoreDuration) {
    ipAddress.duration = undefined;
  } else if (typeof obj.duration === "number") {
    ipAddress.duration = obj.duration;
  } else {
    const diff = ipAddress.timestamp - ipAddress.started;
    let num2 = 0;
    if (diff >= 0) {
      num2 = diff;
    }
    ipAddress.duration = num2;
  }
  if (obj.release) {
    ipAddress.release = obj.release;
  }
  if (obj.environment) {
    ipAddress.environment = obj.environment;
  }
  const tmp9 = !ipAddress.ipAddress && obj.ipAddress;
  if (tmp9) {
    ipAddress.ipAddress = obj.ipAddress;
  }
  const tmp10 = !ipAddress.userAgent && obj.userAgent;
  if (tmp10) {
    ipAddress.userAgent = obj.userAgent;
  }
  if (typeof obj.errors === "number") {
    ipAddress.errors = obj.errors;
  }
  if (obj.status) {
    ipAddress.status = obj.status;
  }
}
_mod11017;

export const closeSession = function closeSession(status, status2) {
  let obj;
  const tmp = status2;
  if (tmp) {
    obj = { status: status2 };
    const obj2 = { status: status2 };
  } else {
    obj = {};
    if ("ok" === status.status) {
      obj = { status: "exited" };
    }
  }
  updateSession(status, obj);
};
export const makeSession = function makeSession(arg0) {
  let obj2;
  let obj3;
  let obj = obj2(11007);
  const timestampInSecondsResult = obj.timestampInSeconds();
  obj2 = {
    sid: obj3.uuid4(),
    init: true,
    timestamp: timestampInSecondsResult,
    started: timestampInSecondsResult,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON() {
      let combined;
      let date;
      let date1;
      const tmp2 = _mod10999;
      const obj = { sid: "" + obj2.sid, init: obj2.init, started: date.toISOString(), timestamp: date1.toISOString(), status: null, errors: null, did: combined, duration: null, abnormal_mechanism: null, attrs: { release: obj2.release, environment: obj2.environment, ip_address: obj2.ipAddress, user_agent: obj2.userAgent } };
      const dropUndefinedKeys = tmp2.dropUndefinedKeys;
      date = new Date(1000 * obj2.started);
      ({ status: obj.status, errors: obj.errors } = obj2);
      date1 = new Date(1000 * obj2.timestamp);
      if (typeof obj2.did === "number") {
        const _HermesInternal = HermesInternal;
        combined = "" + tmp.did;
      }
      ({ duration: obj.duration, abnormal_mechanism: obj.abnormal_mechanism } = obj2);
      return dropUndefinedKeys(obj);
    }
  };
  obj3 = obj2(11004);
  if (arg0) {
    let tmp2 = updateSession;
    updateSession(obj2, arg0);
  }
  return obj2;
};
export { updateSession };
