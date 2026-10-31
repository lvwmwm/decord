// Module ID: 15942
// Function ID: 15943
// Name: WindowsMediaFoundationGpuEncode
// Dependencies: [1447, 2]
// Exports: getWmfGpuEncode

// Module 15942 (WindowsMediaFoundationGpuEncode)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2025-12-wmf-gpu-encode", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/WindowsMediaFoundationGpuEncode.tsx");

export function getWmfGpuEncode(MediaEngineStore) {
  const obj = { location: MediaEngineStore };
  return config.getConfig(obj);
}
