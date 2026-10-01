// Module ID: 1359
// Function ID: 1360
// Name: ProcessUtilsBase
// Dependencies: [2]

// Module 1359 (ProcessUtilsBase)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/ProcessUtilsBase.tsx");
class ProcessUtils {
  getSystemMetrics() {
    return Promise.resolve(null);
  }
  setShouldCollectHermesInstrumentedStats() {

  }
  getCurrentHermesInstrumentedStatsSummary() {

  }
  getCPUCoreCount() {
    return this.cpuCoreCount;
  }
}
const prototype = ProcessUtils.prototype;

export const ElectronProcessType = { Unknown: "unknown", Main: "main", Renderer: "renderer", GPU: "gpu", Utility: "utility", Crashpad: "crashpad", Clips: "clips" };
export { ProcessUtils };
