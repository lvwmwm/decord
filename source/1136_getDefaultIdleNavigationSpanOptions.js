// Module ID: 1136
// Function ID: 12915
// Name: getDefaultIdleNavigationSpanOptions
// Dependencies: []
// Exports: addDefaultOpForSpanFrom, addThreadInfoToSpan, setMainThreadInfo, startIdleNavigationSpan

// Module 1136 (getDefaultIdleNavigationSpanOptions)
function getDefaultIdleNavigationSpanOptions() {
  const obj = { -9223372036854775808: "white", 0: 15, 0: "500", name: closure_3, scope: require(dependencyMap[1]).getCurrentScope() };
  return obj;
}
function isSentryInteractionSpan(activeSpan) {
  const items = [require(dependencyMap[4]).SPAN_ORIGIN_AUTO_INTERACTION, require(dependencyMap[4]).SPAN_ORIGIN_MANUAL_INTERACTION];
  const obj = require(dependencyMap[1]);
  return items.includes(require(dependencyMap[1]).spanToJSON(activeSpan).origin || "");
}
function clearActiveSpanFromScope(currentScope) {
  delete r0[r1];
}
const AppState = require(dependencyMap[0]).AppState;
let closure_3 = "Route Change";
const obj = { compressionMethod: 20, GemLevel2SpotIllustration: null };
function startIdleSpan(name) {
  let finalTimeout;
  let idleTimeout;
  ({ finalTimeout, idleTimeout } = arg1);
  let obj = require(dependencyMap[1]);
  const client = obj.getClient();
  if (client) {
    if ("background" === AppState.currentState) {
      const debug2 = require(dependencyMap[1]).debug;
      const _HermesInternal = HermesInternal;
      debug2.log("[startIdleSpan] App is already in background, not starting span for " + name.name);
      const SentryNonRecordingSpan2 = require(dependencyMap[1]).SentryNonRecordingSpan;
      const prototype2 = SentryNonRecordingSpan2.prototype;
      const sentryNonRecordingSpan2 = new SentryNonRecordingSpan2();
      return sentryNonRecordingSpan2;
    } else {
      const currentScope = require(dependencyMap[1]).getCurrentScope();
      obj = {};
      const obj2 = require(dependencyMap[1]);
      obj.traceId = require(dependencyMap[1]).generateTraceId();
      const _Math = Math;
      obj.sampleRand = Math.random();
      const result = currentScope.setPropagationContext(obj);
      const obj5 = require(dependencyMap[1]);
      obj = { finalTimeout, idleTimeout };
      const startIdleSpanResult = require(dependencyMap[1]).startIdleSpan(name, obj);
      const obj6 = require(dependencyMap[1]);
      require(dependencyMap[3]).cancelInBackground(client, startIdleSpanResult);
      return startIdleSpanResult;
    }
  } else {
    const debug = require(dependencyMap[1]).debug;
    debug.warn("[startIdleSpan] Can't create idle span, missing client.");
    const SentryNonRecordingSpan = require(dependencyMap[1]).SentryNonRecordingSpan;
    const prototype = SentryNonRecordingSpan.prototype;
    const sentryNonRecordingSpan = new SentryNonRecordingSpan();
    return sentryNonRecordingSpan;
  }
}
let closure_6 = "_sentrySpan";

