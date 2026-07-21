// Module ID: 152
// Function ID: 2385
// Name: Performance
// Dependencies: []

// Module 152 (Performance)
importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let fn;
if (null != importDefault(dependencyMap[4])) {
  fn = importDefault(dependencyMap[4]).now;
}
if (null == fn) {
  fn = global.nativePerformanceNow;
}
if (null == fn) {
  fn = () => Date.now();
}
let closure_7 = [null, null];
const tmp4 = () => {
  class Performance {
    constructor() {
      tmp = closure_4(this, Performance);
      eventCounts = new Performance(closure_2[5]).EventCounts();
      this.eventCounts = eventCounts;
      this.now = closure_6;
      return;
    }
  }
  const arg1 = Performance;
  let obj = {
    key: "memory",
    get() {
      let hermes_allocatedBytes;
      let hermes_heapSize;
      if (null != callback(closure_2[4])) {
        if (callback(closure_2[4]).getSimpleMemoryInfo) {
          let obj = callback(closure_2[4]);
          const simpleMemoryInfo = obj.getSimpleMemoryInfo();
          if (simpleMemoryInfo.hasOwnProperty("hermes_heapSize")) {
            ({ hermes_heapSize, hermes_allocatedBytes } = simpleMemoryInfo);
            let tmp16 = callback(closure_2[6]);
            obj = { jsHeapSizeLimit: null, totalJSHeapSize: hermes_heapSize, usedJSHeapSize: hermes_allocatedBytes };
            const prototype2 = tmp16.prototype;
            tmp16 = new tmp16(obj);
            return tmp16;
          } else {
            let tmp9 = callback(closure_2[6]);
            const prototype = tmp9.prototype;
            tmp9 = new tmp9();
            return tmp9;
          }
        }
      }
      let tmp3 = callback(closure_2[6]);
      tmp3 = new tmp3();
      return tmp3;
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "rnStartupTiming",
    get() {
      let endTime;
      let executeJavaScriptBundleEntryPointEnd;
      let executeJavaScriptBundleEntryPointStart;
      let initializeRuntimeEnd;
      let initializeRuntimeStart;
      let startTime;
      if (null != callback(closure_2[4])) {
        if (callback(closure_2[4]).getReactNativeStartupTiming) {
          let obj = callback(closure_2[4]);
          const reactNativeStartupTiming = obj.getReactNativeStartupTiming();
          ({ startTime, endTime, initializeRuntimeStart, initializeRuntimeEnd, executeJavaScriptBundleEntryPointStart, executeJavaScriptBundleEntryPointEnd } = reactNativeStartupTiming);
          let tmp8 = callback(closure_2[7]);
          obj = { startTime, endTime, initializeRuntimeStart, initializeRuntimeEnd, executeJavaScriptBundleEntryPointStart, executeJavaScriptBundleEntryPointEnd };
          const prototype = tmp8.prototype;
          tmp8 = new tmp8(obj);
          return tmp8;
        }
      }
      let tmp3 = callback(closure_2[7]);
      tmp3 = new tmp3();
      return tmp3;
    }
  };
  items[1] = obj;
  obj = {
    key: "mark",
    value: function mark(name, startTime) {
      if (null != callback(closure_2[4])) {
        if (callback(closure_2[4]).markWithResult) {
          startTime = undefined;
          if (null != startTime) {
            startTime = startTime.startTime;
          }
          let markWithResultResult = callback(closure_2[4]).markWithResult(name, startTime);
          const obj2 = callback(closure_2[4]);
        }
        const PerformanceMark = Performance(closure_2[9]).PerformanceMark;
        let obj = { startTime: markWithResultResult };
        let detail;
        if (null != startTime) {
          detail = startTime.detail;
        }
        obj.detail = detail;
        const prototype = PerformanceMark.prototype;
        const performanceMark = new PerformanceMark(name, obj);
        return performanceMark;
      }
      obj = Performance(closure_2[8]);
      const result = obj.warnNoNativePerformance();
      markWithResultResult = performance.now();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "clearMarks",
    value: function clearMarks(arg0) {
      if (null != callback(closure_2[4])) {
        if (callback(closure_2[4]).clearMarks) {
          callback(closure_2[4]).clearMarks(arg0);
          const obj2 = callback(closure_2[4]);
        }
      }
      const result = Performance(closure_2[8]).warnNoNativePerformance();
    }
  };
  items[4] = {
    key: "measure",
    value: function measure(name, start) {
      let tmp;
      let end = arg2;
      let num = 0;
      let num2 = 0;
      if ("string" === typeof start) {
        let obj = {};
      } else if (undefined !== start) {
        if (undefined !== arg2) {
          const _TypeError3 = TypeError;
          const typeError = new TypeError("Performance.measure: Can't have both options and endMark");
          throw typeError;
        } else {
          if (undefined === start.start) {
            if (undefined === start.end) {
              const _TypeError2 = TypeError;
              const typeError1 = new TypeError("Performance.measure: Must have at least one of start/end specified in options");
              throw typeError1;
            }
          }
          if (undefined !== start.start) {
            if (undefined !== start.end) {
              if (undefined !== start.duration) {
                const _TypeError = TypeError;
                const typeError2 = new TypeError("Performance.measure: Can't have both start/end and duration explicitly in options");
                throw typeError2;
              }
            }
          }
          if ("number" === typeof start.start) {
            num = start.start;
          } else {
            start = start.start;
          }
          if ("number" === typeof start.end) {
            num2 = start.end;
          } else {
            end = start.end;
          }
          let duration = start.duration;
          if (null == duration) {
            duration = tmp;
          }
          tmp = duration;
          obj = start;
        }
      }
      let first = num;
      let tmp19 = tmp;
      if (null != callback(closure_2[4])) {
        if (callback(closure_2[4]).measureWithResult) {
          const obj3 = callback(closure_2[4]);
          const tmp33 = callback2(obj3.measureWithResult(name, num, num2, tmp, start, end), 2);
          first = tmp33[0];
          tmp19 = tmp33[1];
        }
        const PerformanceMeasure = Performance(closure_2[9]).PerformanceMeasure;
        obj = { startTime: first };
        let num6 = 0;
        if (null != tmp19) {
          num6 = tmp19;
        }
        obj.duration = num6;
        let detail;
        if (null != obj) {
          detail = obj.detail;
        }
        obj.detail = detail;
        const prototype4 = PerformanceMeasure.prototype;
        const performanceMeasure = new PerformanceMeasure(name, obj);
        return performanceMeasure;
      }
      const result = Performance(closure_2[8]).warnNoNativePerformance();
    }
  };
  items[5] = {
    key: "clearMeasures",
    value: function clearMeasures(arg0) {
      if (null != callback(closure_2[4])) {
        if (callback(closure_2[4]).clearMeasures) {
          if (null != callback(closure_2[4])) {
            callback(closure_2[4]).clearMeasures(arg0);
            const obj2 = callback(closure_2[4]);
          }
        }
      }
      const result = Performance(closure_2[8]).warnNoNativePerformance();
    }
  };
  items[6] = {
    key: "getEntries",
    value: function getEntries() {
      if (null != callback(closure_2[4])) {
        if (callback(closure_2[4]).getEntries) {
          const entries = callback(closure_2[4]).getEntries();
          const mapped = entries.map(Performance(closure_2[11]).rawToPerformanceEntry);
          const obj2 = callback(closure_2[4]);
        }
        return [];
      }
      const result = Performance(closure_2[8]).warnNoNativePerformance();
    }
  };
  items[7] = {
    key: "getEntriesByType",
    value: function getEntriesByType(navigation) {
      if (null != navigation) {
        if (!closure_7.includes(navigation)) {
          const _console = console;
          console.warn("Deprecated API for given entry type.");
          return [];
        }
      }
      let num = 4;
      if (null == callback(closure_2[4])) {
        const result = Performance(closure_2[8]).warnNoNativePerformance();
        let items = [];
        const obj = Performance(closure_2[8]);
      }
      const obj2 = callback(closure_2[num]);
      const entriesByType = obj2.getEntriesByType(Performance(closure_2[11]).performanceEntryTypeToRaw(navigation));
      num = entriesByType.map;
      items = num(Performance(closure_2[11]).rawToPerformanceEntry);
    }
  };
  items[8] = {
    key: "getEntriesByName",
    value: function getEntriesByName(arg0, result1) {
      let map = null;
      if (null != result1) {
        if (!closure_7.includes(result1)) {
          const _console = console;
          console.warn("Deprecated API for given entry type.");
          return [];
        }
      }
      let num = 4;
      if (map == callback(closure_2[4])) {
        const result = Performance(closure_2[8]).warnNoNativePerformance();
        let items = [];
        const obj = Performance(closure_2[8]);
      }
      result1 = undefined;
      if (map != result1) {
        result1 = Performance(closure_2[11]).performanceEntryTypeToRaw(result1);
        const obj3 = Performance(closure_2[11]);
      }
      const entriesByName = callback(closure_2[num]).getEntriesByName(arg0, result1);
      map = entriesByName.map;
      num = closure_2;
      items = map(Performance(closure_2[11]).rawToPerformanceEntry);
    }
  };
  return callback(Performance, items);
}();
arg1(dependencyMap[12]).setPlatformObject(tmp4);

export default tmp4;
