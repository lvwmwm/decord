// Module ID: 7257
// Function ID: 58463
// Name: TRACING_DEFAULTS
// Dependencies: []
// Exports: startIdleSpan

// Module 7257 (TRACING_DEFAULTS)
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
const obj = { 0: false, 9223372036854775807: "auto.db.supabase.postgres", 0: "Sloven\u010Dina" };

export const TRACING_DEFAULTS = obj;
export const startIdleSpan = function startIdleSpan(arg0) {
  function _cancelIdleTimeout() {
    if (closure_0) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_0);
      closure_0 = undefined;
    }
  }
  function _restartIdleTimeout(arg0) {
    let timeout = arg0;
    _cancelIdleTimeout();
    timeout = setTimeout(() => {
      let tmp = !closure_2;
      if (!closure_2) {
        tmp = 0 === size.size;
      }
      if (tmp) {
        tmp = closure_4;
      }
      if (tmp) {
        let closure_3 = "idleTimeout";
        closure_12.end(closure_0);
      }
    }, idleTimeout);
  }
  function _restartChildSpanTimeout(arg0) {
    let timeout = arg0;
    timeout = setTimeout(() => {
      let tmp = !closure_2;
      if (!closure_2) {
        tmp = closure_4;
      }
      if (tmp) {
        let closure_3 = "heartbeatFailed";
        closure_12.end(closure_0);
      }
    }, childSpanTimeout);
  }
  function onIdleSpanEnded(arg0) {
    let closure_2 = true;
    map.clear();
    const item = items.forEach((arg0) => arg0());
    arg0(map[7])._setSpanForScope(closure_10, closure_11);
    const obj = arg0(map[7]);
    const spanToJSONResult = arg0(map[5]).spanToJSON(startInactiveSpanResult);
    if (spanToJSONResult.start_timestamp) {
      if (!tmp5[closure_0(undefined, closure_1[8]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON]) {
        const attr = startInactiveSpanResult.setAttribute(arg0(map[8]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, closure_3);
      }
      const logger = arg0(map[9]).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Idle span \"" + spanToJSONResult.op + "\" finished");
      const spanDescendants = arg0(map[5]).getSpanDescendants(startInactiveSpanResult);
      const found = spanDescendants.filter((arg0) => arg0 !== closure_12);
      const item1 = found.forEach((isRecording) => {
        if (isRecording.isRecording()) {
          const obj = { code: isRecording(closure_1[10]).SPAN_STATUS_ERROR, message: "cancelled" };
          isRecording.setStatus(obj);
          isRecording.end(isRecording);
          if (isRecording(closure_1[11]).DEBUG_BUILD) {
            const logger = isRecording(closure_1[9]).logger;
            const _JSON = JSON;
            logger.log("[Tracing] Cancelling span since span ended early", JSON.stringify(isRecording, undefined, 2));
          }
        }
        const spanToJSONResult = isRecording(closure_1[5]).spanToJSON(isRecording);
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
        let tmp12 = num5 - num6 <= (closure_7 + closure_6) / 1000;
        if (isRecording(closure_1[11]).DEBUG_BUILD) {
          const _JSON2 = JSON;
          const json = JSON.stringify(isRecording, undefined, 2);
          if (tmp11) {
            if (!tmp12) {
              const logger3 = isRecording(closure_1[9]).logger;
              logger3.log("[Tracing] Discarding span since it finished after idle span final timeout", json);
            }
          } else {
            const logger2 = isRecording(closure_1[9]).logger;
            logger2.log("[Tracing] Discarding span since it happened after idle span was finished", json);
          }
        }
        if (tmp12) {
          tmp12 = tmp11;
        }
        if (!tmp12) {
          const result = isRecording(closure_1[5]).removeChildSpanFromSpan(closure_12, isRecording);
          closure_1 = closure_1 + 1;
          const obj3 = isRecording(closure_1[5]);
        }
      });
      if (0 > 0) {
        const attr1 = startInactiveSpanResult.setAttribute("sentry.idle_span_discarded_spans", map);
      }
      const obj3 = arg0(map[5]);
      const tmp5 = spanToJSONResult.data || {};
    }
  }
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let obj = arguments[1];
    }
    const _Map = Map;
    const map = new Map();
    const dependencyMap = map;
    let closure_2 = false;
    let closure_3 = "externalFinish";
    obj = !obj.disableAutoFinish;
    const items = [];
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
    const client = require(dependencyMap[2]).getClient();
    if (client) {
      if (obj4.hasTracingEnabled()) {
        const currentScope = require(dependencyMap[2]).getCurrentScope();
        const obj5 = require(dependencyMap[2]);
        const activeSpan = require(dependencyMap[5]).getActiveSpan();
        const obj6 = require(dependencyMap[5]);
        const startInactiveSpanResult = require(dependencyMap[12]).startInactiveSpan(arg0);
        const obj7 = require(dependencyMap[12]);
        const obj8 = require(dependencyMap[7]);
        obj8._setSpanForScope(require(dependencyMap[2]).getCurrentScope(), startInactiveSpanResult);
        if (require(dependencyMap[11]).DEBUG_BUILD) {
          const logger = require(dependencyMap[9]).logger;
          logger.log("[Tracing] Started span is an idle span");
        }
        const _Proxy = Proxy;
        obj = {
          apply(arg0, arg1, arg2) {
                  if (beforeSpanEnd) {
                    beforeSpanEnd(startInactiveSpanResult);
                  }
                  const arr = externalFinish(arg2);
                  let first = arr[0];
                  const substr = arr.slice(1);
                  if (!first) {
                    first = callback(map[6]).timestampInSeconds();
                    const obj = callback(map[6]);
                  }
                  const result = callback(map[5]).spanTimeInputToSeconds(first);
                  const obj2 = callback(map[5]);
                  const spanDescendants = callback(map[5]).getSpanDescendants(startInactiveSpanResult);
                  const found = spanDescendants.filter((arg0) => arg0 !== closure_12);
                  if (found.length) {
                    const mapped = found.map((arg0) => callback(closure_1[5]).spanToJSON(arg0).timestamp);
                    const found1 = mapped.filter((arg0) => arg0);
                    let num2;
                    if (found1.length) {
                      const _Math = Math;
                      const _Math2 = Math;
                      num2 = max.apply(Math, callback2(found1));
                    }
                    let num3 = callback(map[5]).spanToJSON(startInactiveSpanResult).start_timestamp;
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
                    return Reflect.apply(arg0, arg1, items.concat(callback2(substr)));
                  } else {
                    onIdleSpanEnded(result);
                    const _Reflect = Reflect;
                    const items1 = [result];
                    return Reflect.apply(arg0, arg1, items1.concat(callback2(substr)));
                  }
                  const obj3 = callback(map[5]);
                }
        };
        const proxy = new Proxy(startInactiveSpanResult.end, obj);
        startInactiveSpanResult.end = proxy;
        items.push(client.on("spanStart", (spanContext) => {
          let timestamp = closure_2;
          if (!closure_2) {
            timestamp = spanContext === startInactiveSpanResult;
          }
          if (!timestamp) {
            timestamp = callback(map[5]).spanToJSON(spanContext).timestamp;
            const obj = callback(map[5]);
          }
          if (!timestamp) {
            const spanDescendants = callback(map[5]).getSpanDescendants(startInactiveSpanResult);
            if (spanDescendants.includes(spanContext)) {
              _cancelIdleTimeout();
              const result = map.set(spanContext.spanContext().spanId, true);
              _restartChildSpanTimeout(callback(map[6]).timestampInSeconds() + childSpanTimeout / 1000);
              const obj4 = callback(map[6]);
            }
            const obj2 = callback(map[5]);
          }
        }));
        items.push(client.on("spanEnd", (spanContext) => {
          if (!closure_2) {
            const spanId = spanContext.spanContext().spanId;
            if (map.has(spanId)) {
              map.delete(spanId);
            }
            if (0 === map.size) {
              _restartIdleTimeout(callback(map[6]).timestampInSeconds() + idleTimeout / 1000);
              const obj = callback(map[6]);
            }
          }
        }));
        items.push(client.on("idleSpanEnableAutoFinish", (arg0) => {
          if (arg0 === startInactiveSpanResult) {
            let closure_4 = true;
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
          if (!closure_2) {
            const obj = { code: callback(map[10]).SPAN_STATUS_ERROR, message: "deadline_exceeded" };
            startInactiveSpanResult.setStatus(obj);
            let closure_3 = "finalTimeout";
            startInactiveSpanResult.end();
          }
        }, finalTimeout);
        return startInactiveSpanResult;
      }
      const obj4 = require(dependencyMap[3]);
    }
    const SentryNonRecordingSpan = require(dependencyMap[4]).SentryNonRecordingSpan;
    const prototype2 = SentryNonRecordingSpan.prototype;
    const sentryNonRecordingSpan = new SentryNonRecordingSpan();
    return sentryNonRecordingSpan;
  }
  obj = {};
};
