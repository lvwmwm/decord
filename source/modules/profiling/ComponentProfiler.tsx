// Module ID: 10359
// Function ID: 79922
// Name: formatString
// Dependencies: [6, 7, 31, 33, 2]
// Exports: clearComponentRenderStats, default, dumpStats, getComponentRenderStats, pauseComponentProfiler, resetComponentProfiler, resumeComponentProfiler, serializeComponentRenderAverages

// Module 10359 (formatString)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import result from "result";
import { jsx } from "jsxProd";

function formatString(length2) {
  let length = arg1;
  if (length2.length <= arg1) {
    length = length2.length;
  }
  const substr = length2.substring(0, length);
  return substr.padEnd(arg1, " ");
}
let tmp2 = (() => {
  class StatCollector {
    constructor() {
      tmp = StatCollector(this, StatCollector);
      this.totalMicroseconds = 0;
      this.count = 0;
      this.minMicroseconds = null;
      this.maxMicroseconds = null;
      return;
    }
  }
  let obj = {
    key: "addValue",
    value(arg0) {
      const self = this;
      this.count = this.count + 1;
      const rounded = Math.round(1000 * arg0);
      this.totalMicroseconds = this.totalMicroseconds + rounded;
      let MAX_SAFE_INTEGER = this.minMicroseconds;
      if (null == MAX_SAFE_INTEGER) {
        const _Number = Number;
        MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
      }
      self.minMicroseconds = Math.min(MAX_SAFE_INTEGER, rounded);
      let MIN_SAFE_INTEGER = self.maxMicroseconds;
      if (null == MIN_SAFE_INTEGER) {
        const _Number2 = Number;
        MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
      }
      self.maxMicroseconds = Math.max(MIN_SAFE_INTEGER, rounded);
    }
  };
  const items = [obj, ];
  obj = {
    key: "mean",
    get() {
      return this.totalMicroseconds / this.count;
    }
  };
  items[1] = obj;
  return callback(StatCollector, items);
})();
let closure_4 = tmp2;
let closure_5 = {};
let c6 = true;
const result = require("result").fileFinishedImporting("modules/profiling/ComponentProfiler.tsx");

export default function ComponentProfiler(arg0) {
  let children;
  let id;
  ({ id, children } = arg0);
  return <React.Profiler id={id} onRender={React.useCallback((arg0, arg1, arg2) => {
    if (outer1_6) {
      if (!(arg0 in outer1_5)) {
        const obj = {};
        const prototype = outer1_4.prototype;
        const tmp6 = new outer1_4();
        obj.mount = tmp6;
        const prototype2 = outer1_4.prototype;
        const tmp10 = new outer1_4();
        obj.update = tmp10;
        const prototype3 = outer1_4.prototype;
        const tmp14 = new outer1_4();
        obj.nestedUpdate = tmp14;
        outer1_5[arg0] = obj;
      }
      if ("mount" === arg1) {
        const mount = outer1_5[arg0].mount;
        mount.addValue(arg2);
      } else if ("update" === arg1) {
        const update = outer1_5[arg0].update;
        update.addValue(arg2);
      } else if ("nested-update" === arg1) {
        const nestedUpdate = outer1_5[arg0].nestedUpdate;
        nestedUpdate.addValue(arg2);
      }
    }
  }, [])}>{children}</React.Profiler>;
};
export const StatCollector = tmp2;
export function clearComponentRenderStats() {
  let closure_5 = {};
}
export function getComponentRenderStats() {
  return closure_5;
}
export const serializeComponentRenderAverages = function serializeComponentRenderAverages() {
  let str = "";
  if (0 !== Object.keys(closure_5).length) {
    const tmp2 = formatString("id", 20);
    let tmp3 = formatString("Mounts", 8);
    let tmp4 = formatString("Mount Mean", 20);
    let tmp5 = formatString("Updates", 8);
    let tmp6 = formatString("Update Mean", 20);
    let tmp7 = formatString("Nested", 8);
    const _HermesInternal = HermesInternal;
    const _Object = Object;
    const text = `Component Render Stats (microseconds):
  ${"|" + tmp2 + "|" + tmp3 + "|" + tmp4 + "|" + tmp5 + "|" + tmp6 + "|" + tmp7 + "|" + formatString("Nested Mean", 20) + "|\n"}`;
    const entries = Object.entries(closure_5);
    str = `Component Render Stats (microseconds):
  ${"|" + tmp2 + "|" + tmp3 + "|" + tmp4 + "|" + tmp5 + "|" + tmp6 + "|" + tmp7 + "|" + formatString("Nested Mean", 20) + "|\n"}${arr.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      const str = tmp2.mount.count;
      const str2 = tmp2.mount.mean;
      const tmp3 = outer1_7(tmp, 20);
      const str3 = tmp2.update.count;
      const tmp4 = outer1_7(tmp2.mount.count.toString(), 8);
      const str4 = tmp2.update.mean;
      const tmp5 = outer1_7(str2.toString(), 20);
      const str5 = tmp2.nestedUpdate.count;
      const tmp6 = outer1_7(str3.toString(), 8);
      const str6 = tmp2.nestedUpdate.mean;
      const tmp7 = outer1_7(str4.toString(), 20);
      return "|" + tmp3 + "|" + tmp4 + "|" + tmp5 + "|" + tmp6 + "|" + tmp7 + "|" + outer1_7(str5.toString(), 8) + "|" + outer1_7(str6.toString(), 20) + "|\n";
    })}`;
  }
  return str;
};
export function resetComponentProfiler() {
  let closure_5 = {};
}
export function pauseComponentProfiler() {
  let c6 = false;
}
export function resumeComponentProfiler() {
  let c6 = true;
}
export function dumpStats() {
  return closure_5;
}
