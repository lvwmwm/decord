// Module ID: 822
// Function ID: 9208
// Name: updateSession
// Dependencies: [815, 807]

// Module 822 (updateSession)
const require = arg1;
const dependencyMap = arg6;
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
      tmp = !ipAddress.ipAddress && obj.user.ip_address;
      tmp2 = ipAddress.did || obj.did;
    }
    let timestamp = obj.timestamp;
    if (!timestamp) {
      timestamp = require(815) /* dateTimestampInSeconds */.timestampInSeconds();
      const obj2 = require(815) /* dateTimestampInSeconds */;
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
        let num3 = 0;
        if (diff >= 0) {
          num3 = diff;
        }
        ipAddress.duration = num3;
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
        sid = require(807) /* getFirstException */.uuid4();
        const obj3 = require(807) /* getFirstException */;
      }
      ipAddress.sid = sid;
    }
  }
  obj = {};
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.closeSession = function closeSession(status, status2) {
  if (status2) {
    let obj = { status: status2 };
  } else if ("ok" === status.status) {
    obj = { status: "exited" };
  }
  updateSession(status, {});
};
arg5.makeSession = function makeSession(arg0) {
  obj = obj(815);
  const timestampInSecondsResult = obj.timestampInSeconds();
  obj = { sid: null, init: true, timestamp: null, started: null, duration: 0, status: "ok", errors: 0, ignoreDuration: false };
  obj.sid = obj(807).uuid4();
  obj.timestamp = timestampInSecondsResult;
  obj.started = timestampInSecondsResult;
  obj.toJSON = function toJSON() {
    obj = { sid: "" + obj.sid, init: obj.init };
    obj.started = new Date(1000 * obj.started).toISOString();
    const date = new Date(1000 * obj.started);
    obj.timestamp = new Date(1000 * obj.timestamp).toISOString();
    ({ status: obj.status, errors: obj.errors } = obj);
    if ("number" === typeof obj.did) {
      const _HermesInternal = HermesInternal;
      const combined = "" + tmp.did;
    }
    obj.did = combined;
    ({ duration: obj.duration, abnormal_mechanism: obj.abnormal_mechanism } = obj);
    obj.attrs = { release: obj.release, environment: obj.environment, ip_address: obj.ipAddress, user_agent: obj.userAgent };
    return obj;
  };
  if (arg0) {
    updateSession(obj, arg0);
  }
  return obj;
};
arg5.updateSession = updateSession;
