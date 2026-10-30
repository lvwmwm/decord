// Module ID: 1371
// Function ID: 1372
// Name: ProcessUtilsBase
// Dependencies: [2]

// Module 1371 (ProcessUtilsBase)
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

export const ElectronProcessType = { Unknown: "unknown", Main: "main", Renderer: "renderer", GPU: "gpu", Utility: "utility", Crashpad: "crashpad", Clips: "clips", Ndi: "ndi" };
export { ProcessUtils };
