// Module ID: 5428
// Function ID: 5429
// Name: ElectronProcessType
// Dependencies: [2]

// Module 5428 (ElectronProcessType)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("utils/ProcessUtilsBase.tsx");
class ProcessUtils {
}
const prototype = ProcessUtils.prototype;
prototype["getSystemMetrics"] = function getSystemMetrics() {
  return Promise.resolve(null);
};
prototype["setShouldCollectHermesInstrumentedStats"] = function setShouldCollectHermesInstrumentedStats() {

};
prototype["getCurrentHermesInstrumentedStatsSummary"] = function getCurrentHermesInstrumentedStatsSummary() {

};
prototype["getCPUCoreCount"] = function getCPUCoreCount() {
  return this.cpuCoreCount;
};

export const ElectronProcessType = { Unknown: "unknown", Main: "main", Renderer: "renderer", GPU: "gpu", Utility: "utility", Crashpad: "crashpad", Clips: "clips" };
export { ProcessUtils };
