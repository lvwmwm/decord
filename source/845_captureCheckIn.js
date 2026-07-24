// Module ID: 845
// Function ID: 9405
// Name: captureCheckIn
// Dependencies: [5, 825, 846, 800, 801, 807, 815, 804, 842, 798, 822]
// Exports: addEventProcessor, captureEvent, captureException, captureMessage, captureSession, close, flush, isEnabled, isInitialized, lastEventId, setContext, setExtra, setExtras, setTag, setTags, setUser, startSession, withMonitor

// Module 845 (captureCheckIn)
import asyncGeneratorStep from "getFirstException";

function captureCheckIn(arg0, arg1) {
  const currentScope = require(825) /* getCurrentScope */.getCurrentScope();
  const obj = require(825) /* getCurrentScope */;
  const client = require(825) /* getCurrentScope */.getClient();
  if (client) {
    if (client.captureCheckIn) {
      return client.captureCheckIn(arg0, arg1, currentScope);
    } else if (require(800).DEBUG_BUILD) {
      const debug2 = require(801) /* consoleSandbox */.debug;
      debug2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
  } else if (require(800).DEBUG_BUILD) {
    const debug = require(801) /* consoleSandbox */.debug;
    debug.warn("Cannot capture check-in. No client defined.");
  }
  const obj2 = require(825) /* getCurrentScope */;
  return require(807) /* getFirstException */.uuid4();
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
        const debug = outer2_0(outer2_1[4]).debug;
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
    const client = outer2_0(outer2_1[1]).getClient();
    if (client) {
      let closeResult = client.close(arg0);
    } else {
      if (outer2_0(outer2_1[3]).DEBUG_BUILD) {
        const debug = outer2_0(outer2_1[4]).debug;
        debug.warn("Cannot flush events and disable SDK. No client defined.");
      }
      closeResult = Promise.resolve(false);
    }
    return closeResult;
  }
}
function endSession() {
  const isolationScope = require(825) /* getCurrentScope */.getIsolationScope();
  const obj = require(825) /* getCurrentScope */;
  const currentScope = require(825) /* getCurrentScope */.getCurrentScope();
  const tmp = currentScope.getSession() || isolationScope.getSession();
  if (tmp) {
    require(822) /* updateSession */.closeSession(tmp);
    const obj5 = require(822) /* updateSession */;
  }
  _sendSessionUpdate();
  isolationScope.setSession();
}
function _sendSessionUpdate() {
  const isolationScope = require(825) /* getCurrentScope */.getIsolationScope();
  const obj = require(825) /* getCurrentScope */;
  const client = require(825) /* getCurrentScope */.getClient();
  const session = isolationScope.getSession();
  let tmp2 = session;
  if (session) {
    tmp2 = client;
  }
  if (tmp2) {
    client.captureSession(session);
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addEventProcessor = function addEventProcessor(arg0) {
  const isolationScope = require(825) /* getCurrentScope */.getIsolationScope();
  isolationScope.addEventProcessor(arg0);
};
export { captureCheckIn };
export const captureEvent = function captureEvent(arg0, arg1) {
  const currentScope = require(825) /* getCurrentScope */.getCurrentScope();
  return currentScope.captureEvent(arg0, arg1);
};
export const captureException = function captureException(arg0, arg1) {
  const currentScope = require(825) /* getCurrentScope */.getCurrentScope();
  const obj = require(825) /* getCurrentScope */;
  return currentScope.captureException(arg0, require(846) /* applyClientOptions */.parseEventHintOrCaptureContext(arg1));
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
  const currentScope = require(825) /* getCurrentScope */.getCurrentScope();
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
  const client = require(825) /* getCurrentScope */.getClient();
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
  return require(825) /* getCurrentScope */.getClient();
};
export const lastEventId = function lastEventId() {
  const isolationScope = require(825) /* getCurrentScope */.getIsolationScope();
  return isolationScope.lastEventId();
};
export const setContext = function setContext(arg0, arg1) {
  const isolationScope = require(825) /* getCurrentScope */.getIsolationScope();
  isolationScope.setContext(arg0, arg1);
};
export const setExtra = function setExtra(arg0, arg1) {
  const isolationScope = require(825) /* getCurrentScope */.getIsolationScope();
  isolationScope.setExtra(arg0, arg1);
};
export const setExtras = function setExtras(arg0) {
  const isolationScope = require(825) /* getCurrentScope */.getIsolationScope();
  isolationScope.setExtras(arg0);
};
export const setTag = function setTag(arg0, arg1) {
  const isolationScope = require(825) /* getCurrentScope */.getIsolationScope();
  isolationScope.setTag(arg0, arg1);
};
export const setTags = function setTags(arg0) {
  const isolationScope = require(825) /* getCurrentScope */.getIsolationScope();
  isolationScope.setTags(arg0);
};
export const setUser = function setUser(arg0) {
  const isolationScope = require(825) /* getCurrentScope */.getIsolationScope();
  isolationScope.setUser(arg0);
};
export const startSession = function startSession(arg0) {
  let obj = require(825) /* getCurrentScope */;
  const isolationScope = obj.getIsolationScope();
  const currentScope = require(825) /* getCurrentScope */.getCurrentScope();
  const obj3 = require(825) /* getCurrentScope */;
  const userAgent = require(798).GLOBAL_OBJ.navigator || {}.userAgent;
  const tmp = require(798).GLOBAL_OBJ.navigator || {};
  obj = {};
  const obj5 = require(822) /* updateSession */;
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
    require(822) /* updateSession */.updateSession(session1, obj1);
    const obj8 = require(822) /* updateSession */;
  }
  endSession();
  isolationScope.setSession(session);
  return session;
};
export const withMonitor = function withMonitor(arg0, arg1, arg2) {
  const _require = arg0;
  let dependencyMap = arg1;
  let closure_2 = arg2;
  function runCallback(arg0, finishCheckIn) {
    finishCheckIn = function finishCheckIn(ok) {
      const obj = { monitorSlug: callback, status: ok, checkInId: callback, duration: callback(table[6]).timestampInSeconds() - table };
      runCallback(obj);
    };
    callback = runCallback({ monitorSlug: callback, status: "in_progress" }, finishCheckIn);
    const dependencyMap = callback(815).timestampInSeconds();
    const promise = dependencyMap();
    let obj = { monitorSlug: callback, status: "in_progress" };
    const obj2 = callback(815);
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
  return _require(825).withIsolationScope(() => {
    if (null != isolateTrace) {
      if (isolateTrace.isolateTrace) {
        let startNewTraceResult = callback(842).startNewTrace(runCallback);
        const obj = callback(842);
      }
      return startNewTraceResult;
    }
    startNewTraceResult = runCallback();
  });
};
