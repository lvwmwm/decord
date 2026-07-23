// Module ID: 7267
// Function ID: 58531
// Name: TRACING_DEFAULTS
// Dependencies: [65, 830, 7263, 7268, 7269, 7241, 7250, 7258, 7251, 7236, 7253, 7264, 7270]
// Exports: startIdleSpan

// Module 7267 (TRACING_DEFAULTS)
import _toConsumableArray from "_toConsumableArray";
import _toArray from "_toArray";

let obj = { idleTimeout: 1000, finalTimeout: 30000, childSpanTimeout: 15000 };

export const TRACING_DEFAULTS = obj;
export const startIdleSpan = function startIdleSpan(arg0) {
  function _cancelIdleTimeout() {
    if (c0) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c0);
      c0 = undefined;
    }
  }
  function _restartIdleTimeout(arg0) {
    let timeout = arg0;
    _cancelIdleTimeout();
    timeout = setTimeout(() => {
      let tmp = !outer1_2;
      if (!outer1_2) {
        tmp = 0 === outer1_1.size;
      }
      if (tmp) {
        tmp = outer1_4;
      }
      if (tmp) {
        const outer1_3 = "idleTimeout";
        outer1_12.end(closure_0);
      }
    }, idleTimeout);
  }
  function _restartChildSpanTimeout(arg0) {
    let timeout = arg0;
    timeout = setTimeout(() => {
      let tmp = !outer1_2;
      if (!outer1_2) {
        tmp = outer1_4;
      }
      if (tmp) {
        const outer1_3 = "heartbeatFailed";
        outer1_12.end(closure_0);
      }
    }, childSpanTimeout);
  }
  function onIdleSpanEnded(arg0) {
    let closure_0 = arg0;
    let c2 = true;
    map.clear();
    const item = items.forEach((arg0) => arg0());
    outer1_0(map[7])._setSpanForScope(closure_10, closure_11);
    let obj = outer1_0(map[7]);
    let spanToJSONResult = outer1_0(map[5]).spanToJSON(startInactiveSpanResult);
    if (spanToJSONResult.start_timestamp) {
      if (!tmp5[outer1_0(undefined, map[8]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON]) {
        const attr = startInactiveSpanResult.setAttribute(outer1_0(map[8]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, externalFinish);
      }
      let logger = outer1_0(map[9]).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Idle span \"" + spanToJSONResult.op + "\" finished");
      const spanDescendants = outer1_0(map[5]).getSpanDescendants(startInactiveSpanResult);
      const found = spanDescendants.filter((arg0) => arg0 !== outer1_12);
      const item1 = found.forEach((isRecording) => {
        if (isRecording.isRecording()) {
          const obj = { code: outer2_0(map[10]).SPAN_STATUS_ERROR, message: "cancelled" };
          isRecording.setStatus(obj);
          isRecording.end(closure_0);
          if (outer2_0(map[11]).DEBUG_BUILD) {
            const logger = outer2_0(map[9]).logger;
            const _JSON = JSON;
            logger.log("[Tracing] Cancelling span since span ended early", JSON.stringify(isRecording, undefined, 2));
          }
        }
        const spanToJSONResult = outer2_0(map[5]).spanToJSON(isRecording);
        const timestamp = spanToJSONResult.timestamp;
        let num5 = 0;
        if (undefined !== timestamp) {
          num5 = timestamp;
        }
        const start_timestamp = spanToJSONResult.start_timestamp;
        let num6 = 0;
        if (undefined !== start_timestamp) {
          num6 = start_timestamp;
        }
        let tmp12 = num5 - num6 <= (outer1_7 + outer1_6) / 1000;
        if (outer2_0(map[11]).DEBUG_BUILD) {
          const _JSON2 = JSON;
          const json = JSON.stringify(isRecording, undefined, 2);
          if (tmp11) {
            if (!tmp12) {
              const logger3 = outer2_0(map[9]).logger;
              logger3.log("[Tracing] Discarding span since it finished after idle span final timeout", json);
            }
          } else {
            const logger2 = outer2_0(map[9]).logger;
            logger2.log("[Tracing] Discarding span since it happened after idle span was finished", json);
          }
        }
        if (tmp12) {
          tmp12 = tmp11;
        }
        if (!tmp12) {
          const result = outer2_0(map[5]).removeChildSpanFromSpan(outer1_12, isRecording);
          closure_1 = closure_1 + 1;
          const obj3 = outer2_0(map[5]);
        }
      });
      if (0 > 0) {
        const attr1 = startInactiveSpanResult.setAttribute("sentry.idle_span_discarded_spans", map);
      }
      let obj3 = outer1_0(map[5]);
      tmp5 = spanToJSONResult.data || {};
    }
  }
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let obj = arguments[1];
    }
    const _Map = Map;
    const map = new Map();
    let c2 = false;
    const externalFinish = "externalFinish";
    obj = !obj.disableAutoFinish;
    let items = [];
    let idleTimeout = obj.idleTimeout;
    if (undefined === idleTimeout) {
      idleTimeout = obj.idleTimeout;
    }
    let finalTimeout = obj.finalTimeout;
    if (undefined === finalTimeout) {
      finalTimeout = obj.finalTimeout;
    }
    let childSpanTimeout = obj.childSpanTimeout;
    if (undefined === childSpanTimeout) {
      childSpanTimeout = obj.childSpanTimeout;
    }
    const beforeSpanEnd = obj.beforeSpanEnd;
    const client = require(map[2]).getClient();
    if (client) {
      if (obj4.hasTracingEnabled()) {
        const currentScope = require(map[2]).getCurrentScope();
        const obj5 = require(map[2]);
        const activeSpan = require(map[5]).getActiveSpan();
        const obj6 = require(map[5]);
        const startInactiveSpanResult = require(map[12]).startInactiveSpan(arg0);
        const obj7 = require(map[12]);
        const obj8 = require(map[7]);
        obj8._setSpanForScope(require(map[2]).getCurrentScope(), startInactiveSpanResult);
        if (require(map[11]).DEBUG_BUILD) {
          let logger = require(map[9]).logger;
          logger.log("[Tracing] Started span is an idle span");
        }
        const _Proxy = Proxy;
        obj = {
          apply(arg0, arg1, arg2) {
                  if (beforeSpanEnd) {
                    beforeSpanEnd(closure_12);
                  }
                  const arr = externalFinish(arg2);
                  let first = arr[0];
                  const substr = arr.slice(1);
                  if (!first) {
                    first = outer1_0(map[6]).timestampInSeconds();
                    const obj = outer1_0(map[6]);
                  }
                  const result = outer1_0(map[5]).spanTimeInputToSeconds(first);
                  const obj2 = outer1_0(map[5]);
                  const spanDescendants = outer1_0(map[5]).getSpanDescendants(closure_12);
                  const found = spanDescendants.filter((arg0) => arg0 !== outer1_12);
                  if (found.length) {
                    const mapped = found.map((arg0) => outer2_0(map[5]).spanToJSON(arg0).timestamp);
                    const found1 = mapped.filter((arg0) => arg0);
                    let num2;
                    if (found1.length) {
                      const _Math = Math;
                      const _Math2 = Math;
                      num2 = max.apply(Math, callback(found1));
                    }
                    let num3 = outer1_0(map[5]).spanToJSON(closure_12).start_timestamp;
                    let num5 = Infinity;
                    if (num3) {
                      num5 = num3 + finalTimeout / 1000;
                    }
                    if (!num3) {
                      num3 = -Infinity;
                    }
                    if (!num2) {
                      num2 = Infinity;
                    }
                    const bound = Math.min(num5, Math.max(num3, Math.min(result, num2)));
                    onIdleSpanEnded(bound);
                    const _Reflect2 = Reflect;
                    const items = [bound];
                    return Reflect.apply(arg0, arg1, items.concat(callback(substr)));
                  } else {
                    onIdleSpanEnded(result);
                    const _Reflect = Reflect;
                    const items1 = [result];
                    return Reflect.apply(arg0, arg1, items1.concat(callback(substr)));
                  }
                  const obj3 = outer1_0(map[5]);
                }
        };
        const proxy = new Proxy(startInactiveSpanResult.end, obj);
        startInactiveSpanResult.end = proxy;
        items.push(client.on("spanStart", (spanContext) => {
          let timestamp = c2;
          if (!c2) {
            timestamp = spanContext === closure_12;
          }
          if (!timestamp) {
            timestamp = outer1_0(map[5]).spanToJSON(spanContext).timestamp;
            const obj = outer1_0(map[5]);
          }
          if (!timestamp) {
            const spanDescendants = outer1_0(map[5]).getSpanDescendants(closure_12);
            if (spanDescendants.includes(spanContext)) {
              _cancelIdleTimeout();
              const result = map.set(spanContext.spanContext().spanId, true);
              _restartChildSpanTimeout(outer1_0(map[6]).timestampInSeconds() + childSpanTimeout / 1000);
              const obj4 = outer1_0(map[6]);
            }
            const obj2 = outer1_0(map[5]);
          }
        }));
        items.push(client.on("spanEnd", (spanContext) => {
          if (!c2) {
            const spanId = spanContext.spanContext().spanId;
            if (map.has(spanId)) {
              map.delete(spanId);
            }
            if (0 === map.size) {
              _restartIdleTimeout(outer1_0(map[6]).timestampInSeconds() + idleTimeout / 1000);
              const obj = outer1_0(map[6]);
            }
          }
        }));
        items.push(client.on("idleSpanEnableAutoFinish", (arg0) => {
          if (arg0 === closure_12) {
            let c4 = true;
            _restartIdleTimeout();
            if (map.size) {
              _restartChildSpanTimeout();
            }
          }
        }));
        if (!obj.disableAutoFinish) {
          _restartIdleTimeout();
        }
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          if (!c2) {
            const obj = { code: outer1_0(map[10]).SPAN_STATUS_ERROR, message: "deadline_exceeded" };
            startInactiveSpanResult.setStatus(obj);
            const finalTimeout = "finalTimeout";
            startInactiveSpanResult.end();
          }
        }, finalTimeout);
        return startInactiveSpanResult;
      }
      obj4 = require(map[3]);
    }
    const SentryNonRecordingSpan = require(map[4]).SentryNonRecordingSpan;
    const prototype2 = SentryNonRecordingSpan.prototype;
    const sentryNonRecordingSpan = new SentryNonRecordingSpan();
    return sentryNonRecordingSpan;
  }
  obj = {};
};
