// Module ID: 1137
// Function ID: 12930
// Name: discardEmptyNavigationSpan
// Dependencies: []
// Exports: adjustTransactionDuration, cancelInBackground, ignoreEmptyBackNavigation, ignoreEmptyRouteChangeTransactions, onThisSpanEnd, onlySampleIfChildSpans

// Module 1137 (discardEmptyNavigationSpan)
function discardEmptyNavigationSpan(on, result, arg2, arg3) {
  const require = result;
  const dependencyMap = arg2;
  const AppState = arg3;
  if (on) {
    if (result) {
      if (tmpResult.isRootSpan(result)) {
        if (obj2.isSentrySpan(result)) {
          on.on("spanEnd", (arg0) => {
            if (arg0 === arg1) {
              if (arg2(arg1)) {
                if (function getMeaningfulChildSpans(arg0) {
                  const spanDescendants = arg0(closure_1[2]).getSpanDescendants(arg0);
                  return spanDescendants.filter((spanContext) => {
                    let tmp = spanContext.spanContext().spanId !== spanContext.spanContext().spanId;
                    if (tmp) {
                      tmp = "ui.load.initial_display" !== spanContext(closure_1[2]).spanToJSON(spanContext).op;
                      const obj = spanContext(closure_1[2]);
                    }
                    if (tmp) {
                      tmp = "navigation.processing" !== spanContext(closure_1[2]).spanToJSON(spanContext).op;
                      const obj2 = spanContext(closure_1[2]);
                    }
                    return tmp;
                  });
                }(arg1).length <= 0) {
                  arg3(arg1);
                  arg1._sampled = false;
                }
              }
            }
          });
        }
        const obj2 = require(dependencyMap[1]);
      }
      const debug3 = require(dependencyMap[2]).debug;
      debug3.warn("Not sampling empty navigation spans only works for Sentry Transactions (Root Spans).");
      const tmpResult = tmp(tmp2[1]);
    } else {
      const debug2 = tmp(tmp2[2]).debug;
      debug2.warn("Could not hook on spanEnd event because span is not defined.");
    }
  } else {
    const debug = tmp(tmp2[2]).debug;
    debug.warn("Could not hook on spanEnd event because client is not defined.");
  }
}
const AppState = require(dependencyMap[0]).AppState;

