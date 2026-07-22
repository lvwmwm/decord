// Module ID: 829
// Function ID: 9241
// Name: TRACING_DEFAULTS
// Dependencies: []
// Exports: startIdleSpan

// Module 829 (TRACING_DEFAULTS)
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const obj = { 0: false, 0: "auto.db.supabase.postgres", 0: "Sloven\u010Dina" };

export const TRACING_DEFAULTS = obj;
export const startIdleSpan = function startIdleSpan(arg0) {
  let trimIdleSpanEndTimestamp;
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
        closure_14.end(closure_0);
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
        closure_14.end(closure_0);
      }
    }, childSpanTimeout);
  }
  function onIdleSpanEnded(arg0) {
    let closure_2 = true;
    map.clear();
    const item = items.forEach((arg0) => arg0());
    let obj = arg0(map[9]);
    obj._setSpanForScope(closure_12, closure_13);
    const spanToJSONResult = arg0(map[6]).spanToJSON(startInactiveSpanResult);
    if (spanToJSONResult.start_timestamp) {
      if (!spanToJSONResult.data[closure_0(undefined, closure_1[10]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON]) {
        const attr = startInactiveSpanResult.setAttribute(arg0(map[10]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, closure_3);
      }
      const status = spanToJSONResult.status;
      let tmp12 = status;
      if (status) {
        tmp12 = "unknown" !== status;
      }
      if (!tmp12) {
        obj = { code: arg0(map[11]).SPAN_STATUS_OK };
        startInactiveSpanResult.setStatus(obj);
      }
      const debug = arg0(map[12]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("[Tracing] Idle span \"" + spanToJSONResult.op + "\" finished");
      const spanDescendants = arg0(map[6]).getSpanDescendants(startInactiveSpanResult);
      const found = spanDescendants.filter((arg0) => arg0 !== closure_14);
      const item1 = found.forEach((isRecording) => {
        if (isRecording.isRecording()) {
          const obj = { code: isRecording(closure_1[11]).SPAN_STATUS_ERROR, message: "cancelled" };
          isRecording.setStatus(obj);
          isRecording.end(isRecording);
          if (isRecording(closure_1[13]).DEBUG_BUILD) {
            const debug = isRecording(closure_1[12]).debug;
            const _JSON = JSON;
            debug.log("[Tracing] Cancelling span since span ended early", JSON.stringify(isRecording, undefined, 2));
          }
        }
        const spanToJSONResult = isRecording(closure_1[6]).spanToJSON(isRecording);
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
        if (isRecording(closure_1[13]).DEBUG_BUILD) {
          const _JSON2 = JSON;
          const json = JSON.stringify(isRecording, undefined, 2);
          if (tmp11) {
            if (!tmp12) {
              const debug3 = isRecording(closure_1[12]).debug;
              debug3.log("[Tracing] Discarding span since it finished after idle span final timeout", json);
            }
          } else {
            const debug2 = isRecording(closure_1[12]).debug;
            debug2.log("[Tracing] Discarding span since it happened after idle span was finished", json);
          }
        }
        if (tmp12) {
          tmp12 = tmp11;
        }
        if (!tmp12) {
          const result = isRecording(closure_1[6]).removeChildSpanFromSpan(closure_14, isRecording);
          closure_1 = closure_1 + 1;
          const obj3 = isRecording(closure_1[6]);
        }
      });
      if (0 > 0) {
        const attr1 = startInactiveSpanResult.setAttribute("sentry.idle_span_discarded_spans", map);
      }
      const obj4 = arg0(map[6]);
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
    ({ beforeSpanEnd: closure_9, trimIdleSpanEndTimestamp } = obj);
    let closure_10 = undefined === trimIdleSpanEndTimestamp || trimIdleSpanEndTimestamp;
    const client = require(dependencyMap[2]).getClient();
    if (client) {
      if (obj4.hasSpansEnabled()) {
        const currentScope = require(dependencyMap[2]).getCurrentScope();
        const obj7 = require(dependencyMap[2]);
        const activeSpan = require(dependencyMap[6]).getActiveSpan();
        const obj8 = require(dependencyMap[6]);
        const startInactiveSpanResult = require(dependencyMap[15]).startInactiveSpan(arg0);
        const obj9 = require(dependencyMap[15]);
        const obj10 = require(dependencyMap[9]);
        obj10._setSpanForScope(require(dependencyMap[2]).getCurrentScope(), startInactiveSpanResult);
        if (require(dependencyMap[13]).DEBUG_BUILD) {
          const debug = require(dependencyMap[12]).debug;
          debug.log("[Tracing] Started span is an idle span");
        }
        const _Proxy = Proxy;
        obj = {
          apply(arg0, arg1, arg2) {
                  if (callback3) {
                    callback3(startInactiveSpanResult);
                  }
                  if (!(arg1 instanceof ignoreSpans(map[4]).SentryNonRecordingSpan)) {
                    const arr = externalFinish(arg2);
                    let first = arr[0];
                    const substr = arr.slice(1);
                    if (!first) {
                      first = ignoreSpans(map[7]).timestampInSeconds();
                      const obj = ignoreSpans(map[7]);
                    }
                    const result = ignoreSpans(map[6]).spanTimeInputToSeconds(first);
                    const obj2 = ignoreSpans(map[6]);
                    const spanDescendants = ignoreSpans(map[6]).getSpanDescendants(startInactiveSpanResult);
                    const found = spanDescendants.filter((arg0) => arg0 !== closure_14);
                    ignoreSpans(map[6]);
                    if (found.length) {
                      if (closure_10) {
                        const ignoreSpans = client.getOptions().ignoreSpans;
                        let num5;
                        if (null != found) {
                          num5 = found.reduce((arg0, arg1) => {
                            let timestamp = ignoreSpans(closure_1[6]).spanToJSON(arg1);
                            let tmp = arg0;
                            if (timestamp.timestamp) {
                              if (ignoreSpans) {
                                if (obj2.shouldIgnoreSpan(timestamp, ignoreSpans)) {
                                  tmp = arg0;
                                }
                                const obj2 = ignoreSpans(closure_1[8]);
                              }
                              if (arg0) {
                                const _Math = Math;
                                timestamp = timestamp.timestamp;
                                let timestamp2 = Math.max(arg0, timestamp);
                              } else {
                                timestamp2 = timestamp.timestamp;
                              }
                            }
                            return tmp;
                          }, undefined);
                        }
                        let num6 = tmp16.start_timestamp;
                        let num8 = Infinity;
                        if (num6) {
                          num8 = num6 + finalTimeout / 1000;
                        }
                        if (!num6) {
                          num6 = -Infinity;
                        }
                        if (!num5) {
                          num5 = Infinity;
                        }
                        const bound = Math.min(num8, Math.max(num6, Math.min(result, num5)));
                        onIdleSpanEnded(bound);
                        const _Reflect2 = Reflect;
                        const items = [bound];
                        return Reflect.apply(arg0, arg1, items.concat(callback2(substr)));
                      }
                    }
                    onIdleSpanEnded(result);
                    const _Reflect = Reflect;
                    const items1 = [result];
                    return Reflect.apply(arg0, arg1, items1.concat(callback2(substr)));
                  }
                }
        };
        const proxy = new Proxy(startInactiveSpanResult.end, obj);
        startInactiveSpanResult.end = proxy;
        items.push(client.on("spanStart", (isStandaloneSpan) => {
          let timestamp = closure_2;
          if (!closure_2) {
            timestamp = isStandaloneSpan === startInactiveSpanResult;
          }
          if (!timestamp) {
            timestamp = callback(map[6]).spanToJSON(isStandaloneSpan).timestamp;
            const obj = callback(map[6]);
          }
          if (!timestamp) {
            timestamp = isStandaloneSpan instanceof callback(map[14]).SentrySpan && isStandaloneSpan.isStandaloneSpan();
            const tmp6 = isStandaloneSpan instanceof callback(map[14]).SentrySpan && isStandaloneSpan.isStandaloneSpan();
          }
          if (!timestamp) {
            const spanDescendants = callback(map[6]).getSpanDescendants(startInactiveSpanResult);
            if (spanDescendants.includes(isStandaloneSpan)) {
              _cancelIdleTimeout();
              const result = map.set(isStandaloneSpan.spanContext().spanId, true);
              _restartChildSpanTimeout(callback(map[7]).timestampInSeconds() + childSpanTimeout / 1000);
              const obj4 = callback(map[7]);
            }
            const obj2 = callback(map[6]);
          }
        }));
        items.push(client.on("spanEnd", (spanContext) => {
          if (!closure_2) {
            const spanId = spanContext.spanContext().spanId;
            if (map.has(spanId)) {
              map.delete(spanId);
            }
            if (0 === map.size) {
              _restartIdleTimeout(callback(map[7]).timestampInSeconds() + idleTimeout / 1000);
              const obj = callback(map[7]);
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
            const obj = { code: callback(map[11]).SPAN_STATUS_ERROR, message: "deadline_exceeded" };
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
    const _Object = Object;
    const obj2 = require(dependencyMap[2]);
    const merged = Object.assign({}, require(dependencyMap[5]).getDynamicSamplingContextFromSpan(sentryNonRecordingSpan));
    const obj5 = require(dependencyMap[5]);
    require(dependencyMap[5]).freezeDscOnSpan(sentryNonRecordingSpan, merged);
    return sentryNonRecordingSpan;
  }
  obj = {};
};
