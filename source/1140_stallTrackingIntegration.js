// Module ID: 1140
// Function ID: 12991
// Name: stallTrackingIntegration
// Dependencies: []
// Exports: stallTrackingIntegration

// Module 1140 (stallTrackingIntegration)
let closure_2 = importDefault(dependencyMap[0]);
const AppState = arg1(dependencyMap[1]).AppState;

export const stallTrackingIntegration = function stallTrackingIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    const minimumStallThresholdMs = {}.minimumStallThresholdMs;
    let num = 50;
    if (undefined !== minimumStallThresholdMs) {
      num = minimumStallThresholdMs;
    }
    const arg1 = num;
    const _Map = Map;
    const map = new Map();
    const dependencyMap = map;
    let obj = {
      automaticallyAdjustKeyboardInsets: true,
      flex: true,
      flexGrow: true,
      position: true,
      opacity: true,
      fontWeight: true,
      backgroundEventListener(arg0) {
          if ("active" === arg0) {
            obj.isBackground = false;
            if (null != obj.timeout) {
              const obj = 2(map[2]);
              obj.lastIntervalMs = 1000 * obj.timestampInSeconds();
              obj.iteration();
            }
          } else {
            obj.isBackground = true;
            if (null !== obj.timeout) {
              const _clearTimeout = clearTimeout;
              clearTimeout(obj.timeout);
            }
          }
        },
      iteration() {
          let num;
          let tmp28;
          let tmp29;
          let obj = num(map[2]);
          const result = 1000 * obj.timestampInSeconds();
          const diff = result - obj.lastIntervalMs;
          if (diff >= 50 + num) {
            const diff1 = diff - 50;
            obj.stallCount = obj.stallCount + 1;
            obj.totalStallTime = obj.totalStallTime + diff1;
            const entries = map.entries();
            const tmp23 = entries[Symbol.iterator]();
            while (tmp23 !== undefined) {
              let tmp26 = obj;
              let tmp27 = obj(tmp3, 2);
              [tmp28, tmp29] = tmp27;
              let longestStallTime = tmp29.longestStallTime;
              num = 0;
              let tmp30 = tmp29;
              if (null !== longestStallTime) {
                let tmp5 = longestStallTime;
                num = 0;
                if (undefined !== tmp31) {
                  num = longestStallTime;
                }
              }
              let tmp6 = diff1;
              let tmp8 = map;
              let tmp9 = tmp28;
              let _Object = Object;
              let _Object2 = Object;
              let tmp10 = tmp29;
              let bound = Math.max(num, tmp17);
              obj = { longestStallTime: bound };
              let result1 = map.set(tmp28, Object.assign(Object.assign({}, tmp30), obj));
              // continue
            }
            const tmp17 = diff1;
          }
          obj.lastIntervalMs = result;
          let isTracking = obj.isTracking;
          if (isTracking) {
            isTracking = !obj.isBackground;
          }
          if (isTracking) {
            const _setTimeout = setTimeout;
            obj.timeout = setTimeout(obj.iteration, 50);
          }
        }
    };
    let closure_2 = obj;
    function _onSpanStart(activeSpan) {
      let obj = num(map[3]);
      if (obj.isRootSpan(activeSpan)) {
        if (map.has(activeSpan)) {
          const debug = num(map[2]).debug;
          debug.error("[StallTracking] Tried to start stall tracking on a transaction already being tracked. Measurements might be lost.");
        } else {
          _startTracking();
          obj = { fontWeight: true, -480667083: true, atStart: _getCurrentStats(activeSpan) };
          const result = map.set(activeSpan, obj);
          _flushLeakedTransactions();
        }
      }
    }
    function _onSpanEnd(activeSpan) {
      if (obj.isRootSpan(activeSpan)) {
        const value = map.get(activeSpan);
        const obj2 = 2(map[2]);
        if (value) {
          const timestamp = obj2.spanToJSON(activeSpan).timestamp;
          if (tmp4Result.isNearToNow(timestamp)) {
            let stats = _getCurrentStats(activeSpan);
          } else {
            const latestChildSpanEndTimestamp = num(map[4]).getLatestChildSpanEndTimestamp(activeSpan);
            if (latestChildSpanEndTimestamp !== timestamp) {
              const debug2 = num(map[2]).debug;
              debug2.log("[StallTracking] Stall measurements not added due to a custom `endTimestamp` (root end is not equal to the latest child span end).");
            }
            if (!value.atTimestamp) {
              const debug3 = num(map[2]).debug;
              debug3.log("[StallTracking] Stall measurements not added due to `endTimestamp` not being close to now. And no previous stats from child end were found.");
            }
            if (tmp20) {
              stats = value.atTimestamp.stats;
            }
            const obj4 = num(map[4]);
            const tmp20 = latestChildSpanEndTimestamp === timestamp && value.atTimestamp;
          }
          map.delete(activeSpan);
          _shouldStopTracking();
          if (stats) {
            const obj5 = num(map[4]);
            obj5.setSpanMeasurement(activeSpan, num(map[5]).STALL_COUNT, stats.stall_count.value - value.atStart.stall_count.value, value.atStart.stall_count.unit);
            const obj6 = num(map[4]);
            obj6.setSpanMeasurement(activeSpan, num(map[5]).STALL_TOTAL_TIME, stats.stall_total_time.value - value.atStart.stall_total_time.value, value.atStart.stall_total_time.unit);
            const obj7 = num(map[4]);
            obj7.setSpanMeasurement(activeSpan, num(map[5]).STALL_LONGEST_TIME, stats.stall_longest_time.value, stats.stall_longest_time.unit);
          } else if (undefined !== timestamp) {
            const debug4 = num(map[2]).debug;
            debug4.log("[StallTracking] Stall measurements not added due to `endTimestamp` not being close to now.", "endTimestamp", timestamp, "now", num(map[2]).timestampInSeconds());
            const obj8 = num(map[2]);
          }
        } else {
          const debug = obj2.debug;
          debug.log("[StallTracking] Stall measurements were not added to transaction due to exceeding the max count.");
          map.delete(activeSpan);
          _shouldStopTracking();
        }
        const tmp5 = map;
      } else {
        return _onChildSpanEnd(activeSpan);
      }
      const obj = num(map[3]);
    }
    function _onChildSpanEnd(activeSpan) {
      const rootSpan = num(map[2]).getRootSpan(activeSpan);
      const obj = num(map[2]);
      const timestamp = num(map[2]).spanToJSON(activeSpan).timestamp;
      if (timestamp) {
        _markSpanFinish(rootSpan, timestamp);
      }
    }
    function _markSpanFinish(rootSpan, timestamp) {
      const value = map.get(rootSpan);
      if (value) {
        const _Math = Math;
        let obj = num(map[2]);
        if (Math.abs(obj.timestampInSeconds() - timestamp) > 0.02) {
          const debug = num(map[2]).debug;
          debug.log("[StallTracking] Span end not logged due to end timestamp being outside the margin of error from now.");
          if (tmp12) {
            const _Object3 = Object;
            const _Object4 = Object;
            obj = { atTimestamp: null };
            const result = map.set(rootSpan, Object.assign(Object.assign({}, value), obj));
          }
          const tmp12 = value.atTimestamp && value.atTimestamp.timestamp < timestamp;
        } else {
          const _Object = Object;
          const _Object2 = Object;
          obj = {};
          const obj1 = { timestamp };
          const merged = Object.assign({}, value);
          obj1.stats = _getCurrentStats(rootSpan);
          obj.atTimestamp = obj1;
          const result1 = map.set(rootSpan, Object.assign(merged, obj));
        }
      }
    }
    function _getCurrentStats(rootSpan) {
      let obj = { stall_count: obj, stall_total_time: obj };
      obj = { value: obj.stallCount, unit: "none" };
      obj = { value: obj.totalStallTime, unit: "millisecond" };
      const obj1 = {};
      const value = map.get(rootSpan);
      let longestStallTime;
      if (null !== value) {
        if (undefined !== value) {
          longestStallTime = value.longestStallTime;
        }
      }
      let num = 0;
      if (null !== longestStallTime) {
        num = 0;
        if (undefined !== longestStallTime) {
          num = longestStallTime;
        }
      }
      obj1.value = num;
      obj1.unit = "millisecond";
      obj.stall_longest_time = obj1;
      return obj;
    }
    function _startTracking() {
      if (!obj.isTracking) {
        obj.isTracking = true;
        const _Math = Math;
        const obj = 2(map[2]);
        obj.lastIntervalMs = Math.floor(1000 * obj.timestampInSeconds());
        obj.iteration();
      }
    }
    function _shouldStopTracking() {
      if (0 === map.size) {
        obj.isTracking = false;
        if (null !== obj.timeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(obj.timeout);
          obj.timeout = null;
        }
        _reset();
      }
    }
    function _reset() {
      obj.stallCount = 0;
      obj.totalStallTime = 0;
      obj.lastIntervalMs = 0;
      map.clear();
    }
    function _flushLeakedTransactions() {
      if (map.size > 10) {
        let num = 0;
        const diff = map.size - 10;
        const keys = map.keys();
        const iter = keys[Symbol.iterator]();
        while (iter !== undefined) {
          let tmp9 = num;
          let tmp10 = diff;
          if (num >= diff) {
            iter.return();
            // break
          } else {
            let tmp11 = num;
            num = num + 1;
            let tmp12 = map;
            let tmp13 = nextResult;
            let deleteResult = map.delete(tmp8);
            // continue
          }
          break;
        }
        const nextResult = iter.next();
      }
    }
    let isAvailable;
    if (null != _onSpanStart) {
      isAvailable = _onSpanStart.isAvailable;
    }
    if (isAvailable) {
      const listener = _onSpanStart.addEventListener("change", obj.backgroundEventListener);
    }
    obj = {
      name: "StallTracking",
      setup(on) {
          on.on("spanStart", _onSpanStart);
          on.on("spanEnd", _onSpanEnd);
        }
    };
    obj._internalState = obj;
    return obj;
  }
};
