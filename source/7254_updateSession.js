// Module ID: 7254
// Function ID: 58432
// Name: updateSession
// Dependencies: []
// Exports: closeSession, makeSession

// Module 7254 (updateSession)
function updateSession(ipAddress) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let obj = arguments[1];
    }
    if (obj.user) {
      if (tmp) {
        ipAddress.ipAddress = obj.user.ip_address;
      }
      if (!tmp2) {
        ipAddress.did = obj.user.id || obj.user.email || obj.user.username;
      }
      const tmp = !ipAddress.ipAddress && obj.user.ip_address;
      const tmp2 = ipAddress.did || obj.did;
    }
    let timestamp = obj.timestamp;
    if (!timestamp) {
      timestamp = require(dependencyMap[3]).timestampInSeconds();
      const obj2 = require(dependencyMap[3]);
    }
    ipAddress.timestamp = timestamp;
    if (obj.abnormal_mechanism) {
      ipAddress.abnormal_mechanism = obj.abnormal_mechanism;
    }
    if (obj.ignoreDuration) {
      ipAddress.ignoreDuration = obj.ignoreDuration;
    }
    if (!obj.sid) {
      if (undefined !== obj.init) {
        ipAddress.init = obj.init;
      }
      if (tmp7) {
        const _HermesInternal = HermesInternal;
        ipAddress.did = "" + obj.did;
      }
      if ("number" === typeof obj.started) {
        ipAddress.started = obj.started;
      }
      if (ipAddress.ignoreDuration) {
        ipAddress.duration = undefined;
      } else if ("number" === typeof obj.duration) {
        ipAddress.duration = obj.duration;
      } else {
        const diff = ipAddress.timestamp - ipAddress.started;
        let num4 = 0;
        if (diff >= 0) {
          num4 = diff;
        }
        ipAddress.duration = num4;
      }
      if (obj.release) {
        ipAddress.release = obj.release;
      }
      if (obj.environment) {
        ipAddress.environment = obj.environment;
      }
      if (tmp10) {
        ipAddress.ipAddress = obj.ipAddress;
      }
      if (tmp11) {
        ipAddress.userAgent = obj.userAgent;
      }
      if ("number" === typeof obj.errors) {
        ipAddress.errors = obj.errors;
      }
      if (obj.status) {
        ipAddress.status = obj.status;
      }
    } else {
      if (32 === obj.sid.length) {
        let sid = obj.sid;
      } else {
        sid = require(dependencyMap[4]).uuid4();
        const obj3 = require(dependencyMap[4]);
      }
      ipAddress.sid = sid;
    }
  }
  obj = {};
}
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
const _module2 = require(dependencyMap[2]);

export const closeSession = function closeSession(status, status2) {
  if (status2) {
    let obj = { status: status2 };
  } else if ("ok" === status.status) {
    obj = { status: "exited" };
  }
  updateSession(status, {});
};
export const makeSession = function makeSession(arg0) {
  let obj = require(dependencyMap[3]);
  const timestampInSecondsResult = obj.timestampInSeconds();
  obj = {
    sid: require(dependencyMap[4]).uuid4(),
    timestamp: timestampInSecondsResult,
    started: timestampInSecondsResult,
    toJSON() {
      let obj = obj(closure_1[5]);
      obj = { sid: "" + obj.sid, init: obj.init };
      obj.started = new Date(1000 * obj.started).toISOString();
      const date = new Date(1000 * obj.started);
      obj.timestamp = new Date(1000 * obj.timestamp).toISOString();
      ({ status: obj2.status, errors: obj2.errors } = obj);
      if ("number" === typeof obj.did) {
        const _HermesInternal = HermesInternal;
        const combined = "" + tmp.did;
      }
      obj.did = combined;
      ({ duration: obj2.duration, abnormal_mechanism: obj2.abnormal_mechanism } = obj);
      obj.attrs = { release: obj.release, environment: obj.environment, ip_address: obj.ipAddress, user_agent: obj.userAgent };
      return obj.dropUndefinedKeys(obj);
    }
  };
  const require = obj;
  if (arg0) {
    updateSession(obj, arg0);
  }
  return obj;
};
export { updateSession };
