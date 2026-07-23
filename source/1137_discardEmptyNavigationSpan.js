// Module ID: 1137
// Function ID: 12931
// Name: discardEmptyNavigationSpan
// Dependencies: [27, 1098, 794]
// Exports: adjustTransactionDuration, cancelInBackground, ignoreEmptyBackNavigation, ignoreEmptyRouteChangeTransactions, onThisSpanEnd, onlySampleIfChildSpans

// Module 1137 (discardEmptyNavigationSpan)
import { AppState } from "get ActivityIndicator";

function discardEmptyNavigationSpan(on, closure_2, arg2, arg3) {
  const _require = closure_2;
  const dependencyMap = arg2;
  closure_2 = arg3;
  if (on) {
    if (closure_2) {
      if (tmpResult.isRootSpan(closure_2)) {
        if (obj2.isSentrySpan(closure_2)) {
          on.on("spanEnd", (arg0) => {
            if (arg0 === closure_0) {
              if (callback(closure_0)) {
                if ((function getMeaningfulChildSpans(closure_0) {
                  const callback = closure_0;
                  const spanDescendants = callback(table[2]).getSpanDescendants(closure_0);
                  return spanDescendants.filter((spanContext) => {
                    let tmp = spanContext.spanContext().spanId !== lib.spanContext().spanId;
                    if (tmp) {
                      tmp = "ui.load.initial_display" !== lib(794).spanToJSON(spanContext).op;
                      const obj = lib(794);
                    }
                    if (tmp) {
                      tmp = "navigation.processing" !== lib(794).spanToJSON(spanContext).op;
                      const obj2 = lib(794);
                    }
                    return tmp;
                  });
                })(closure_0).length <= 0) {
                  callback2(closure_0);
                  closure_0._sampled = false;
                }
              }
            }
          });
        }
        obj2 = _require(1098);
      }
      const debug3 = _require(794).debug;
      debug3.warn("Not sampling empty navigation spans only works for Sentry Transactions (Root Spans).");
      tmpResult = tmp(1098);
    } else {
      const debug2 = tmp(794).debug;
      debug2.warn("Could not hook on spanEnd event because span is not defined.");
    }
  } else {
    const debug = tmp(794).debug;
    debug.warn("Could not hook on spanEnd event because client is not defined.");
  }
}

