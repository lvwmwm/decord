// Module ID: 14198
// Function ID: 14199
// Name: WindowsMediaFoundationGpuEncodeIntel
// Dependencies: [1452, 2]
// Exports: getWmfGpuEncodeIntel

// Module 14198 (WindowsMediaFoundationGpuEncodeIntel)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-01-wmf-gpu-encode-intel", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/WindowsMediaFoundationGpuEncodeIntel.tsx");

export const getWmfGpuEncodeIntel = function getWmfGpuEncodeIntel(MediaEngineStore) {
  const obj = { location: MediaEngineStore };
  return config.getConfig(obj);
};
