// Module ID: 1136
// Function ID: 12921
// Name: getDefaultIdleNavigationSpanOptions
// Dependencies: [27, 794, 1098, 1137, 1134]
// Exports: addDefaultOpForSpanFrom, addThreadInfoToSpan, setMainThreadInfo, startIdleNavigationSpan

// Module 1136 (getDefaultIdleNavigationSpanOptions)
import { AppState } from "get ActivityIndicator";

function getDefaultIdleNavigationSpanOptions() {
  const obj = { name: c3, op: "navigation", forceTransaction: true, scope: require(794) /* registerSpanErrorInstrumentation */.getCurrentScope() };
  return obj;
}
function isSentryInteractionSpan(activeSpan) {
  const items = [require(1134).SPAN_ORIGIN_AUTO_INTERACTION, require(1134).SPAN_ORIGIN_MANUAL_INTERACTION];
  const obj = require(794) /* registerSpanErrorInstrumentation */;
  return items.includes(require(794) /* registerSpanErrorInstrumentation */.spanToJSON(activeSpan).origin || "");
}
function clearActiveSpanFromScope(currentScope) {
  delete tmp[tmp2];
}
let c3 = "Route Change";
let obj = { idleTimeout: 1000, finalTimeout: 600000 };
function startIdleSpan(name) {
  let finalTimeout;
  let idleTimeout;
  ({ finalTimeout, idleTimeout } = arg1);
  let obj = require(794) /* registerSpanErrorInstrumentation */;
  const client = obj.getClient();
  if (client) {
    if ("background" === AppState.currentState) {
      const debug2 = require(794) /* registerSpanErrorInstrumentation */.debug;
      const _HermesInternal = HermesInternal;
      debug2.log("[startIdleSpan] App is already in background, not starting span for " + name.name);
      const SentryNonRecordingSpan2 = require(794) /* registerSpanErrorInstrumentation */.SentryNonRecordingSpan;
      const prototype2 = SentryNonRecordingSpan2.prototype;
      const sentryNonRecordingSpan2 = new SentryNonRecordingSpan2();
      return sentryNonRecordingSpan2;
    } else {
      const currentScope = require(794) /* registerSpanErrorInstrumentation */.getCurrentScope();
      obj = {};
      const obj2 = require(794) /* registerSpanErrorInstrumentation */;
      obj.traceId = require(794) /* registerSpanErrorInstrumentation */.generateTraceId();
      const _Math = Math;
      obj.sampleRand = Math.random();
      const result = currentScope.setPropagationContext(obj);
      const obj5 = require(794) /* registerSpanErrorInstrumentation */;
      obj = { finalTimeout, idleTimeout };
      const startIdleSpanResult = require(794) /* registerSpanErrorInstrumentation */.startIdleSpan(name, obj);
      const obj6 = require(794) /* registerSpanErrorInstrumentation */;
      require(1137) /* discardEmptyNavigationSpan */.cancelInBackground(client, startIdleSpanResult);
      return startIdleSpanResult;
    }
  } else {
    const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
    debug.warn("[startIdleSpan] Can't create idle span, missing client.");
    const SentryNonRecordingSpan = require(794) /* registerSpanErrorInstrumentation */.SentryNonRecordingSpan;
    const prototype = SentryNonRecordingSpan.prototype;
    const sentryNonRecordingSpan = new SentryNonRecordingSpan();
    return sentryNonRecordingSpan;
  }
}
const _sentrySpan = "_sentrySpan";

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
    const client = require(794) /* registerSpanErrorInstrumentation */.getClient();
    const obj3 = require(794) /* registerSpanErrorInstrumentation */;
    if (client) {
      const activeSpan = obj3.getActiveSpan();
      let isRootSpanResult = activeSpan;
      if (activeSpan) {
        isRootSpanResult = require(1098) /* isSentrySpan */.isRootSpan(activeSpan);
        const obj5 = require(1098) /* isSentrySpan */;
      }
      if (isRootSpanResult) {
        isRootSpanResult = isSentryInteractionSpan(activeSpan);
      }
      clearActiveSpanFromScope(require(794) /* registerSpanErrorInstrumentation */.getCurrentScope());
      if (isRootSpanResult) {
        if (tmp3) {
          const debug3 = require(794) /* registerSpanErrorInstrumentation */.debug;
          const _HermesInternal2 = HermesInternal;
          debug3.log("[startIdleNavigationSpan] Not canceling " + require(794) /* registerSpanErrorInstrumentation */.spanToJSON(activeSpan).op + " transaction because navigation is from app restart - preserving error context.");
          const obj9 = require(794) /* registerSpanErrorInstrumentation */;
        }
        const _Object = Object;
        const _Object2 = Object;
        const merged = Object.assign(Object.assign({}, getDefaultIdleNavigationSpanOptions()), arg0);
        obj = { finalTimeout, idleTimeout };
        const obj11 = startIdleSpan(merged, obj);
        const debug4 = require(794) /* registerSpanErrorInstrumentation */.debug;
        let str7 = merged.op;
        if (!str7) {
          str7 = "unknown op";
        }
        const _HermesInternal3 = HermesInternal;
        debug4.log("[startIdleNavigationSpan] Starting " + str7 + " transaction \"" + merged.name + "\" on scope");
        const result = require(1137) /* discardEmptyNavigationSpan */.adjustTransactionDuration(client, obj11, finalTimeout);
        const attr = obj11.setAttribute(require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, require(1134).SPAN_ORIGIN_AUTO_NAVIGATION_CUSTOM);
        return obj11;
      }
      if (isRootSpanResult) {
        const debug2 = require(794) /* registerSpanErrorInstrumentation */.debug;
        const _HermesInternal = HermesInternal;
        debug2.log("[startIdleNavigationSpan] Canceling " + require(794) /* registerSpanErrorInstrumentation */.spanToJSON(activeSpan).op + " transaction because of a new navigation root span.");
        obj = { code: require(794) /* registerSpanErrorInstrumentation */.SPAN_STATUS_ERROR, message: "cancelled" };
        activeSpan.setStatus(obj);
        activeSpan.end();
        const obj7 = require(794) /* registerSpanErrorInstrumentation */;
      }
      const obj6 = require(794) /* registerSpanErrorInstrumentation */;
    } else {
      const debug = obj3.debug;
      debug.warn("[startIdleNavigationSpan] Can't create route change span, missing client.");
    }
    const obj2 = require(794) /* registerSpanErrorInstrumentation */;
    tmp3 = undefined !== isAppRestart && isAppRestart;
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
      const attr = setAttribute.setAttribute(outer1_0(outer1_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "default");
    }
  });
};
export const SPAN_THREAD_NAME = "thread.name";
export const SPAN_THREAD_NAME_MAIN = "main";
export const SPAN_THREAD_NAME_JAVASCRIPT = "javascript";
export const addThreadInfoToSpan = function addThreadInfoToSpan(on) {
  on.on("spanStart", (setAttribute) => {
    const data = outer1_0(outer1_1[1]).spanToJSON(setAttribute).data;
    let prop;
    if (null !== data) {
      if (undefined !== data) {
        prop = data["thread.name"];
      }
    }
    if (!prop) {
      const attr = setAttribute.setAttribute("thread.name", "javascript");
    }
  });
};
export const setMainThreadInfo = function setMainThreadInfo(childSpanJSON) {
  childSpanJSON.data = childSpanJSON.data || {};
  childSpanJSON.data["thread.name"] = "main";
  return childSpanJSON;
};
