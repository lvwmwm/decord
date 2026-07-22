// Module ID: 6913
// Function ID: 55088
// Name: ProcessUtils
// Dependencies: [513, 511, 513]

// Module 6913 (ProcessUtils)
import closure_0 from "items";
import module_511 from "module_511";
import items from "items";

const result = items.fileFinishedImporting("utils/ProcessUtilsBase.tsx");

export const ElectronProcessType = { Unknown: "unknown", Main: "main", Renderer: "renderer", GPU: "gpu", Utility: "utility", Crashpad: "crashpad", Clips: "clips" };
export const ProcessUtils = () => {
  class ProcessUtils {
    constructor() {
      tmp = ProcessUtils(this, ProcessUtils);
      return;
    }
  }
  let closure_0 = ProcessUtils;
  let obj = {
    key: "getSystemMetrics",
    value() {
      return Promise.resolve(null);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "setShouldCollectHermesInstrumentedStats",
    value() {

    }
  };
  items[1] = obj;
  obj = {
    key: "getCurrentHermesInstrumentedStatsSummary",
    value() {

    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCPUCoreCount",
    value() {
      return this.cpuCoreCount;
    }
  };
  return callback(ProcessUtils, items);
}();
