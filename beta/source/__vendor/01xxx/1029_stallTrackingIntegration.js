// Module ID: 1029
// Function ID: 1030
// Name: stallTrackingIntegration
// Dependencies: [32, 17, 682, 987, 1021, 1024]
// Exports: stallTrackingIntegration

// Module 1029 (stallTrackingIntegration)
import _mod682 from "module_682" /* 682 */;
import _mod987 from "module_987" /* 987 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const AppState = fn(17).AppState;

export const stallTrackingIntegration = () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let num = obj.minimumStallThresholdMs;
  if (num === undefined) {
    num = 50;
  }
  const map = new Map();
  let obj2 = {
    isTracking: false,
    timeout: null,
    isBackground: false,
    lastIntervalMs: 0,
    totalStallTime: 0,
    stallCount: 0,
    backgroundEventListener(arg0) {
      if ("active" === arg0) {
        obj2.isBackground = false;
        if (null != obj2.timeout) {
          obj2 = _mod682;
          obj.lastIntervalMs = 1000 * obj2.timestampInSeconds();
          obj.iteration();
        }
      } else {
        obj2.isBackground = true;
        if (null !== obj2.timeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp.timeout);
        }
      }
    },
    iteration() {
      const result = 1000 * _mod682.timestampInSeconds();
      const diff = result - obj2.lastIntervalMs;
      if (diff >= 50 + num) {
        const diff1 = diff - 50;
        tmp2.stallCount = tmp2.stallCount + 1;
        tmp2.totalStallTime = tmp2.totalStallTime + diff1;
        const entries = map.entries();
        const tmp26 = entries[Symbol.iterator]();
        while (tmp26 !== undefined) {
          let tmp8 = _slicedToArray(tmp5, 2);
          [tmp9, tmp10] = tmp8;
          let longestStallTime = tmp10.longestStallTime;
          num = 0;
          let tmp11 = tmp10;
          if (null !== longestStallTime) {
            num = 0;
            if (undefined !== tmp12) {
              num = longestStallTime;
            }
          }
          let _Object = Object;
          let _Object2 = Object;
          let bound = Math.max(num, diff1);
          obj2 = { longestStallTime: bound };
          let result1 = map.set(tmp9, Object.assign(Object.assign({}, tmp11), obj2));
          continue;
        }
      }
      obj2.lastIntervalMs = result;
      if (tmp20) {
        const _setTimeout = setTimeout;
        tmp19.timeout = setTimeout(tmp19.iteration, 50);
      }
    }
  };
  function _onSpanStart(activeSpan) {
    if (obj.isRootSpan(activeSpan)) {
      if (map.has(activeSpan)) {
        const debug = tmp(682).debug;
        debug.error("[StallTracking] Tried to start stall tracking on a transaction already being tracked. Measurements might be lost.");
      } else if (typeof _startTracking === "function") {
        if (!obj2.isTracking) {
          obj3.isTracking = true;
          const _Math = Math;
          obj3.lastIntervalMs = Math.floor(1000 * tmp(682).timestampInSeconds());
          obj3.iteration();
          const tmpResult = tmp(682);
        }
        if (typeof _getCurrentStats === "function") {
          const obj4 = { stall_count: null, stall_total_time: null, stall_longest_time: null };
          const obj5 = { value: obj3.stallCount, unit: "none" };
          obj4.stall_count = obj5;
          const obj6 = { value: obj3.totalStallTime, unit: "millisecond" };
          obj4.stall_total_time = obj6;
          value = obj2.get(activeSpan);
          let longestStallTime;
          if (null !== value) {
            if (undefined !== value) {
              longestStallTime = value.longestStallTime;
            }
          }
          let num3 = 0;
          if (null !== longestStallTime) {
            num3 = 0;
            if (undefined !== longestStallTime) {
              num3 = longestStallTime;
            }
          }
          const obj7 = { longestStallTime: 0, atTimestamp: null, atStart: null };
          const obj8 = { value: num3, unit: "millisecond" };
          obj4.stall_longest_time = obj8;
          obj7.atStart = obj4;
          tmp6(activeSpan, obj7);
          _flushLeakedTransactions();
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  function _onSpanEnd(activeSpan) {
    if (obj.isRootSpan(activeSpan)) {
      value = map.get(activeSpan);
      const tmpResult = tmp(682);
      if (value) {
        const timestamp2 = tmpResult.spanToJSON(activeSpan).timestamp;
        if (tmpResult10.isNearToNow(timestamp2)) {
          if (typeof _getCurrentStats === "function") {
            obj2 = { stall_count: null, stall_total_time: null, stall_longest_time: null };
            const obj3 = { value: obj2.stallCount, unit: "none" };
            obj2.stall_count = obj3;
            const obj5 = { value: obj2.totalStallTime, unit: "millisecond" };
            obj2.stall_total_time = obj5;
            const value4 = obj11.get(activeSpan);
            let longestStallTime;
            if (null !== value4) {
              if (undefined !== value4) {
                longestStallTime = value4.longestStallTime;
              }
            }
            let num4 = 0;
            if (null !== longestStallTime) {
              num4 = 0;
              if (undefined !== longestStallTime) {
                num4 = longestStallTime;
              }
            }
            const obj6 = { value: num4, unit: "millisecond" };
            obj2.stall_longest_time = obj6;
            let stats = obj2;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          const latestChildSpanEndTimestamp = tmp(1021).getLatestChildSpanEndTimestamp(activeSpan);
          if (latestChildSpanEndTimestamp !== timestamp2) {
            const debug3 = tmp(682).debug;
            debug3.log("[StallTracking] Stall measurements not added due to a custom `endTimestamp` (root end is not equal to the latest child span end).");
          }
          if (!value.atTimestamp) {
            const debug4 = tmp(682).debug;
            debug4.log("[StallTracking] Stall measurements not added due to `endTimestamp` not being close to now. And no previous stats from child end were found.");
          }
          if (tmp29) {
            stats = value.atTimestamp.stats;
          }
          tmp29 = latestChildSpanEndTimestamp === timestamp2 && value.atTimestamp;
          const tmpResult11 = tmp(1021);
        }
        obj11.delete(activeSpan);
        if (typeof _shouldStopTracking === "function") {
          if (0 === obj11.size) {
            obj2.isTracking = false;
            if (null !== obj2.timeout) {
              const _clearTimeout2 = clearTimeout;
              clearTimeout(tmp37.timeout);
              tmp37.timeout = null;
            }
            if (typeof _reset === "function") {
              tmp37.stallCount = 0;
              tmp37.totalStallTime = 0;
              tmp37.lastIntervalMs = 0;
              obj11.clear();
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          if (stats) {
            const tmpResult12 = tmp(1021);
            tmpResult12.setSpanMeasurement(activeSpan, tmp(1024).STALL_COUNT, stats.stall_count.value - value.atStart.stall_count.value, value.atStart.stall_count.unit);
            const tmpResult13 = tmp(1021);
            tmpResult13.setSpanMeasurement(activeSpan, tmp(1024).STALL_TOTAL_TIME, stats.stall_total_time.value - value.atStart.stall_total_time.value, value.atStart.stall_total_time.unit);
            const tmpResult14 = tmp(1021);
            tmpResult14.setSpanMeasurement(activeSpan, tmp(1024).STALL_LONGEST_TIME, stats.stall_longest_time.value, stats.stall_longest_time.unit);
          } else if (undefined !== timestamp2) {
            const debug5 = tmp(682).debug;
            debug5.log("[StallTracking] Stall measurements not added due to `endTimestamp` not being close to now.", "endTimestamp", timestamp2, "now", tmp(682).timestampInSeconds());
            const tmpResult15 = tmp(682);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        tmpResult10 = tmp(1021);
      } else {
        const debug2 = tmpResult.debug;
        debug2.log("[StallTracking] Stall measurements were not added to transaction due to exceeding the max count.");
        obj11.delete(activeSpan);
        if (typeof _shouldStopTracking === "function") {
          if (0 === obj11.size) {
            obj2.isTracking = false;
            if (null !== obj2.timeout) {
              const _clearTimeout = clearTimeout;
              clearTimeout(tmp20.timeout);
              tmp20.timeout = null;
            }
            if (typeof _reset === "function") {
              tmp20.stallCount = 0;
              tmp20.totalStallTime = 0;
              tmp20.lastIntervalMs = 0;
              obj11.clear();
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    } else if (typeof _onChildSpanEnd === "function") {
      const rootSpan = tmp(682).getRootSpan(activeSpan);
      const tmpResult16 = tmp(682);
      const timestamp = tmp(682).spanToJSON(activeSpan).timestamp;
      if (timestamp) {
        if (typeof _markSpanFinish === "function") {
          const value5 = map.get(rootSpan);
          if (value5) {
            const _Math = Math;
            if (Math.abs(tmpResult18.timestampInSeconds() - timestamp) > 0.02) {
              const debug = tmp(682).debug;
              debug.log("[StallTracking] Span end not logged due to end timestamp being outside the margin of error from now.");
              if (tmp14) {
                const _Object = Object;
                const _Object2 = Object;
                const result = obj4.set(rootSpan, Object.assign(Object.assign({}, value5), { atTimestamp: null }));
              }
              tmp14 = value5.atTimestamp && value5.atTimestamp.timestamp < timestamp;
            } else {
              const _Object3 = Object;
              const obj7 = { timestamp, stats: null };
              if (typeof _getCurrentStats === "function") {
                const obj8 = { stall_count: null, stall_total_time: null, stall_longest_time: null };
                const obj9 = { value: obj2.stallCount, unit: "none" };
                obj8.stall_count = obj9;
                const obj10 = { value: obj2.totalStallTime, unit: "millisecond" };
                obj8.stall_total_time = obj10;
                const value6 = obj4.get(rootSpan);
                let longestStallTime1;
                if (null !== value6) {
                  if (undefined !== value6) {
                    longestStallTime1 = value6.longestStallTime;
                  }
                }
                let num2 = 0;
                if (null !== longestStallTime1) {
                  num2 = 0;
                  if (undefined !== longestStallTime1) {
                    num2 = longestStallTime1;
                  }
                }
                const obj12 = { atTimestamp: null };
                const obj13 = { value: num2, unit: "millisecond" };
                obj8.stall_longest_time = obj13;
                obj7.stats = obj8;
                obj12.atTimestamp = obj7;
                const result1 = obj4.set(rootSpan, Object.assign(tmp52, obj12));
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            tmpResult18 = tmp(682);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    obj = _mod987;
  }
  function _onChildSpanEnd(arg0) {

  }
  function _markSpanFinish(arg0, arg1) {

  }
  function _getCurrentStats(arg0) {

  }
  function _startTracking() {

  }
  function _shouldStopTracking() {

  }
  function _reset() {

  }
  function _flushLeakedTransactions() {
    if (map.size > 10) {
      num = 0;
      const diff = obj.size - 10;
      const keys = obj.keys();
      const iter = keys[Symbol.iterator]();
      while (iter !== undefined) {
        if (num >= diff) {
          iter.return();
          break;
        } else {
          num = num + 1;
          let deleteResult = map.delete(tmp9);
          continue;
        }
        break;
      }
      const nextResult = iter.next();
    }
  }
  let isAvailable;
  if (null != _onSpanStart) {
    isAvailable = obj3.isAvailable;
  }
  if (isAvailable) {
    const listener = obj3.addEventListener("change", obj2.backgroundEventListener);
  }
  return {
    name: "StallTracking",
    setup(on) {
      on.on("spanStart", _onSpanStart);
      on.on("spanEnd", _onSpanEnd);
    },
    _internalState: obj2
  };
};