export const onThisSpanEnd = function onThisSpanEnd(on) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  on.on("spanEnd", (arg0) => {
    if (closure_0 === arg0) {
      callback(arg0);
    }
  });
};
export const adjustTransactionDuration = function adjustTransactionDuration(client, outer1_0, finalTimeout) {
  const _require = outer1_0;
  const dependencyMap = finalTimeout;
  if (obj.isRootSpan(outer1_0)) {
    client.on("spanEnd", (arg0) => {
      if (arg0 === outer1_0) {
        let timestamp = outer1_0(794).spanToJSON(outer1_0).timestamp;
        const obj2 = outer1_0(794);
        const start_timestamp = outer1_0(794).spanToJSON(outer1_0).start_timestamp;
        if (timestamp) {
          if (start_timestamp) {
            const diff = timestamp - start_timestamp;
            if (timestamp) {
              let tmp3 = diff > dependencyMap;
              if (!tmp3) {
                tmp3 = diff < 0;
              }
              timestamp = tmp3;
            }
            if (timestamp) {
              const obj = { code: outer1_0(794).SPAN_STATUS_ERROR, message: "deadline_exceeded" };
              outer1_0.setStatus(obj);
              const attr = outer1_0.setAttribute("maxTransactionDurationExceeded", "true");
            }
          }
        }
        const obj3 = outer1_0(794);
      }
    });
  } else {
    const debug = _require(794).debug;
    debug.warn("Not sampling empty back spans only works for Sentry Transactions (Root Spans).");
  }
};
export const ignoreEmptyBackNavigation = function ignoreEmptyBackNavigation(client, closure_2) {
  discardEmptyNavigationSpan(client, closure_2, (arg0) => {
    const data = outer1_0(outer1_1[2]).spanToJSON(arg0).data;
    let prop;
    if (null !== data) {
      if (undefined !== data) {
        prop = data["route.has_been_seen"];
      }
    }
    return true === prop;
  }, () => {
    const debug = outer1_0(outer1_1[2]).debug;
    debug.log("Not sampling transaction as route has been seen before. Pass ignoreEmptyBackNavigationTransactions = false to disable this feature.");
  });
};
export const ignoreEmptyRouteChangeTransactions = function ignoreEmptyRouteChangeTransactions(client, closure_2, DEFAULT_NAVIGATION_SPAN_NAME, arg3) {
  let closure_0 = client;
  let closure_1 = DEFAULT_NAVIGATION_SPAN_NAME;
  closure_2 = arg3;
  discardEmptyNavigationSpan(client, closure_2, (arg0) => {
    const spanToJSONResult = client(DEFAULT_NAVIGATION_SPAN_NAME[2]).spanToJSON(arg0);
    let tmp2 = spanToJSONResult.description === DEFAULT_NAVIGATION_SPAN_NAME;
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
      tmp2 = callback();
    }
    return tmp2;
  }, (arg0) => {
    const debug = client(DEFAULT_NAVIGATION_SPAN_NAME[2]).debug;
    debug.log("Discarding empty \"" + DEFAULT_NAVIGATION_SPAN_NAME + "\" transaction that never received route information.");
    if (null != client) {
      client.recordDroppedEvent("sample_rate", "transaction");
    }
  });
};
export const onlySampleIfChildSpans = function onlySampleIfChildSpans(client, startIdleSpanResult) {
  const _require = startIdleSpanResult;
  if (obj.isRootSpan(startIdleSpanResult)) {
    if (obj2.isSentrySpan(startIdleSpanResult)) {
      client.on("spanEnd", (arg0) => {
        if (arg0 === startIdleSpanResult) {
          if (obj2.getSpanDescendants(startIdleSpanResult).length <= 1) {
            const debug = startIdleSpanResult(outer1_1[2]).debug;
            const _HermesInternal = HermesInternal;
            debug.log("Not sampling as " + startIdleSpanResult(outer1_1[2]).spanToJSON(startIdleSpanResult).op + " transaction has no child spans.");
            startIdleSpanResult._sampled = false;
            const obj = startIdleSpanResult(outer1_1[2]);
          }
          obj2 = startIdleSpanResult(outer1_1[2]);
        }
      });
    }
  }
  let debug = _require(794).debug;
  debug.warn("Not sampling childless spans only works for Sentry Transactions (Root Spans).");
};
export const cancelInBackground = function cancelInBackground(client, startIdleSpanResult) {
  let closure_0 = startIdleSpanResult;
  const listener = AppState.addEventListener("change", (arg0) => {
    if ("background" === arg0) {
      const debug = startIdleSpanResult(listener[2]).debug;
      let obj = startIdleSpanResult(listener[2]);
      const _HermesInternal = HermesInternal;
      debug.log("Setting " + obj.spanToJSON(startIdleSpanResult).op + " transaction to cancelled because the app is in the background.");
      obj = { code: startIdleSpanResult(listener[2]).SPAN_STATUS_ERROR, message: "cancelled" };
      startIdleSpanResult.setStatus(obj);
      startIdleSpanResult.end();
    }
  });
  if (listener) {
    client.on("spanEnd", (arg0) => {
      if (arg0 === startIdleSpanResult) {
        const debug = startIdleSpanResult(listener[2]).debug;
        const _HermesInternal = HermesInternal;
        debug.log("Removing AppState listener for " + startIdleSpanResult(listener[2]).spanToJSON(startIdleSpanResult).op + " transaction.");
        let remove;
        if (null != listener) {
          remove = listener.remove;
        }
        if (!tmp3) {
          remove.call(listener);
        }
        const obj = startIdleSpanResult(listener[2]);
        tmp3 = null === remove || undefined === remove;
      }
    });
  }
};
