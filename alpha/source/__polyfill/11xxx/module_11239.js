// Module ID: 11239
// Function ID: 11240
// Dependencies: [729, 11235, 11240, 11241, 11213, 11222, 11230, 11223, 11208, 11225, 11236, 11242]
// Exports: startIdleSpan

// Module 11239
import _mod11208 from "module_11208" /* 11208 */;
import _mod11213 from "module_11213" /* 11213 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 11222 */;
import _mod11225 from "module_11225" /* 11225 */;
import _mod11236 from "module_11236" /* 11236 */;
import _toArray from "_toArray" /* 729 */;

const require = globalThis.__r;
let _require, closure_0, closure_1, heartbeatFailed, map;

const TRACING_DEFAULTS = { idleTimeout: 1000, finalTimeout: 30000, childSpanTimeout: 15000 };

export { TRACING_DEFAULTS };
export const startIdleSpan = function startIdleSpan(arg0) {
  let _undefined;
  let closure_10;
  let closure_11;
  const f143290 = () => {
    const tmp = !c2 && 0 === map.size && closure_4;
    if (tmp) {
      idleTimeout = "idleTimeout";
      c12.end(closure_0);
    }
  };
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  _require = undefined;
  let finalTimeout;
  let childSpanTimeout;
  let beforeSpanEnd;
  let currentScope;
  let activeSpan;
  let c12;
  function onIdleSpanEnded(arg0) {
    closure_0 = arg0;
    c2 = true;
    map.clear();
    const item = items.forEach((fn) => fn());
    let obj = closure_0(map[6]);
    obj._setSpanForScope(closure_10, closure_11);
    let obj2 = closure_0(map[4]);
    let obj3 = c12;
    let spanToJSONResult = obj2.spanToJSON(c12);
    if (spanToJSONResult.start_timestamp) {
      const tmp7 = spanToJSONResult.data || {};
      if (!tmp7[closure_0(undefined, map[7]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON]) {
        const attr = obj3.setAttribute(tmp3(tmp4[7]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, idleTimeout);
      }
      let logger = tmp3(tmp4[8]).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Idle span \"" + spanToJSONResult.op + "\" finished");
      const tmp3Result = closure_0(map[4]);
      const spanDescendants = tmp3Result.getSpanDescendants(obj3);
      const found = spanDescendants.filter((item) => item !== _undefined);
      const item1 = found.forEach((isRecording) => {
        if (isRecording.isRecording()) {
          const setStatus = isRecording.setStatus;
          const obj = { code: _mod11225.SPAN_STATUS_ERROR, message: "cancelled" };
          setStatus(obj);
          isRecording.end(closure_0);
          if (_mod11236.DEBUG_BUILD) {
            const logger = _mod11208.logger;
            const _JSON = JSON;
            logger.log("[Tracing] Cancelling span since span ended early", JSON.stringify(isRecording, undefined, 2));
          }
        }
        const obj2 = _mod11213;
        const spanToJSONResult = obj2.spanToJSON(isRecording);
        const timestamp = spanToJSONResult.timestamp;
        let num2 = 0;
        if (undefined !== timestamp) {
          num2 = timestamp;
        }
        const start_timestamp = spanToJSONResult.start_timestamp;
        let num3 = 0;
        if (undefined !== start_timestamp) {
          num3 = start_timestamp;
        }
        let tmp14 = num2 - num3 <= (finalTimeout + idleTimeout) / 1000;
        if (_mod11236.DEBUG_BUILD) {
          const _JSON2 = JSON;
          const json = JSON.stringify(isRecording, undefined, 2);
          if (num3 <= closure_0) {
            if (!tmp14) {
              const logger3 = _mod11208.logger;
              logger3.log("[Tracing] Discarding span since it finished after idle span final timeout", json);
            }
          } else {
            const logger2 = _mod11208.logger;
            logger2.log("[Tracing] Discarding span since it happened after idle span was finished", json);
          }
        }
        if (tmp14) {
          tmp14 = tmp13;
        }
        if (!tmp14) {
          const obj3 = _mod11213;
          const result = obj3.removeChildSpanFromSpan(c12, isRecording);
          closure_1 = closure_1 + 1;
        }
      });
      const tmp13 = map;
      if (0 > 0) {
        let tmp14 = map;
        const attr1 = obj3.setAttribute("sentry.idle_span_discarded_spans", map);
      }
    }
  }
  map = new Map();
  let c2 = false;
  let idleTimeout = "externalFinish";
  let closure_4 = !obj.disableAutoFinish;
  let items = [];
  idleTimeout = obj.idleTimeout;
  if (undefined === idleTimeout) {
    const tmp2 = idleTimeout;
    idleTimeout = idleTimeout.idleTimeout;
  }
  finalTimeout = obj.finalTimeout;
  if (undefined === finalTimeout) {
    const tmp3 = idleTimeout;
    finalTimeout = idleTimeout.finalTimeout;
  }
  childSpanTimeout = obj.childSpanTimeout;
  if (undefined === childSpanTimeout) {
    const tmp4 = idleTimeout;
    childSpanTimeout = idleTimeout.childSpanTimeout;
  }
  beforeSpanEnd = obj.beforeSpanEnd;
  let tmp6 = map;
  let obj2 = require("module_11235");
  const client = obj2.getClient();
  if (client) {
    const tmp5Result = require("module_11240");
    if (tmp5Result.hasTracingEnabled()) {
      const tmp5Result6 = require("module_11235");
      currentScope = tmp5Result6.getCurrentScope();
      const tmp5Result7 = require("module_11213");
      activeSpan = tmp5Result7.getActiveSpan();
      const tmp5Result8 = require("module_11242");
      const startInactiveSpanResult = tmp5Result8.startInactiveSpan(arg0);
      const _setSpanForScope = tmp5(tmp6[6])._setSpanForScope;
      require("module_11230");
      const tmp5Result10 = require("module_11235");
      _setSpanForScope(tmp5Result10.getCurrentScope(), startInactiveSpanResult);
      if (require("module_11236").DEBUG_BUILD) {
        let logger = tmp5(tmp6[8]).logger;
        const str = "[Tracing] Started span is an idle span";
        const logResult = logger.log("[Tracing] Started span is an idle span");
      }
      c12 = startInactiveSpanResult;
      const _Proxy = Proxy;
      let obj3 = {
        apply(arg0, arg1, alerts) {
              if (beforeSpanEnd) {
                tmp2(c12);
              }
              const arr = _toArray(alerts);
              let first = arr[0];
              const substr = arr.slice(1);
              if (!first) {
                let obj = _browserPerformanceTimeOriginMode;
                first = obj.timestampInSeconds();
              }
              const obj2 = _mod11213;
              const result = obj2.spanTimeInputToSeconds(first);
              const obj3 = _mod11213;
              const spanDescendants = obj3.getSpanDescendants(c12);
              const found = spanDescendants.filter((item) => item !== _undefined);
              const tmp12 = c12;
              if (found.length) {
                const mapped = found.map((item) => {
                  const obj = closure_1_0(map[4]);
                  return obj.spanToJSON(item).timestamp;
                });
                const found1 = mapped.filter((item) => item);
                let num2;
                if (found1.length) {
                  const _Math = Math;
                  items = [];
                  HermesBuiltin.arraySpread(items, found1, 0);
                  const _Math2 = Math;
                  num2 = HermesBuiltin.apply(max, items, Math);
                }
                const tmp9Result = _mod11213;
                let num4 = tmp9Result.spanToJSON(tmp12).start_timestamp;
                let num6 = Infinity;
                const _Math3 = Math;
                if (num4) {
                  num6 = num4 + finalTimeout / 1000;
                }
                const _Math4 = Math;
                const max2 = Math.max;
                if (!num4) {
                  num4 = -Infinity;
                }
                const _Math5 = Math;
                const min2 = Math.min;
                if (!num2) {
                  num2 = Infinity;
                }
                const minResult = min(num6, max2(num4, min2(result, num2)));
                onIdleSpanEnded(minResult);
                const _Reflect2 = Reflect;
                const items1 = [minResult];
                const apply2 = Reflect.apply;
                HermesBuiltin.arraySpread(items1, substr, 1);
                return apply2(arg0, arg1, items1);
              } else {
                onIdleSpanEnded(result);
                const _Reflect = Reflect;
                const items2 = [result];
                HermesBuiltin.arraySpread(items2, substr, 1);
                return apply(arg0, arg1, items2);
              }
            }
      };
      const self = this;
      const self2 = this;
      let tmp13 = obj3;
      const proxy = new Proxy(startInactiveSpanResult.end, obj3);
      startInactiveSpanResult.end = proxy;
      const str2 = "spanStart";
      let arr = items.push(client.on("spanStart", (spanContext) => {
        let timeout;
        let timestamp = c2 || spanContext === c12;
        if (!timestamp) {
          const obj = timeout(map[4]);
          timestamp = obj.spanToJSON(spanContext).timestamp;
        }
        if (!timestamp) {
          const obj2 = timeout(map[4]);
          const spanDescendants = obj2.getSpanDescendants(c12);
          if (spanDescendants.includes(spanContext)) {
            const spanId = spanContext.spanContext().spanId;
            if (timeout) {
              const _clearTimeout = clearTimeout;
              clearTimeout(timeout);
              timeout = undefined;
            }
            const result = map.set(spanId, true);
            const obj4 = timeout(map[5]);
            obj4.timestampInSeconds() + childSpanTimeout / 1000;
            const _setTimeout = setTimeout;
            timeout = setTimeout(() => {
              const tmp = !closure_2_2 && c4;
              if (tmp) {
                heartbeatFailed = "heartbeatFailed";
                _undefined.end(closure_1_0);
              }
            }, childSpanTimeout);
          }
        }
      }));
      const str3 = "spanEnd";
      items.push(client.on("spanEnd", (spanContext) => {
        let timeout;
        const tmp = c2;
        if (!tmp) {
          const spanId = spanContext.spanContext().spanId;
          if (map.has(spanId)) {
            map.delete(spanId);
          }
          if (0 === map.size) {
            const obj2 = timeout(map[5]);
            timeout = obj2.timestampInSeconds() + idleTimeout / 1000;
            const tmp6 = idleTimeout;
            if (timeout) {
              const _clearTimeout = clearTimeout;
              clearTimeout(timeout);
              timeout = undefined;
            }
            const _setTimeout = setTimeout;
            timeout = setTimeout(f143290, tmp6);
          }
        }
      }));
      items.push(client.on("idleSpanEnableAutoFinish", (arg0) => {
        if (arg0 === c12) {
          let c4 = true;
          let timeout;
          let tmp = timeout;
          if (tmp) {
            const _clearTimeout = clearTimeout;
            clearTimeout(timeout);
            timeout = undefined;
          }
          const _setTimeout = setTimeout;
          timeout = setTimeout(f143290, idleTimeout);
          if (map.size) {
            const _setTimeout2 = setTimeout;
            timeout = setTimeout(() => {
              const tmp = !closure_2_2 && c4;
              if (tmp) {
                heartbeatFailed = "heartbeatFailed";
                _undefined.end(closure_1_0);
              }
            }, childSpanTimeout);
          }
        }
      }));
      if (!obj.disableAutoFinish) {
        const tmp19 = _require;
        if (tmp19) {
          let _clearTimeout = clearTimeout;
          clearTimeout(_require);
          _require = undefined;
        }
        let _setTimeout = setTimeout;
        _require = setTimeout(f143290, idleTimeout);
      }
      let _setTimeout2 = setTimeout;
      const timerId = setTimeout(() => {
        const tmp = c2;
        if (!tmp) {
          const setStatus = _undefined.setStatus;
          const obj = { code: _mod11225.SPAN_STATUS_ERROR, message: "deadline_exceeded" };
          setStatus(obj);
          idleTimeout = "finalTimeout";
          _undefined.end();
        }
      }, finalTimeout);
      return startInactiveSpanResult;
    }
  }
  const sentryNonRecordingSpan = new tmp5(tmp6[3]).SentryNonRecordingSpan();
  return sentryNonRecordingSpan;
};
