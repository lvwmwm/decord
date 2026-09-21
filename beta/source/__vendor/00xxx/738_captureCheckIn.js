// Module ID: 738
// Function ID: 739
// Name: captureCheckIn
// Dependencies: [5, 717, 739, 692, 693, 699, 707, 696, 735, 690, 714]
// Exports: addEventProcessor, captureEvent, captureException, captureMessage, captureSession, close, endSession, flush, isEnabled, isInitialized, lastEventId, setContext, setExtra, setExtras, setTag, setTags, setUser, startSession, withMonitor

// Module 738 (captureCheckIn)
import _mod690 from "module_690" /* 690 */;
import uuid4 from "uuid4" /* 699 */;
import dateTimestampInSeconds from "dateTimestampInSeconds" /* 707 */;
import closeSession from "closeSession" /* 714 */;
import _mod717 from "module_717" /* 717 */;
import _mod735 from "module_735" /* 735 */;
import applyClientOptions from "applyClientOptions" /* 739 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

function captureCheckIn(arg0, arg1) {
  const currentScope = _mod717.getCurrentScope();
  const client = _mod717.getClient();
  if (client) {
    if (client.captureCheckIn) {
      return client.captureCheckIn(arg0, arg1, currentScope);
    } else if (tmp(692).DEBUG_BUILD) {
      const debug2 = tmp(693).debug;
      debug2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
  } else if (tmp(692).DEBUG_BUILD) {
    const debug = tmp(693).debug;
    debug.warn("Cannot capture check-in. No client defined.");
  }
  return uuid4.uuid4();
}
let closure_4 = async function _flush(arg0, value) {
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
        const client = require("module_717").getClient();
        if (client) {
          client.flush(tmp13);
        } else {
          if (tmp14(tmp15[3]).DEBUG_BUILD) {
            const debug = tmp14(tmp15[4]).debug;
            debug.warn("Cannot flush events. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("module_717");
        tmp13 = closure_0;
      }
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
};
let closure_5 = async function _close(arg0, value) {
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
        const client = require("module_717").getClient();
        if (client) {
          client.close(tmp13);
        } else {
          if (tmp14(tmp15[3]).DEBUG_BUILD) {
            const debug = tmp14(tmp15[4]).debug;
            debug.warn("Cannot flush events and disable SDK. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("module_717");
        tmp13 = closure_0;
      }
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addEventProcessor = function addEventProcessor(arg0) {
  const isolationScope = _mod717.getIsolationScope();
  isolationScope.addEventProcessor(arg0);
};
export { captureCheckIn };
export const captureEvent = function captureEvent(arg0, arg1) {
  const currentScope = _mod717.getCurrentScope();
  return currentScope.captureEvent(arg0, arg1);
};
export const captureException = function captureException(arg0, arg1) {
  const currentScope = _mod717.getCurrentScope();
  return currentScope.captureException(arg0, applyClientOptions.parseEventHintOrCaptureContext(arg1));
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
  const currentScope = _mod717.getCurrentScope();
  return currentScope.captureMessage(arg0, tmp, tmp2);
};
export const captureSession = function captureSession() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const isolationScope = _mod717.getIsolationScope();
  const obj3 = _mod717;
  if (flag) {
    const currentScope = obj3.getCurrentScope();
    const tmp6 = currentScope.getSession() || isolationScope.getSession();
    if (tmp6) {
      tmp(714).closeSession(tmp6);
      const tmpResult = tmp(714);
    }
    const isolationScope1 = tmp(717).getIsolationScope();
    const tmpResult3 = tmp(717);
    const client = tmp(717).getClient();
    const session = isolationScope1.getSession();
    let tmp9 = session;
    if (session) {
      tmp9 = client;
    }
    if (tmp9) {
      client.captureSession(session);
    }
    isolationScope.setSession();
    const tmpResult4 = tmp(717);
  } else {
    const client1 = obj3.getClient();
    const session1 = isolationScope.getSession();
    let tmp4 = session1;
    if (session1) {
      tmp4 = client1;
    }
    if (tmp4) {
      client1.captureSession(session1);
    }
  }
};
export const close = function close(arg0) {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const endSession = function endSession() {
  const isolationScope = _mod717.getIsolationScope();
  const currentScope = _mod717.getCurrentScope();
  const tmp3 = currentScope.getSession() || isolationScope.getSession();
  if (tmp3) {
    tmp(714).closeSession(tmp3);
    const tmpResult = tmp(714);
  }
  const isolationScope1 = _mod717.getIsolationScope();
  const tmpResult3 = _mod717;
  const client = _mod717.getClient();
  const session = isolationScope1.getSession();
  let tmp6 = session;
  if (session) {
    tmp6 = client;
  }
  if (tmp6) {
    client.captureSession(session);
  }
  isolationScope.setSession();
};
export const flush = function flush(arg0) {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const isEnabled = function isEnabled() {
  const client = _mod717.getClient();
  let enabled;
  if (client != null) {
    enabled = client.getOptions().enabled;
  }
  let tmp2 = false !== enabled;
  if (tmp2) {
    let transport;
    if (client != null) {
      transport = client.getTransport();
    }
    tmp2 = transport;
  }
  return tmp2;
};
export const isInitialized = function isInitialized() {
  return _mod717.getClient();
};
export const lastEventId = function lastEventId() {
  const isolationScope = _mod717.getIsolationScope();
  return isolationScope.lastEventId();
};
export const setContext = function setContext(arg0, arg1) {
  const isolationScope = _mod717.getIsolationScope();
  isolationScope.setContext(arg0, arg1);
};
export const setExtra = function setExtra(arg0, arg1) {
  const isolationScope = _mod717.getIsolationScope();
  isolationScope.setExtra(arg0, arg1);
};
export const setExtras = function setExtras(arg0) {
  const isolationScope = _mod717.getIsolationScope();
  isolationScope.setExtras(arg0);
};
export const setTag = function setTag(arg0, arg1) {
  const isolationScope = _mod717.getIsolationScope();
  isolationScope.setTag(arg0, arg1);
};
export const setTags = function setTags(arg0) {
  const isolationScope = _mod717.getIsolationScope();
  isolationScope.setTags(arg0);
};
export const setUser = function setUser(arg0) {
  const isolationScope = _mod717.getIsolationScope();
  isolationScope.setUser(arg0);
};
export const startSession = function startSession(arg0) {
  const isolationScope = _mod717.getIsolationScope();
  const currentScope = _mod717.getCurrentScope();
  const userAgent = _mod690.GLOBAL_OBJ.navigator || {}.userAgent;
  const tmp3 = _mod690.GLOBAL_OBJ.navigator || {};
  const tmpResult = closeSession;
  const tmp4 = currentScope.getUser() || isolationScope.getUser();
  let tmp5 = userAgent;
  if (userAgent) {
    const obj4 = { userAgent };
    tmp5 = obj4;
  }
  const merged = Object.assign(tmp5);
  const merged1 = Object.assign(arg0);
  const session = tmpResult.makeSession({ user: currentScope.getUser() || isolationScope.getUser() });
  const session1 = isolationScope.getSession();
  let status;
  if (session1 != null) {
    status = session1.status;
  }
  if ("ok" === status) {
    tmp(714).updateSession(session1, { status: "exited" });
    const tmpResult7 = tmp(714);
  }
  const obj2 = { user: currentScope.getUser() || isolationScope.getUser() };
  const isolationScope1 = _mod717.getIsolationScope();
  const tmpResult8 = _mod717;
  const currentScope1 = _mod717.getCurrentScope();
  const tmp12 = currentScope1.getSession() || isolationScope1.getSession();
  if (tmp12) {
    tmp(714).closeSession(tmp12);
    const tmpResult10 = tmp(714);
  }
  const tmpResult9 = _mod717;
  const isolationScope2 = _mod717.getIsolationScope();
  const tmpResult11 = _mod717;
  const client = _mod717.getClient();
  const session2 = isolationScope2.getSession();
  let tmp15 = session2;
  if (session2) {
    tmp15 = client;
  }
  if (tmp15) {
    client.captureSession(session2);
  }
  isolationScope1.setSession();
  isolationScope.setSession(session);
  return session;
};
export const withMonitor = function withMonitor(monitorSlug, arg1, arg2) {
  _require = monitorSlug;
  dependencyMap = arg1;
  let isolateTrace = arg2;
  function runCallback() {
    function finishCheckIn(ok) {
      const obj = { monitorSlug: checkInId, status: ok, checkInId, duration: dateTimestampInSeconds.timestampInSeconds() - closure_1 };
      const currentScope = _mod717.getCurrentScope();
      const client = _mod717.getClient();
      if (client) {
        if (client.captureCheckIn) {
          client.captureCheckIn(obj, undefined, currentScope);
        } else if (tmp(692).DEBUG_BUILD) {
          const debug2 = tmp(693).debug;
          debug2.warn("Cannot capture check-in. Client does not support sending check-ins.");
        }
      } else if (tmp(692).DEBUG_BUILD) {
        const debug = tmp(693).debug;
        debug.warn("Cannot capture check-in. No client defined.");
      }
      uuid4.uuid4();
    }
    monitorSlug = runCallback({ monitorSlug, status: "in_progress" }, finishCheckIn);
    dependencyMap = monitorSlug(707).timestampInSeconds();
    try {
      const promise = dependencyMap();
      if (tmp3Result.isThenable(promise)) {
        let nextPromise = promise.then((result) => {
          finishCheckIn("ok");
          return result;
        }, (arg0) => {
          finishCheckIn("error");
          throw arg0;
        });
      } else {
        finishCheckIn("ok");
        nextPromise = promise;
      }
      return nextPromise;
    } catch (tmp10) {
      tmp("error");
      throw tmp10;
    }
  }
  return require("module_717").withIsolationScope(() => {
    isolateTrace = undefined;
    if (isolateTrace != null) {
      isolateTrace = isolateTrace.isolateTrace;
    }
    if (isolateTrace) {
      let startNewTraceResult = _mod735.startNewTrace(runCallback);
    } else {
      startNewTraceResult = runCallback();
    }
    return startNewTraceResult;
  });
};
