// Module ID: 1037
// Function ID: 1038
// Dependencies: [17, 998, 693]
// Exports: adjustTransactionDuration, cancelInBackground, ignoreEmptyBackNavigation, ignoreEmptyRouteChangeTransactions, onThisSpanEnd, onlySampleIfChildSpans

// Module 1037
import react_native from "react-native" /* 17 */;
import _mod693 from "module_693" /* 693 */;

const require = globalThis.__r;
let _require, dependencyMap;

const AppState = react_native.AppState;

export const onThisSpanEnd = function onThisSpanEnd(on, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  on.on("spanEnd", (arg0) => {
    if (closure_0 === arg0) {
      closure_1(arg0);
    }
  });
};
export const adjustTransactionDuration = (on, activeSpan, arg2) => {
  let closure_1;
  _require = activeSpan;
  dependencyMap = arg2;
  const obj = require("module_998");
  const tmp = _require;
  if (obj.isRootSpan(activeSpan)) {
    on.on("spanEnd", (arg0) => {
      if (arg0 === activeSpan) {
        const obj3 = _mod693;
        let timestamp = obj3.spanToJSON(obj).timestamp;
        const obj4 = _mod693;
        const start_timestamp = obj4.spanToJSON(obj).start_timestamp;
        const tmp6 = require;
        if (timestamp) {
          if (start_timestamp) {
            const diff = timestamp - start_timestamp;
            if (timestamp) {
              timestamp = diff > closure_1 || diff < 0;
              const tmp3 = diff > closure_1 || diff < 0;
            }
            if (timestamp) {
              const setStatus = obj.setStatus;
              const obj2 = { code: tmp6(693).SPAN_STATUS_ERROR, message: "deadline_exceeded" };
              setStatus(obj2);
              const attr = obj.setAttribute("maxTransactionDurationExceeded", "true");
            }
          }
        }
      }
    });
  } else {
    const debug = tmp(693).debug;
    debug.warn("Not sampling empty back spans only works for Sentry Transactions (Root Spans).");
  }
};
export const ignoreEmptyBackNavigation = (on, c4) => {
  const f82742 = (arg0) => {
    const obj = c4(f82742[2]);
    const data = obj.spanToJSON(arg0).data;
    let prop;
    if (null !== data) {
      if (undefined !== data) {
        prop = data["route.has_been_seen"];
      }
    }
    return true === prop;
  };
  const f82743 = () => {
    const debug = c4(f82742[2]).debug;
    debug.log("Not sampling transaction as route has been seen before. Pass ignoreEmptyBackNavigationTransactions = false to disable this feature.");
  };
  if (on) {
    if (c4) {
      const tmpResult = c4(f82742[1]);
      if (tmpResult.isRootSpan(c4)) {
        const tmpResult2 = c4(f82742[1]);
        if (tmpResult2.isSentrySpan(c4)) {
          on.on("spanEnd", (arg0) => {
            let tmp = closure_0;
            if (arg0 === closure_0) {
              if (f82744(tmp)) {
                closure_0 = tmp;
                let obj = closure_0(closure_1[2]);
                const spanDescendants = obj.getSpanDescendants(tmp);
                if (spanDescendants.filter((spanContext) => {
                  let tmp = spanContext.spanContext().spanId !== closure_0.spanContext().spanId;
                  if (tmp) {
                    const obj = closure_2_0(closure_2_1[2]);
                    tmp = "ui.load.initial_display" !== obj.spanToJSON(spanContext).op;
                  }
                  if (tmp) {
                    const obj2 = closure_2_0(closure_2_1[2]);
                    tmp = "navigation.processing" !== obj2.spanToJSON(spanContext).op;
                  }
                  return tmp;
                }).length <= 0) {
                  f82745(tmp);
                  tmp._sampled = false;
                }
              }
            }
          });
        }
      }
      const debug3 = tmp(tmp2[2]).debug;
      debug3.warn("Not sampling empty navigation spans only works for Sentry Transactions (Root Spans).");
    } else {
      const debug2 = tmp(tmp2[2]).debug;
      debug2.warn("Could not hook on spanEnd event because span is not defined.");
    }
  } else {
    let debug = tmp(tmp2[2]).debug;
    debug.warn("Could not hook on spanEnd event because client is not defined.");
  }
};
export const ignoreEmptyRouteChangeTransactions = (on, c4, arg2, arg3) => {
  let closure_1 = arg2;
  let closure_2 = arg3;
  let closure_0 = c4;
  const f82744 = (arg0) => {
    const obj = on(closure_1[2]);
    const spanToJSONResult = obj.spanToJSON(arg0);
    let tmp2 = spanToJSONResult.description === f82744;
    if (tmp2) {
      const data = spanToJSONResult.data;
      let prop;
      if (null !== data) {
        if (undefined !== data) {
          prop = data["route.name"];
        }
      }
      tmp2 = !prop;
    }
    if (tmp2) {
      tmp2 = f82745();
    }
    return tmp2;
  };
  const f82745 = (arg0) => {
    const debug = on(closure_1[2]).debug;
    debug.log("Discarding empty \"" + f82744 + "\" transaction that never received route information.");
    const obj = on;
    if (null != on) {
      obj.recordDroppedEvent("sample_rate", "transaction");
    }
  };
  let tmp = closure_0;
  let tmp2 = closure_1;
  if (on) {
    if (c4) {
      const tmpResult = tmp(tmp2[1]);
      if (tmpResult.isRootSpan(c4)) {
        const tmpResult2 = tmp(tmp2[1]);
        if (tmpResult2.isSentrySpan(c4)) {
          on.on("spanEnd", (arg0) => {
            let tmp = closure_0;
            if (arg0 === closure_0) {
              if (f82744(tmp)) {
                closure_0 = tmp;
                let obj = closure_0(closure_1[2]);
                const spanDescendants = obj.getSpanDescendants(tmp);
                if (spanDescendants.filter((spanContext) => {
                  let tmp = spanContext.spanContext().spanId !== closure_0.spanContext().spanId;
                  if (tmp) {
                    const obj = closure_2_0(closure_2_1[2]);
                    tmp = "ui.load.initial_display" !== obj.spanToJSON(spanContext).op;
                  }
                  if (tmp) {
                    const obj2 = closure_2_0(closure_2_1[2]);
                    tmp = "navigation.processing" !== obj2.spanToJSON(spanContext).op;
                  }
                  return tmp;
                }).length <= 0) {
                  f82745(tmp);
                  tmp._sampled = false;
                }
              }
            }
          });
        }
      }
      const debug3 = tmp(tmp2[2]).debug;
      debug3.warn("Not sampling empty navigation spans only works for Sentry Transactions (Root Spans).");
    } else {
      const debug2 = tmp(tmp2[2]).debug;
      debug2.warn("Could not hook on spanEnd event because span is not defined.");
    }
  } else {
    let debug = tmp(tmp2[2]).debug;
    debug.warn("Could not hook on spanEnd event because client is not defined.");
  }
};
export const onlySampleIfChildSpans = (on, c4) => {
  _require = c4;
  const obj = require("module_998");
  if (obj.isRootSpan(c4)) {
    const tmpResult = require("module_998");
    if (tmpResult.isSentrySpan(c4)) {
      const tmp4 = on;
      on.on("spanEnd", (arg0) => {
        if (arg0 === closure_0) {
          const obj2 = _mod693;
          if (obj2.getSpanDescendants(closure_0).length <= 1) {
            const debug = tmp4(693).debug;
            const log = debug.log;
            const _HermesInternal = HermesInternal;
            const tmp4Result = _mod693;
            log("Not sampling as " + tmp4Result.spanToJSON(closure_0).op + " transaction has no child spans.");
            closure_0._sampled = false;
          }
        }
      });
    }
  }
  let debug = tmp(693).debug;
  debug.warn("Not sampling childless spans only works for Sentry Transactions (Root Spans).");
};
export const cancelInBackground = (on, arg1) => {
  let closure_0 = arg1;
  const listener = AppState.addEventListener("change", (event) => {
    if ("background" === event) {
      const debug = _mod693.debug;
      const log = debug.log;
      const _HermesInternal = HermesInternal;
      const obj = _mod693;
      log("Setting " + obj.spanToJSON(closure_0).op + " transaction to cancelled because the app is in the background.");
      const setStatus = closure_0.setStatus;
      const obj2 = { code: _mod693.SPAN_STATUS_ERROR, message: "cancelled" };
      setStatus(obj2);
      closure_0.end();
    }
  });
  if (listener) {
    on.on("spanEnd", (arg0) => {
      if (arg0 === closure_0) {
        const debug = _mod693.debug;
        const log = debug.log;
        const _HermesInternal = HermesInternal;
        const obj = _mod693;
        log("Removing AppState listener for " + obj.spanToJSON(tmp).op + " transaction.");
        let remove;
        if (null != listener) {
          remove = tmp8.remove;
        }
        const tmp3 = null === remove || undefined === remove;
        if (!tmp3) {
          remove.call(listener);
        }
      }
    });
  }
};
