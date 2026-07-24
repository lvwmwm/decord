// Module ID: 829
// Function ID: 9243
// Name: TRACING_DEFAULTS
// Dependencies: [65, 830, 825, 831, 832, 833, 796, 815, 835, 821, 816, 817, 801, 800, 836, 842]
// Exports: startIdleSpan

// Module 829 (TRACING_DEFAULTS)
import _toConsumableArray from "_toConsumableArray";
import _toArray from "_toArray";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let obj = { idleTimeout: 1000, finalTimeout: 30000, childSpanTimeout: 15000 };

export const TRACING_DEFAULTS = obj;
export const startIdleSpan = function startIdleSpan(arg0) {
  let closure_9;
  let trimIdleSpanEndTimestamp;
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
        outer1_14.end(closure_0);
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
        outer1_14.end(closure_0);
      }
    }, childSpanTimeout);
  }
  function onIdleSpanEnded(arg0) {
    let closure_0 = arg0;
    let c2 = true;
    map.clear();
    const item = items.forEach((arg0) => arg0());
    let obj = outer1_0(map[9]);
    obj._setSpanForScope(closure_12, closure_13);
    let spanToJSONResult = outer1_0(map[6]).spanToJSON(startInactiveSpanResult);
    if (spanToJSONResult.start_timestamp) {
      if (!spanToJSONResult.data[outer1_0(undefined, map[10]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON]) {
        const attr = startInactiveSpanResult.setAttribute(outer1_0(map[10]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, externalFinish);
      }
      const status = spanToJSONResult.status;
      let tmp12 = status;
      if (status) {
        tmp12 = "unknown" !== status;
      }
      if (!tmp12) {
        obj = { code: outer1_0(map[11]).SPAN_STATUS_OK };
        startInactiveSpanResult.setStatus(obj);
      }
      let debug = outer1_0(map[12]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("[Tracing] Idle span \"" + spanToJSONResult.op + "\" finished");
      const spanDescendants = outer1_0(map[6]).getSpanDescendants(startInactiveSpanResult);
      const found = spanDescendants.filter((arg0) => arg0 !== outer1_14);
      const item1 = found.forEach((isRecording) => {
        if (isRecording.isRecording()) {
          const obj = { code: outer2_0(map[11]).SPAN_STATUS_ERROR, message: "cancelled" };
          isRecording.setStatus(obj);
          isRecording.end(closure_0);
          if (outer2_0(map[13]).DEBUG_BUILD) {
            const debug = outer2_0(map[12]).debug;
            const _JSON = JSON;
            debug.log("[Tracing] Cancelling span since span ended early", JSON.stringify(isRecording, undefined, 2));
          }
        }
        const spanToJSONResult = outer2_0(map[6]).spanToJSON(isRecording);
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
        if (outer2_0(map[13]).DEBUG_BUILD) {
          const _JSON2 = JSON;
          const json = JSON.stringify(isRecording, undefined, 2);
          if (tmp11) {
            if (!tmp12) {
              const debug3 = outer2_0(map[12]).debug;
              debug3.log("[Tracing] Discarding span since it finished after idle span final timeout", json);
            }
          } else {
            const debug2 = outer2_0(map[12]).debug;
            debug2.log("[Tracing] Discarding span since it happened after idle span was finished", json);
          }
        }
        if (tmp12) {
          tmp12 = tmp11;
        }
        if (!tmp12) {
          const result = outer2_0(map[6]).removeChildSpanFromSpan(outer1_14, isRecording);
          closure_1 = closure_1 + 1;
          const obj3 = outer2_0(map[6]);
        }
      });
      if (0 > 0) {
        const attr1 = startInactiveSpanResult.setAttribute("sentry.idle_span_discarded_spans", map);
      }
      const obj4 = outer1_0(map[6]);
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
    ({ beforeSpanEnd: closure_9, trimIdleSpanEndTimestamp } = obj);
    let closure_10 = undefined === trimIdleSpanEndTimestamp || trimIdleSpanEndTimestamp;
    const client = require(map[2]).getClient();
    if (client) {
      if (obj4.hasSpansEnabled()) {
        const currentScope = require(map[2]).getCurrentScope();
        const obj7 = require(map[2]);
        const activeSpan = require(map[6]).getActiveSpan();
        const obj8 = require(map[6]);
        const startInactiveSpanResult = require(map[15]).startInactiveSpan(arg0);
        const obj9 = require(map[15]);
        const obj10 = require(map[9]);
        obj10._setSpanForScope(require(map[2]).getCurrentScope(), startInactiveSpanResult);
        if (require(map[13]).DEBUG_BUILD) {
          let debug = require(map[12]).debug;
          debug.log("[Tracing] Started span is an idle span");
        }
        const _Proxy = Proxy;
        obj = {
          apply(arg0, arg1, arg2) {
                  if (callback2) {
                    callback2(closure_14);
                  }
                  if (!(arg1 instanceof outer1_0(map[4]).SentryNonRecordingSpan)) {
                    const arr = externalFinish(arg2);
                    let first = arr[0];
                    const substr = arr.slice(1);
                    if (!first) {
                      first = outer1_0(map[7]).timestampInSeconds();
                      const obj = outer1_0(map[7]);
                    }
                    const result = outer1_0(map[6]).spanTimeInputToSeconds(first);
                    let obj2 = outer1_0(map[6]);
                    const spanDescendants = outer1_0(map[6]).getSpanDescendants(closure_14);
                    const found = spanDescendants.filter((arg0) => arg0 !== outer1_14);
                    outer1_0(map[6]);
                    if (found.length) {
                      if (closure_10) {
                        const ignoreSpans = client.getOptions().ignoreSpans;
                        let num5;
                        if (null != found) {
                          num5 = found.reduce((arg0, arg1) => {
                            let timestamp = outer2_0(map[6]).spanToJSON(arg1);
                            let tmp = arg0;
                            if (timestamp.timestamp) {
                              if (ignoreSpans) {
                                if (obj2.shouldIgnoreSpan(timestamp, ignoreSpans)) {
                                  tmp = arg0;
                                }
                                obj2 = outer2_0(map[8]);
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
                        return Reflect.apply(arg0, arg1, items.concat(callback(substr)));
                      }
                    }
                    onIdleSpanEnded(result);
                    const _Reflect = Reflect;
                    const items1 = [result];
                    return Reflect.apply(arg0, arg1, items1.concat(callback(substr)));
                  }
                }
        };
        const proxy = new Proxy(startInactiveSpanResult.end, obj);
        startInactiveSpanResult.end = proxy;
        items.push(client.on("spanStart", (isStandaloneSpan) => {
          let timestamp = c2;
          if (!c2) {
            timestamp = isStandaloneSpan === closure_14;
          }
          if (!timestamp) {
            timestamp = outer1_0(map[6]).spanToJSON(isStandaloneSpan).timestamp;
            const obj = outer1_0(map[6]);
          }
          if (!timestamp) {
            timestamp = isStandaloneSpan instanceof outer1_0(map[14]).SentrySpan && isStandaloneSpan.isStandaloneSpan();
            const tmp6 = isStandaloneSpan instanceof outer1_0(map[14]).SentrySpan && isStandaloneSpan.isStandaloneSpan();
          }
          if (!timestamp) {
            const spanDescendants = outer1_0(map[6]).getSpanDescendants(closure_14);
            if (spanDescendants.includes(isStandaloneSpan)) {
              _cancelIdleTimeout();
              const result = map.set(isStandaloneSpan.spanContext().spanId, true);
              _restartChildSpanTimeout(outer1_0(map[7]).timestampInSeconds() + childSpanTimeout / 1000);
              const obj4 = outer1_0(map[7]);
            }
            const obj2 = outer1_0(map[6]);
          }
        }));
        items.push(client.on("spanEnd", (spanContext) => {
          if (!c2) {
            const spanId = spanContext.spanContext().spanId;
            if (map.has(spanId)) {
              map.delete(spanId);
            }
            if (0 === map.size) {
              _restartIdleTimeout(outer1_0(map[7]).timestampInSeconds() + idleTimeout / 1000);
              const obj = outer1_0(map[7]);
            }
          }
        }));
        items.push(client.on("idleSpanEnableAutoFinish", (arg0) => {
          if (arg0 === closure_14) {
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
            const obj = { code: outer1_0(map[11]).SPAN_STATUS_ERROR, message: "deadline_exceeded" };
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
    const _Object = Object;
    let obj2 = require(map[2]);
    const merged = Object.assign({ sample_rate: "0", sampled: "false" }, require(map[5]).getDynamicSamplingContextFromSpan(sentryNonRecordingSpan));
    const obj5 = require(map[5]);
    require(map[5]).freezeDscOnSpan(sentryNonRecordingSpan, merged);
    return sentryNonRecordingSpan;
  }
  obj = {};
};
