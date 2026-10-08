// Module ID: 14197
// Function ID: 14198
// Name: WindowsMediaFoundationGpuEncode
// Dependencies: [1452, 2]
// Exports: getWmfGpuEncode

// Module 14197 (WindowsMediaFoundationGpuEncode)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2025-12-wmf-gpu-encode", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/WindowsMediaFoundationGpuEncode.tsx");

export const getWmfGpuEncode = function getWmfGpuEncode(MediaEngineStore) {
  const obj = { location: MediaEngineStore };
  return config.getConfig(obj);
};