export const DEFAULT_NAVIGATION_SPAN_NAME = "Route Change";
export const defaultIdleOptions = obj;
export const startIdleNavigationSpan = function startIdleNavigationSpan(arg0) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let obj = arguments[1];
    }
    let finalTimeout = obj.finalTimeout;
    if (undefined === finalTimeout) {
      finalTimeout = obj.finalTimeout;
    }
    let idleTimeout = obj.idleTimeout;
    if (undefined === idleTimeout) {
      idleTimeout = obj.idleTimeout;
    }
    const isAppRestart = obj.isAppRestart;
    const client = require(dependencyMap[1]).getClient();
    const obj3 = require(dependencyMap[1]);
    if (client) {
      const activeSpan = obj3.getActiveSpan();
      let isRootSpanResult = activeSpan;
      if (activeSpan) {
        isRootSpanResult = require(dependencyMap[2]).isRootSpan(activeSpan);
        const obj5 = require(dependencyMap[2]);
      }
      if (isRootSpanResult) {
        isRootSpanResult = isSentryInteractionSpan(activeSpan);
      }
      clearActiveSpanFromScope(require(dependencyMap[1]).getCurrentScope());
      if (isRootSpanResult) {
        if (tmp3) {
          const debug3 = require(dependencyMap[1]).debug;
          const _HermesInternal2 = HermesInternal;
          debug3.log("[startIdleNavigationSpan] Not canceling " + require(dependencyMap[1]).spanToJSON(activeSpan).op + " transaction because navigation is from app restart - preserving error context.");
          const obj9 = require(dependencyMap[1]);
        }
        const _Object = Object;
        const _Object2 = Object;
        const merged = Object.assign(Object.assign({}, getDefaultIdleNavigationSpanOptions()), arg0);
        obj = { finalTimeout, idleTimeout };
        const obj11 = startIdleSpan(merged, obj);
        const debug4 = require(dependencyMap[1]).debug;
        let str7 = merged.op;
        if (!str7) {
          str7 = "unknown op";
        }
        const _HermesInternal3 = HermesInternal;
        debug4.log("[startIdleNavigationSpan] Starting " + str7 + " transaction \"" + merged.name + "\" on scope");
        const result = require(dependencyMap[3]).adjustTransactionDuration(client, obj11, finalTimeout);
        const attr = obj11.setAttribute(require(dependencyMap[1]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, require(dependencyMap[4]).SPAN_ORIGIN_AUTO_NAVIGATION_CUSTOM);
        return obj11;
      }
      if (isRootSpanResult) {
        const debug2 = require(dependencyMap[1]).debug;
        const _HermesInternal = HermesInternal;
        debug2.log("[startIdleNavigationSpan] Canceling " + require(dependencyMap[1]).spanToJSON(activeSpan).op + " transaction because of a new navigation root span.");
        obj = { code: require(dependencyMap[1]).SPAN_STATUS_ERROR, message: "cancelled" };
        activeSpan.setStatus(obj);
        activeSpan.end();
        const obj7 = require(dependencyMap[1]);
      }
      const obj6 = require(dependencyMap[1]);
    } else {
      const debug = obj3.debug;
      debug.warn("[startIdleNavigationSpan] Can't create route change span, missing client.");
    }
    const obj2 = require(dependencyMap[1]);
    const tmp3 = undefined !== isAppRestart && isAppRestart;
  }
  obj = {};
};
export { startIdleSpan };
export { getDefaultIdleNavigationSpanOptions };
export { isSentryInteractionSpan };
export const SCOPE_SPAN_FIELD = "_sentrySpan";
export { clearActiveSpanFromScope };
export const addDefaultOpForSpanFrom = function addDefaultOpForSpanFrom(on) {
  on.on("spanStart", (setAttribute) => {
    if (!obj.spanToJSON(setAttribute).op) {
      const attr = setAttribute.setAttribute(callback(closure_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "default");
    }
  });
};
export const SPAN_THREAD_NAME = "thread.name";
export const SPAN_THREAD_NAME_MAIN = "main";
export const SPAN_THREAD_NAME_JAVASCRIPT = "javascript";
export const addThreadInfoToSpan = function addThreadInfoToSpan(on) {
  on.on("spanStart", (setAttribute) => {
    const data = callback(closure_1[1]).spanToJSON(setAttribute).data;
    let prop;
    if (null !== data) {
      if (undefined !== data) {
        prop = data.thread.name;
      }
    }
    if (!prop) {
      const attr = setAttribute.setAttribute("thread.name", "javascript");
    }
  });
};
export const setMainThreadInfo = function setMainThreadInfo(childSpanJSON) {
  childSpanJSON.data = childSpanJSON.data || {};
  childSpanJSON.data.thread.name = "main";
  return childSpanJSON;
};
