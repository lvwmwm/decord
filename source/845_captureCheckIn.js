// Module ID: 845
// Function ID: 9399
// Name: captureCheckIn
// Dependencies: []
// Exports: addEventProcessor, captureEvent, captureException, captureMessage, captureSession, close, flush, isEnabled, isInitialized, lastEventId, setContext, setExtra, setExtras, setTag, setTags, setUser, startSession, withMonitor

// Module 845 (captureCheckIn)
function captureCheckIn(arg0, arg1) {
  const currentScope = require(dependencyMap[1]).getCurrentScope();
  const obj = require(dependencyMap[1]);
  const client = require(dependencyMap[1]).getClient();
  if (client) {
    if (client.captureCheckIn) {
      return client.captureCheckIn(arg0, arg1, currentScope);
    } else if (require(dependencyMap[3]).DEBUG_BUILD) {
      const debug2 = require(dependencyMap[4]).debug;
      debug2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
  } else if (require(dependencyMap[3]).DEBUG_BUILD) {
    const debug = require(dependencyMap[4]).debug;
    debug.warn("Cannot capture check-in. No client defined.");
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
        const debug = callback(closure_1[4]).debug;
        debug.warn("Cannot flush events. No client defined.");
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
        const debug = callback(closure_1[4]).debug;
        debug.warn("Cannot flush events and disable SDK. No client defined.");
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
}
function _sendSessionUpdate() {
  const isolationScope = require(dependencyMap[1]).getIsolationScope();
  const obj = require(dependencyMap[1]);
  const client = require(dependencyMap[1]).getClient();
  const session = isolationScope.getSession();
  let tmp2 = session;
  if (session) {
    tmp2 = client;
  }
  if (tmp2) {
    client.captureSession(session);
  }
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

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
  let enabled;
  const client = require(dependencyMap[1]).getClient();
  if (null != client) {
    enabled = client.getOptions().enabled;
  }
  let tmp2 = false !== enabled;
  if (tmp2) {
    tmp2 = !(null == client || !client.getTransport());
    const tmp3 = null == client || !client.getTransport();
  }
  return tmp2;
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
  let obj = require(dependencyMap[1]);
  const isolationScope = obj.getIsolationScope();
  const currentScope = require(dependencyMap[1]).getCurrentScope();
  const obj3 = require(dependencyMap[1]);
  const userAgent = require(dependencyMap[9]).GLOBAL_OBJ.navigator || {}.userAgent;
  const tmp = require(dependencyMap[9]).GLOBAL_OBJ.navigator || {};
  obj = {};
  const obj5 = require(dependencyMap[10]);
  obj.user = currentScope.getUser() || isolationScope.getUser();
  let tmp3 = userAgent;
  if (userAgent) {
    obj = { userAgent };
    tmp3 = obj;
  }
  const session = obj5.makeSession(Object.assign(obj, tmp3, arg0));
  const session1 = isolationScope.getSession();
  let status;
  if (null != session1) {
    status = session1.status;
  }
  if ("ok" === status) {
    const obj1 = { status: "exited" };
    require(dependencyMap[10]).updateSession(session1, obj1);
    const obj8 = require(dependencyMap[10]);
  }
  endSession();
  isolationScope.setSession(session);
  return session;
};
export const withMonitor = function withMonitor(arg0, arg1, arg2) {
  const require = arg0;
  const dependencyMap = arg1;
  let closure_2 = arg2;
  function runCallback(arg0, arg1) {
    function finishCheckIn(ok) {
      const obj = { monitorSlug: callback, status: ok, checkInId: callback, duration: callback(closure_1[6]).timestampInSeconds() - closure_1 };
      callback2(obj);
    }
    const arg2 = finishCheckIn;
    const callback = runCallback({ monitorSlug: callback, status: "in_progress" }, arg2);
    const callback2 = callback(callback2[6]).timestampInSeconds();
    const promise = callback2();
    const obj = { monitorSlug: callback, status: "in_progress" };
    const obj2 = callback(callback2[6]);
    if (obj3.isThenable(promise)) {
      let nextPromise = promise.then((arg0) => {
        finishCheckIn("ok");
        return arg0;
      }, (arg0) => {
        finishCheckIn("error");
        throw arg0;
      });
    } else {
      finishCheckIn("ok");
      nextPromise = promise;
    }
    return nextPromise;
  }
  return require(dependencyMap[1]).withIsolationScope(() => {
    if (null != arg2) {
      if (arg2.isolateTrace) {
        let startNewTraceResult = arg0(arg1[8]).startNewTrace(runCallback);
        const obj = arg0(arg1[8]);
      }
      return startNewTraceResult;
    }
    startNewTraceResult = runCallback();
  });
};
