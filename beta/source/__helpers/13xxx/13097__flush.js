// Module ID: 13097
// Function ID: 13098
// Name: _flush
// Dependencies: [5, 13076, 13098, 13077, 13049, 13060, 13063, 13056, 13086, 13050, 13072]
// Exports: addEventProcessor, captureCheckIn, captureEvent, captureException, captureMessage, captureSession, close, flush, isEnabled, isInitialized, lastEventId, setContext, setExtra, setExtras, setTag, setTags, setUser, startSession, withMonitor

// Module 13097 (_flush)
import _mod13050 from "module_13050" /* 13050 */;
import _mod13060 from "module_13060" /* 13060 */;
import _mod13063 from "module_13063" /* 13063 */;
import _mod13072 from "module_13072" /* 13072 */;
import _mod13076 from "module_13076" /* 13076 */;
import _mod13098 from "module_13098" /* 13098 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

let closure_3 = async function _flush(arg0, value) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        const client = require("module_13076").getClient();
        if (client) {
          client.flush(tmp13);
        } else {
          if (tmp14(tmp15[3]).DEBUG_BUILD) {
            const logger = tmp14(tmp15[4]).logger;
            logger.warn("Cannot flush events. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("module_13076");
        tmp13 = closure_0;
      }
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
};
let closure_4 = async function _close(arg0, value) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        const client = require("module_13076").getClient();
        if (client) {
          client.close(tmp13);
        } else {
          if (tmp14(tmp15[3]).DEBUG_BUILD) {
            const logger = tmp14(tmp15[4]).logger;
            logger.warn("Cannot flush events and disable SDK. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("module_13076");
        tmp13 = closure_0;
      }
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
};
function endSession() {
  const isolationScope = _mod13076.getIsolationScope();
  const currentScope = _mod13076.getCurrentScope();
  const tmp3 = currentScope.getSession() || isolationScope.getSession();
  if (tmp3) {
    tmp(13072).closeSession(tmp3);
    const tmpResult = tmp(13072);
  }
  const isolationScope1 = _mod13076.getIsolationScope();
  const tmpResult4 = _mod13076;
  const currentScope1 = _mod13076.getCurrentScope();
  const tmpResult5 = _mod13076;
  const client = _mod13076.getClient();
  const tmp5 = currentScope1.getSession() || isolationScope1.getSession();
  let tmp6 = tmp5;
  if (tmp5) {
    tmp6 = client;
  }
  if (tmp6) {
    client.captureSession(tmp5);
  }
  isolationScope.setSession();
  currentScope.setSession();
}

export const addEventProcessor = function addEventProcessor(arg0) {
  const isolationScope = _mod13076.getIsolationScope();
  isolationScope.addEventProcessor(arg0);
};
export const captureCheckIn = function captureCheckIn(arg0, arg1) {
  const currentScope = _mod13076.getCurrentScope();
  const client = _mod13076.getClient();
  if (client) {
    if (client.captureCheckIn) {
      return client.captureCheckIn(arg0, arg1, currentScope);
    } else if (tmp(13077).DEBUG_BUILD) {
      const logger2 = tmp(13049).logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
  } else if (tmp(13077).DEBUG_BUILD) {
    const logger = tmp(13049).logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  return _mod13060.uuid4();
};
export const captureEvent = function captureEvent(arg0, arg1) {
  const currentScope = _mod13076.getCurrentScope();
  return currentScope.captureEvent(arg0, arg1);
};
export const captureException = function captureException(arg0, arg1) {
  const currentScope = _mod13076.getCurrentScope();
  return currentScope.captureException(arg0, _mod13098.parseEventHintOrCaptureContext(arg1));
};
export const captureMessage = function captureMessage(arg0, captureContext) {
  let tmp;
  if (typeof captureContext === "string") {
    tmp = captureContext;
  }
  let tmp2;
  if (typeof captureContext !== "string") {
    const obj2 = { captureContext };
    tmp2 = obj2;
  }
  const currentScope = _mod13076.getCurrentScope();
  return currentScope.captureMessage(arg0, tmp, tmp2);
};
export const captureSession = function captureSession() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (flag) {
    endSession();
  } else {
    const isolationScope = _mod13076.getIsolationScope();
    const currentScope = _mod13076.getCurrentScope();
    const client = _mod13076.getClient();
    const tmp3 = currentScope.getSession() || isolationScope.getSession();
    let tmp4 = tmp3;
    if (tmp3) {
      tmp4 = client;
    }
    if (tmp4) {
      client.captureSession(tmp3);
    }
  }
};
export const close = function close(arg0) {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { endSession };
export const flush = function flush(arg0) {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const isEnabled = function isEnabled() {
  const client = _mod13076.getClient();
  let transport = client;
  if (transport) {
    transport = false !== client.getOptions().enabled;
  }
  if (transport) {
    transport = client.getTransport();
  }
  return transport;
};
export const isInitialized = function isInitialized() {
  return _mod13076.getClient();
};
export const lastEventId = function lastEventId() {
  const isolationScope = _mod13076.getIsolationScope();
  return isolationScope.lastEventId();
};
export const setContext = function setContext(arg0, arg1) {
  const isolationScope = _mod13076.getIsolationScope();
  isolationScope.setContext(arg0, arg1);
};
export const setExtra = function setExtra(arg0, arg1) {
  const isolationScope = _mod13076.getIsolationScope();
  isolationScope.setExtra(arg0, arg1);
};
export const setExtras = function setExtras(arg0) {
  const isolationScope = _mod13076.getIsolationScope();
  isolationScope.setExtras(arg0);
};
export const setTag = function setTag(arg0, arg1) {
  const isolationScope = _mod13076.getIsolationScope();
  isolationScope.setTag(arg0, arg1);
};
export const setTags = function setTags(arg0) {
  const isolationScope = _mod13076.getIsolationScope();
  isolationScope.setTags(arg0);
};
export const setUser = function setUser(arg0) {
  const isolationScope = _mod13076.getIsolationScope();
  isolationScope.setUser(arg0);
};
export const startSession = function startSession(arg0) {
  const client = _mod13076.getClient();
  const isolationScope = _mod13076.getIsolationScope();
  const currentScope = _mod13076.getCurrentScope();
  options = client;
  if (client) {
    options = client.getOptions();
  }
  if (!options) {
    options = {};
  }
  ({ environment, release } = options);
  if (undefined === environment) {
    environment = tmp(13086).DEFAULT_ENVIRONMENT;
  }
  const userAgent = _mod13050.GLOBAL_OBJ.navigator || {}.userAgent;
  const tmp3 = _mod13050.GLOBAL_OBJ.navigator || {};
  const obj2 = { release, environment, user: null };
  const tmpResult = _mod13072;
  obj2.user = currentScope.getUser() || isolationScope.getUser();
  let tmp5 = userAgent;
  if (userAgent) {
    const obj4 = { userAgent };
    tmp5 = obj4;
  }
  const merged = Object.assign(tmp5);
  const merged1 = Object.assign(arg0);
  const session = tmpResult.makeSession(obj2);
  const session1 = isolationScope.getSession();
  let tmp10 = session1;
  if (session1) {
    tmp10 = "ok" === session1.status;
  }
  if (tmp10) {
    tmp(13072).updateSession(session1, { status: "exited" });
    const tmpResult2 = tmp(13072);
  }
  endSession();
  isolationScope.setSession(session);
  currentScope.setSession(session);
  return session;
};
export const withMonitor = function withMonitor(monitorSlug, arg1, arg2) {
  _require = monitorSlug;
  dependencyMap = arg1;
  function finishCheckIn(status) {
    const obj = { monitorSlug, status, checkInId: captureCheckInResult, duration: _mod13063.timestampInSeconds() - closure_3 };
    const currentScope = _mod13076.getCurrentScope();
    const client = _mod13076.getClient();
    if (client) {
      if (client.captureCheckIn) {
        captureCheckInResult = client.captureCheckIn(obj, undefined, currentScope);
      } else if (tmp(13077).DEBUG_BUILD) {
        const logger2 = tmp(13049).logger;
        logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
      }
    } else if (tmp(13077).DEBUG_BUILD) {
      const logger = tmp(13049).logger;
      logger.warn("Cannot capture check-in. No client defined.");
    }
    _mod13060.uuid4();
  }
  let currentScope = require("module_13076").getCurrentScope();
  let obj = { monitorSlug, status: "in_progress" };
  let obj2 = require("module_13076");
  let client = require("module_13076").getClient();
  if (client) {
    if (client.captureCheckIn) {
      let captureCheckInResult = client.captureCheckIn(obj, arg2, currentScope);
    } else if (tmp(13077).DEBUG_BUILD) {
      let logger2 = tmp(13049).logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
    asyncGeneratorStep = captureCheckInResult;
    closure_3 = tmp(13063).timestampInSeconds();
    const tmpResult = tmp(13063);
    return tmp(13076).withIsolationScope(() => {
      try {
        const tmp3 = closure_1();
        if (obj.isThenable(tmp3)) {
          const resolved = Promise.resolve(tmp3);
          resolved.then(() => {
            finishCheckIn("ok");
          }, (arg0) => {
            finishCheckIn("error");
            throw arg0;
          });
        } else {
          finishCheckIn("ok");
        }
        return tmp3;
      } catch (tmp12) {
        finishCheckIn("error");
        throw tmp12;
      }
    });
  } else if (tmp(13077).DEBUG_BUILD) {
    let logger = tmp(13049).logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  let obj3 = require("module_13076");
  captureCheckInResult = require("module_13060").uuid4();
};
