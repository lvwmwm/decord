// Module ID: 7279
// Function ID: 58661
// Name: captureCheckIn
// Dependencies: []
// Exports: addEventProcessor, captureEvent, captureException, captureMessage, captureSession, close, flush, isEnabled, isInitialized, lastEventId, setContext, setExtra, setExtras, setTag, setTags, setUser, startSession, withMonitor

// Module 7279 (captureCheckIn)
function captureCheckIn(arg0, arg1) {
  const currentScope = require(dependencyMap[1]).getCurrentScope();
  const obj = require(dependencyMap[1]);
  const client = require(dependencyMap[1]).getClient();
  if (client) {
    if (client.captureCheckIn) {
      return client.captureCheckIn(arg0, arg1, currentScope);
    } else if (require(dependencyMap[3]).DEBUG_BUILD) {
      const logger2 = require(dependencyMap[4]).logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
  } else if (require(dependencyMap[3]).DEBUG_BUILD) {
    const logger = require(dependencyMap[4]).logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  const obj2 = require(dependencyMap[1]);
  return require(dependencyMap[5]).uuid4();
}
async function _flush(arg0, arg1) {
  if (obj) {
    return obj.resume();
  } else {
    const client = callback(closure_1[1]).getClient();
    if (client) {
      let flushResult = client.flush(arg0);
    } else {
      if (callback(closure_1[3]).DEBUG_BUILD) {
        const logger = callback(closure_1[4]).logger;
        logger.warn("Cannot flush events. No client defined.");
      }
      flushResult = Promise.resolve(false);
    }
    return flushResult;
  }
}
async function _close(arg0, arg1) {
  if (obj) {
    return obj.resume();
  } else {
    const client = callback(closure_1[1]).getClient();
    if (client) {
      let closeResult = client.close(arg0);
    } else {
      if (callback(closure_1[3]).DEBUG_BUILD) {
        const logger = callback(closure_1[4]).logger;
        logger.warn("Cannot flush events and disable SDK. No client defined.");
      }
      closeResult = Promise.resolve(false);
    }
    return closeResult;
  }
}
function endSession() {
  const isolationScope = require(dependencyMap[1]).getIsolationScope();
  const obj = require(dependencyMap[1]);
  const currentScope = require(dependencyMap[1]).getCurrentScope();
  const tmp = currentScope.getSession() || isolationScope.getSession();
  if (tmp) {
    require(dependencyMap[10]).closeSession(tmp);
    const obj5 = require(dependencyMap[10]);
  }
  _sendSessionUpdate();
  isolationScope.setSession();
  currentScope.setSession();
}
function _sendSessionUpdate() {
  const isolationScope = require(dependencyMap[1]).getIsolationScope();
  const obj = require(dependencyMap[1]);
  const currentScope = require(dependencyMap[1]).getCurrentScope();
  const obj3 = require(dependencyMap[1]);
  const client = require(dependencyMap[1]).getClient();
  const tmp = currentScope.getSession() || isolationScope.getSession();
  let tmp2 = tmp;
  if (tmp) {
    tmp2 = client;
  }
  if (tmp2) {
    client.captureSession(tmp);
  }
}
let closure_2 = require(dependencyMap[0]);

export const addEventProcessor = function addEventProcessor(arg0) {
  const isolationScope = require(dependencyMap[1]).getIsolationScope();
  isolationScope.addEventProcessor(arg0);
};
export { captureCheckIn };
export const captureEvent = function captureEvent(arg0, arg1) {
  const currentScope = require(dependencyMap[1]).getCurrentScope();
  return currentScope.captureEvent(arg0, arg1);
};
export const captureException = function captureException(arg0, arg1) {
  const currentScope = require(dependencyMap[1]).getCurrentScope();
  const obj = require(dependencyMap[1]);
  return currentScope.captureException(arg0, require(dependencyMap[2]).parseEventHintOrCaptureContext(arg1));
};
export const captureMessage = function captureMessage(arg0, captureContext) {
  let tmp2;
  if ("string" === typeof captureContext) {
    tmp2 = captureContext;
  }
  let tmp3;
  if ("string" !== typeof captureContext) {
    const obj = { captureContext };
    tmp3 = obj;
  }
  const currentScope = require(dependencyMap[1]).getCurrentScope();
  return currentScope.captureMessage(arg0, tmp2, tmp3);
};
export const captureSession = function captureSession() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      if (arguments[0]) {
        endSession();
      }
    }
  }
  _sendSessionUpdate();
};
export const close = function close(arg0) {
  return _close(...arguments);
};
export { endSession };
export const flush = function flush(arg0) {
  return _flush(...arguments);
};
export const isEnabled = function isEnabled() {
  const client = require(dependencyMap[1]).getClient();
  let transport = !tmp;
  if (!!client) {
    transport = false !== client.getOptions().enabled;
  }
  if (transport) {
    transport = client.getTransport();
  }
  return transport;
};
export const isInitialized = function isInitialized() {
  return require(dependencyMap[1]).getClient();
};
export const lastEventId = function lastEventId() {
  const isolationScope = require(dependencyMap[1]).getIsolationScope();
  return isolationScope.lastEventId();
};
export const setContext = function setContext(arg0, arg1) {
  const isolationScope = require(dependencyMap[1]).getIsolationScope();
  isolationScope.setContext(arg0, arg1);
};
export const setExtra = function setExtra(arg0, arg1) {
  const isolationScope = require(dependencyMap[1]).getIsolationScope();
  isolationScope.setExtra(arg0, arg1);
};
export const setExtras = function setExtras(arg0) {
  const isolationScope = require(dependencyMap[1]).getIsolationScope();
  isolationScope.setExtras(arg0);
};
export const setTag = function setTag(arg0, arg1) {
  const isolationScope = require(dependencyMap[1]).getIsolationScope();
  isolationScope.setTag(arg0, arg1);
};
export const setTags = function setTags(arg0) {
  const isolationScope = require(dependencyMap[1]).getIsolationScope();
  isolationScope.setTags(arg0);
};
export const setUser = function setUser(arg0) {
  const isolationScope = require(dependencyMap[1]).getIsolationScope();
  isolationScope.setUser(arg0);
};
export const startSession = function startSession(arg0) {
  let environment;
  let release;
  let obj = require(dependencyMap[1]);
  const client = obj.getClient();
  const isolationScope = require(dependencyMap[1]).getIsolationScope();
  const obj3 = require(dependencyMap[1]);
  const currentScope = require(dependencyMap[1]).getCurrentScope();
  let options = client;
  if (client) {
    options = client.getOptions();
  }
  if (!options) {
    options = {};
  }
  ({ environment, release } = options);
  if (undefined === environment) {
    environment = require(dependencyMap[8]).DEFAULT_ENVIRONMENT;
  }
  const obj5 = require(dependencyMap[1]);
  const userAgent = require(dependencyMap[9]).GLOBAL_OBJ.navigator || {}.userAgent;
  const tmp3 = require(dependencyMap[9]).GLOBAL_OBJ.navigator || {};
  obj = { release, environment };
  const obj8 = require(dependencyMap[10]);
  obj.user = currentScope.getUser() || isolationScope.getUser();
  let tmp5 = userAgent;
  if (userAgent) {
    obj = { userAgent };
    tmp5 = obj;
  }
  const session = obj8.makeSession(Object.assign(obj, tmp5, arg0));
  const session1 = isolationScope.getSession();
  let tmp8 = session1;
  if (session1) {
    tmp8 = "ok" === session1.status;
  }
  if (tmp8) {
    const obj1 = { status: "exited" };
    require(dependencyMap[10]).updateSession(session1, obj1);
    const obj11 = require(dependencyMap[10]);
  }
  endSession();
  isolationScope.setSession(session);
  currentScope.setSession(session);
  return session;
};
export const withMonitor = function withMonitor(monitorSlug) {
  const require = monitorSlug;
  const dependencyMap = arg1;
  function finishCheckIn(status) {
    const obj = { monitorSlug: status, status, checkInId: closure_2, duration: status(arg1[6]).timestampInSeconds() - callback };
    callback(obj);
  }
  let closure_2 = captureCheckIn({ monitorSlug, status: "in_progress" }, arg2);
  const captureCheckIn = require(dependencyMap[6]).timestampInSeconds();
  const obj = { monitorSlug, status: "in_progress" };
  const obj2 = require(dependencyMap[6]);
  return require(dependencyMap[1]).withIsolationScope(() => {
    const tmp = arg1();
    if (obj.isThenable(tmp)) {
      const resolved = Promise.resolve(tmp);
      resolved.then(() => {
        callback("ok");
      }, (arg0) => {
        callback("error");
        throw arg0;
      });
    } else {
      finishCheckIn("ok");
    }
    return tmp;
  });
};
