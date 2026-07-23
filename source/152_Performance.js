// Module ID: 152
// Function ID: 2385
// Name: Performance
// Dependencies: [153, 57, 6, 7, 151, 154, 158, 159, 156, 160, 161, 166, 129]

// Module 152 (Performance)
import "_readOnlyError";
import _slicedToArray from "_slicedToArray";
import MemoryInfo from "MemoryInfo";
import ReactNativeStartupTiming from "ReactNativeStartupTiming";
import setPlatformObject from "setPlatformObject";

const require = arg1;
let fn;
if (null != require("NativePerformanceCxx")) {
  fn = require("NativePerformanceCxx").now;
}
if (null == fn) {
  fn = global.nativePerformanceNow;
}
if (null == fn) {
  fn = () => Date.now();
}
let closure_7 = ["mark", "measure"];
const tmp4 = (() => {
  class Performance {
    constructor() {
      tmp = outer1_4(this, Performance);
      eventCounts = new Performance(outer1_2[5]).EventCounts();
      this.eventCounts = eventCounts;
      this.now = outer1_6;
      return;
    }
  }
  let obj = {
    key: "memory",
    get() {
      let hermes_allocatedBytes;
      let hermes_heapSize;
      if (null != outer1_1(outer1_2[4])) {
        if (outer1_1(outer1_2[4]).getSimpleMemoryInfo) {
          let obj = outer1_1(outer1_2[4]);
          const simpleMemoryInfo = obj.getSimpleMemoryInfo();
          if (simpleMemoryInfo.hasOwnProperty("hermes_heapSize")) {
            ({ hermes_heapSize, hermes_allocatedBytes } = simpleMemoryInfo);
            let tmp16 = outer1_1(outer1_2[6]);
            obj = { jsHeapSizeLimit: null, totalJSHeapSize: hermes_heapSize, usedJSHeapSize: hermes_allocatedBytes };
            const prototype2 = tmp16.prototype;
            tmp16 = new tmp16(obj);
            return tmp16;
          } else {
            let tmp9 = outer1_1(outer1_2[6]);
            const prototype = tmp9.prototype;
            tmp9 = new tmp9();
            return tmp9;
          }
        }
      }
      let tmp3 = outer1_1(outer1_2[6]);
      tmp3 = new tmp3();
      return tmp3;
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "rnStartupTiming",
    get() {
      let endTime;
      let executeJavaScriptBundleEntryPointEnd;
      let executeJavaScriptBundleEntryPointStart;
      let initializeRuntimeEnd;
      let initializeRuntimeStart;
      let startTime;
      if (null != outer1_1(outer1_2[4])) {
        if (outer1_1(outer1_2[4]).getReactNativeStartupTiming) {
          let obj = outer1_1(outer1_2[4]);
          const reactNativeStartupTiming = obj.getReactNativeStartupTiming();
          ({ startTime, endTime, initializeRuntimeStart, initializeRuntimeEnd, executeJavaScriptBundleEntryPointStart, executeJavaScriptBundleEntryPointEnd } = reactNativeStartupTiming);
          let tmp8 = outer1_1(outer1_2[7]);
          obj = { startTime, endTime, initializeRuntimeStart, initializeRuntimeEnd, executeJavaScriptBundleEntryPointStart, executeJavaScriptBundleEntryPointEnd };
          const prototype = tmp8.prototype;
          tmp8 = new tmp8(obj);
          return tmp8;
        }
      }
      let tmp3 = outer1_1(outer1_2[7]);
      tmp3 = new tmp3();
      return tmp3;
    }
  };
  items[1] = obj;
  obj = {
    key: "mark",
    value: function mark(name, startTime) {
      if (null != outer1_1(outer1_2[4])) {
        if (outer1_1(outer1_2[4]).markWithResult) {
          startTime = undefined;
          if (null != startTime) {
            startTime = startTime.startTime;
          }
          let markWithResultResult = outer1_1(outer1_2[4]).markWithResult(name, startTime);
          const obj2 = outer1_1(outer1_2[4]);
        }
        const PerformanceMark = Performance(outer1_2[9]).PerformanceMark;
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
      obj = Performance(outer1_2[8]);
      const result = obj.warnNoNativePerformance();
      markWithResultResult = performance.now();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "clearMarks",
    value: function clearMarks(arg0) {
      if (null != outer1_1(outer1_2[4])) {
        if (outer1_1(outer1_2[4]).clearMarks) {
          outer1_1(outer1_2[4]).clearMarks(arg0);
          const obj2 = outer1_1(outer1_2[4]);
        }
      }
      const result = Performance(outer1_2[8]).warnNoNativePerformance();
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
      if (null != outer1_1(outer1_2[4])) {
        if (outer1_1(outer1_2[4]).measureWithResult) {
          const obj3 = outer1_1(outer1_2[4]);
          const tmp33 = outer1_3(obj3.measureWithResult(name, num, num2, tmp, start, end), 2);
          first = tmp33[0];
          tmp19 = tmp33[1];
        }
        const PerformanceMeasure = Performance(outer1_2[9]).PerformanceMeasure;
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
      const result = Performance(outer1_2[8]).warnNoNativePerformance();
    }
  };
  items[5] = {
    key: "clearMeasures",
    value: function clearMeasures(arg0) {
      if (null != outer1_1(outer1_2[4])) {
        if (outer1_1(outer1_2[4]).clearMeasures) {
          if (null != outer1_1(outer1_2[4])) {
            outer1_1(outer1_2[4]).clearMeasures(arg0);
            const obj2 = outer1_1(outer1_2[4]);
          }
        }
      }
      const result = Performance(outer1_2[8]).warnNoNativePerformance();
    }
  };
  items[6] = {
    key: "getEntries",
    value: function getEntries() {
      if (null != outer1_1(outer1_2[4])) {
        if (outer1_1(outer1_2[4]).getEntries) {
          const entries = outer1_1(outer1_2[4]).getEntries();
          const mapped = entries.map(Performance(outer1_2[11]).rawToPerformanceEntry);
          const obj2 = outer1_1(outer1_2[4]);
        }
        return [];
      }
      const result = Performance(outer1_2[8]).warnNoNativePerformance();
    }
  };
  items[7] = {
    key: "getEntriesByType",
    value: function getEntriesByType(navigation) {
      if (null != navigation) {
        if (!outer1_7.includes(navigation)) {
          const _console = console;
          console.warn("Deprecated API for given entry type.");
          return [];
        }
      }
      let num = 4;
      if (null == outer1_1(outer1_2[4])) {
        const result = Performance(outer1_2[8]).warnNoNativePerformance();
        let items = [];
        const obj = Performance(outer1_2[8]);
      }
      const obj2 = outer1_1(outer1_2[num]);
      const entriesByType = obj2.getEntriesByType(Performance(outer1_2[11]).performanceEntryTypeToRaw(navigation));
      num = entriesByType.map;
      items = num(Performance(outer1_2[11]).rawToPerformanceEntry);
    }
  };
  items[8] = {
    key: "getEntriesByName",
    value: function getEntriesByName(arg0, result1) {
      let map = null;
      if (null != result1) {
        if (!outer1_7.includes(result1)) {
          const _console = console;
          console.warn("Deprecated API for given entry type.");
          return [];
        }
      }
      let num = 4;
      if (map == outer1_1(outer1_2[4])) {
        const result = Performance(outer1_2[8]).warnNoNativePerformance();
        let items = [];
        const obj = Performance(outer1_2[8]);
      }
      result1 = undefined;
      if (map != result1) {
        result1 = Performance(outer1_2[11]).performanceEntryTypeToRaw(result1);
        const obj3 = Performance(outer1_2[11]);
      }
      const entriesByName = outer1_1(outer1_2[num]).getEntriesByName(arg0, result1);
      map = entriesByName.map;
      num = outer1_2;
      items = map(Performance(outer1_2[11]).rawToPerformanceEntry);
    }
  };
  return callback(Performance, items);
})();
setPlatformObject.setPlatformObject(tmp4);

export default tmp4;