export const onThisSpanEnd = function onThisSpanEnd(on) {
  const require = arg1;
  const dependencyMap = arg2;
  on.on("spanEnd", (arg0) => {
    if (arg1 === arg0) {
      arg2(arg0);
    }
  });
};
export const adjustTransactionDuration = function adjustTransactionDuration(client, activeSpan, finalTimeout) {
  const require = activeSpan;
  const dependencyMap = finalTimeout;
  if (obj.isRootSpan(activeSpan)) {
    client.on("spanEnd", (arg0, self) => {
      if (arg0 === self) {
        let timestamp = self(arg2[2]).spanToJSON(self).timestamp;
        const obj2 = self(arg2[2]);
        const start_timestamp = self(arg2[2]).spanToJSON(self).start_timestamp;
        if (timestamp) {
          if (start_timestamp) {
            const diff = timestamp - start_timestamp;
            if (timestamp) {
              let tmp3 = diff > arg2;
              if (!tmp3) {
                tmp3 = diff < 0;
              }
              timestamp = tmp3;
            }
            if (timestamp) {
              const obj = { code: self(arg2[2]).SPAN_STATUS_ERROR, message: "deadline_exceeded" };
              self.setStatus(obj);
              const attr = self.setAttribute("maxTransactionDurationExceeded", "true");
            }
          }
        }
        const obj3 = self(arg2[2]);
      }
    });
  } else {
    const debug = require(dependencyMap[2]).debug;
    debug.warn("Not sampling empty back spans only works for Sentry Transactions (Root Spans).");
  }
};
export const ignoreEmptyBackNavigation = function ignoreEmptyBackNavigation(client, result) {
  discardEmptyNavigationSpan(client, result, (arg0) => {
    const data = callback(closure_1[2]).spanToJSON(arg0).data;
    let prop;
    if (null !== data) {
      if (undefined !== data) {
        prop = data.route.has_been_seen;
      }
    }
    return true === prop;
  }, () => {
    const debug = callback(closure_1[2]).debug;
    debug.log("Not sampling transaction as route has been seen before. Pass ignoreEmptyBackNavigationTransactions = false to disable this feature.");
  });
};
export const ignoreEmptyRouteChangeTransactions = function ignoreEmptyRouteChangeTransactions(client, result, DEFAULT_NAVIGATION_SPAN_NAME, arg3) {
  const require = client;
  const dependencyMap = DEFAULT_NAVIGATION_SPAN_NAME;
  const AppState = arg3;
  discardEmptyNavigationSpan(client, result, (arg0) => {
    const spanToJSONResult = arg0(arg2[2]).spanToJSON(arg0);
    let tmp2 = spanToJSONResult.description === arg2;
    if (tmp2) {
      const data = spanToJSONResult.data;
      let prop;
      if (null !== data) {
        if (undefined !== data) {
          prop = data.route.name;
        }
      }
      tmp2 = !prop;
    }
    if (tmp2) {
      tmp2 = arg3();
    }
    return tmp2;
  }, (arg0) => {
    const debug = arg0(arg2[2]).debug;
    debug.log("Discarding empty \"" + arg2 + "\" transaction that never received route information.");
    if (null != arg0) {
      arg0.recordDroppedEvent("sample_rate", "transaction");
    }
  });
};
export const onlySampleIfChildSpans = function onlySampleIfChildSpans(client, startIdleSpanResult) {
  const require = startIdleSpanResult;
  if (obj.isRootSpan(startIdleSpanResult)) {
    if (obj2.isSentrySpan(startIdleSpanResult)) {
      client.on("spanEnd", (arg0) => {
        if (arg0 === arg1) {
          if (obj2.getSpanDescendants(arg1).length <= 1) {
            const debug = arg1(closure_1[2]).debug;
            const _HermesInternal = HermesInternal;
            debug.log("Not sampling as " + arg1(closure_1[2]).spanToJSON(arg1).op + " transaction has no child spans.");
            arg1._sampled = false;
            const obj = arg1(closure_1[2]);
          }
          const obj2 = arg1(closure_1[2]);
        }
      });
    }
  }
  const debug = require(dependencyMap[2]).debug;
  debug.warn("Not sampling childless spans only works for Sentry Transactions (Root Spans).");
};
export const cancelInBackground = function cancelInBackground(client, startIdleSpanResult) {
  const require = startIdleSpanResult;
  const listener = AppState.addEventListener("change", (arg0, self) => {
    if ("background" === arg0) {
      const debug = self(listener[2]).debug;
      let obj = self(listener[2]);
      const _HermesInternal = HermesInternal;
      debug.log("Setting " + obj.spanToJSON(self).op + " transaction to cancelled because the app is in the background.");
      obj = { code: self(listener[2]).SPAN_STATUS_ERROR, message: "cancelled" };
      self.setStatus(obj);
      self.end();
    }
  });
  const dependencyMap = listener;
  if (listener) {
    client.on("spanEnd", (arg0) => {
      if (arg0 === arg1) {
        const debug = arg1(listener[2]).debug;
        const _HermesInternal = HermesInternal;
        debug.log("Removing AppState listener for " + arg1(listener[2]).spanToJSON(arg1).op + " transaction.");
        let remove;
        if (null != listener) {
          remove = listener.remove;
        }
        if (!tmp3) {
          remove.call(listener);
        }
        const obj = arg1(listener[2]);
        const tmp3 = null === remove || undefined === remove;
      }
    });
  }
};
