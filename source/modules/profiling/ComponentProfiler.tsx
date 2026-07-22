// Module ID: 10317
// Function ID: 79657
// Name: formatString
// Dependencies: []
// Exports: clearComponentRenderStats, default, dumpStats, getComponentRenderStats, pauseComponentProfiler, resetComponentProfiler, resumeComponentProfiler, serializeComponentRenderAverages

// Module 10317 (formatString)
function formatString(length2) {
  let length = arg1;
  if (length2.length <= arg1) {
    length = length2.length;
  }
  const substr = length2.substring(0, length);
  return substr.padEnd(arg1, " ");
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importAll(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const tmp2 = () => {
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
  let closure_0 = StatCollector;
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
}();
let closure_5 = {};
let closure_6 = true;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/profiling/ComponentProfiler.tsx");

export default function ComponentProfiler(arg0) {
  let children;
  let id;
  ({ id, children } = arg0);
  return <React.Profiler id={id} onRender={React.useCallback((arg0, arg1, arg2) => {
    if (closure_6) {
      if (!(arg0 in closure_5)) {
        const obj = {};
        const prototype = ctor.prototype;
        const tmp6 = new ctor();
        obj.mount = tmp6;
        const prototype2 = ctor.prototype;
        const tmp10 = new ctor();
        obj.update = tmp10;
        const prototype3 = ctor.prototype;
        const tmp14 = new ctor();
        obj.nestedUpdate = tmp14;
        closure_5[arg0] = obj;
      }
      if ("mount" === arg1) {
        const mount = closure_5[arg0].mount;
        mount.addValue(arg2);
      } else if ("update" === arg1) {
        const update = closure_5[arg0].update;
        update.addValue(arg2);
      } else if ("nested-update" === arg1) {
        const nestedUpdate = closure_5[arg0].nestedUpdate;
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
    const tmp3 = formatString("Mounts", 8);
    const tmp4 = formatString("Mount Mean", 20);
    const tmp5 = formatString("Updates", 8);
    const tmp6 = formatString("Update Mean", 20);
    const tmp7 = formatString("Nested", 8);
    const _HermesInternal = HermesInternal;
    const _Object = Object;
    const text = `Component Render Stats (microseconds):
  ${"|" + tmp2 + "|" + tmp3 + "|" + tmp4 + "|" + tmp5 + "|" + tmp6 + "|" + tmp7 + "|" + closure_7("Nested Mean", 20) + "|\n"}`;
    const entries = Object.entries(closure_5);
    str = `Component Render Stats (microseconds):
  ${"|" + tmp2 + "|" + tmp3 + "|" + tmp4 + "|" + tmp5 + "|" + tmp6 + "|" + tmp7 + "|" + closure_7("Nested Mean", 20) + "|\n"}${arr.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      const str = tmp2.mount.count;
      const str2 = tmp2.mount.mean;
      const tmp3 = callback(tmp, 20);
      const str3 = tmp2.update.count;
      const tmp4 = callback(tmp2.mount.count.toString(), 8);
      const str4 = tmp2.update.mean;
      const tmp5 = callback(str2.toString(), 20);
      const str5 = tmp2.nestedUpdate.count;
      const tmp6 = callback(str3.toString(), 8);
      const str6 = tmp2.nestedUpdate.mean;
      const tmp7 = callback(str4.toString(), 20);
      return "|" + tmp3 + "|" + tmp4 + "|" + tmp5 + "|" + tmp6 + "|" + tmp7 + "|" + callback(str5.toString(), 8) + "|" + callback(str6.toString(), 20) + "|\n";
    })}`;
  }
  return str;
};
export function resetComponentProfiler() {
  let closure_5 = {};
}
export function pauseComponentProfiler() {
  let closure_6 = false;
}
export function resumeComponentProfiler() {
  let closure_6 = true;
}
export function dumpStats() {
  return closure_5;
}
