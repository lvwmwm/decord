// Module ID: 7284
// Function ID: 58724
// Name: captureCheckIn
// Dependencies: [5, 7263, 7285, 7264, 7236, 7247, 7250, 7243, 7273, 7237, 7259]
// Exports: addEventProcessor, captureEvent, captureException, captureMessage, captureSession, close, flush, isEnabled, isInitialized, lastEventId, setContext, setExtra, setExtras, setTag, setTags, setUser, startSession, withMonitor

// Module 7284 (captureCheckIn)
import asyncGeneratorStep from "getFirstException";

function captureCheckIn(arg0, arg1) {
  const currentScope = require(7263) /* getCurrentScope */.getCurrentScope();
  const obj = require(7263) /* getCurrentScope */;
  const client = require(7263) /* getCurrentScope */.getClient();
  if (client) {
    if (client.captureCheckIn) {
      return client.captureCheckIn(arg0, arg1, currentScope);
    } else if (require(7264).DEBUG_BUILD) {
      const logger2 = require(7236) /* consoleSandbox */.logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
  } else if (require(7264).DEBUG_BUILD) {
    const logger = require(7236) /* consoleSandbox */.logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  const obj2 = require(7263) /* getCurrentScope */;
  return require(7247) /* getFirstException */.uuid4();
}
async function _flush(arg0, arg1) {
  if (obj) {
    return obj.resume();
  } else {
    const client = outer2_0(outer2_1[1]).getClient();
    if (client) {
      let flushResult = client.flush(arg0);
    } else {
      if (outer2_0(outer2_1[3]).DEBUG_BUILD) {
        const logger = outer2_0(outer2_1[4]).logger;
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
    const client = outer2_0(outer2_1[1]).getClient();
    if (client) {
      let closeResult = client.close(arg0);
    } else {
      if (outer2_0(outer2_1[3]).DEBUG_BUILD) {
        const logger = outer2_0(outer2_1[4]).logger;
        logger.warn("Cannot flush events and disable SDK. No client defined.");
      }
      closeResult = Promise.resolve(false);
    }
    return closeResult;
  }
}
function endSession() {
  const isolationScope = require(7263) /* getCurrentScope */.getIsolationScope();
  const obj = require(7263) /* getCurrentScope */;
  const currentScope = require(7263) /* getCurrentScope */.getCurrentScope();
  const tmp = currentScope.getSession() || isolationScope.getSession();
  if (tmp) {
    require(7259) /* updateSession */.closeSession(tmp);
    const obj5 = require(7259) /* updateSession */;
  }
  _sendSessionUpdate();
  isolationScope.setSession();
  currentScope.setSession();
}
function _sendSessionUpdate() {
  const isolationScope = require(7263) /* getCurrentScope */.getIsolationScope();
  const obj = require(7263) /* getCurrentScope */;
  const currentScope = require(7263) /* getCurrentScope */.getCurrentScope();
  const obj3 = require(7263) /* getCurrentScope */;
  const client = require(7263) /* getCurrentScope */.getClient();
  const tmp = currentScope.getSession() || isolationScope.getSession();
  let tmp2 = tmp;
  if (tmp) {
    tmp2 = client;
  }
  if (tmp2) {
    client.captureSession(tmp);
  }
}

export const addEventProcessor = function addEventProcessor(arg0) {
  const isolationScope = require(7263) /* getCurrentScope */.getIsolationScope();
  isolationScope.addEventProcessor(arg0);
};
export { captureCheckIn };
export const captureEvent = function captureEvent(arg0, arg1) {
  const currentScope = require(7263) /* getCurrentScope */.getCurrentScope();
  return currentScope.captureEvent(arg0, arg1);
};
export const captureException = function captureException(arg0, arg1) {
  const currentScope = require(7263) /* getCurrentScope */.getCurrentScope();
  const obj = require(7263) /* getCurrentScope */;
  return currentScope.captureException(arg0, require(7285) /* applyClientOptions */.parseEventHintOrCaptureContext(arg1));
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
  const currentScope = require(7263) /* getCurrentScope */.getCurrentScope();
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
  const client = require(7263) /* getCurrentScope */.getClient();
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
  return require(7263) /* getCurrentScope */.getClient();
};
export const lastEventId = function lastEventId() {
  const isolationScope = require(7263) /* getCurrentScope */.getIsolationScope();
  return isolationScope.lastEventId();
};
export const setContext = function setContext(arg0, arg1) {
  const isolationScope = require(7263) /* getCurrentScope */.getIsolationScope();
  isolationScope.setContext(arg0, arg1);
};
export const setExtra = function setExtra(arg0, arg1) {
  const isolationScope = require(7263) /* getCurrentScope */.getIsolationScope();
  isolationScope.setExtra(arg0, arg1);
};
export const setExtras = function setExtras(arg0) {
  const isolationScope = require(7263) /* getCurrentScope */.getIsolationScope();
  isolationScope.setExtras(arg0);
};
export const setTag = function setTag(arg0, arg1) {
  const isolationScope = require(7263) /* getCurrentScope */.getIsolationScope();
  isolationScope.setTag(arg0, arg1);
};
export const setTags = function setTags(arg0) {
  const isolationScope = require(7263) /* getCurrentScope */.getIsolationScope();
  isolationScope.setTags(arg0);
};
export const setUser = function setUser(arg0) {
  const isolationScope = require(7263) /* getCurrentScope */.getIsolationScope();
  isolationScope.setUser(arg0);
};
export const startSession = function startSession(arg0) {
  let environment;
  let release;
  let obj = require(7263) /* getCurrentScope */;
  const client = obj.getClient();
  const isolationScope = require(7263) /* getCurrentScope */.getIsolationScope();
  const obj3 = require(7263) /* getCurrentScope */;
  const currentScope = require(7263) /* getCurrentScope */.getCurrentScope();
  let options = client;
  if (client) {
    options = client.getOptions();
  }
  if (!options) {
    options = {};
  }
  ({ environment, release } = options);
  if (undefined === environment) {
    environment = require(7273).DEFAULT_ENVIRONMENT;
  }
  const obj5 = require(7263) /* getCurrentScope */;
  const userAgent = require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.navigator || {}.userAgent;
  const tmp3 = require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.navigator || {};
  obj = { release, environment };
  const obj8 = require(7259) /* updateSession */;
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
    require(7259) /* updateSession */.updateSession(session1, obj1);
    const obj11 = require(7259) /* updateSession */;
  }
  endSession();
  isolationScope.setSession(session);
  currentScope.setSession(session);
  return session;
};
export const withMonitor = function withMonitor(monitorSlug) {
  const _require = monitorSlug;
  const dependencyMap = arg1;
  function finishCheckIn(status) {
    const obj = { monitorSlug, status, checkInId: closure_2, duration: monitorSlug(7250).timestampInSeconds() - callback };
    callback(obj);
  }
  let closure_2 = captureCheckIn({ monitorSlug, status: "in_progress" }, arg2);
  captureCheckIn = _require(7250).timestampInSeconds();
  let obj = { monitorSlug, status: "in_progress" };
  const obj2 = _require(7250);
  return _require(7263).withIsolationScope(() => {
    const tmp = dependencyMap();
    if (obj.isThenable(tmp)) {
      const resolved = Promise.resolve(tmp);
      resolved.then(() => {
        outer1_4("ok");
      }, (arg0) => {
        outer1_4("error");
        throw arg0;
      });
    } else {
      finishCheckIn("ok");
    }
    return tmp;
  });
};
