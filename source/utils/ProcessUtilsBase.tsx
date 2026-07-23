// Module ID: 6918
// Function ID: 55122
// Name: ProcessUtils
// Dependencies: [6, 7, 2]

// Module 6918 (ProcessUtils)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
  class ProcessUtils {
    constructor() {
      tmp = ProcessUtils(this, ProcessUtils);
      return;
    }
  }
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
})();
const result = require("set").fileFinishedImporting("utils/ProcessUtilsBase.tsx");

export const ElectronProcessType = { Unknown: "unknown", Main: "main", Renderer: "renderer", GPU: "gpu", Utility: "utility", Crashpad: "crashpad", Clips: "clips" };
export const ProcessUtils = tmp2;
