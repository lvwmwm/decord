// Module ID: 6913
// Function ID: 55077
// Name: ProcessUtils
// Dependencies: []

// Module 6913 (ProcessUtils)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const tmp2 = () => {
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
const result = arg1(dependencyMap[2]).fileFinishedImporting("utils/ProcessUtilsBase.tsx");

export const ElectronProcessType = { Unknown: "unknown", Main: "main", Renderer: "renderer", GPU: "gpu", Utility: "utility", Crashpad: "crashpad", Clips: "clips" };
export const ProcessUtils = tmp2;
