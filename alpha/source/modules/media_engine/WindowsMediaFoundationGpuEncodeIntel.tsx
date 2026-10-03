// Module ID: 13875
// Function ID: 13876
// Name: WindowsMediaFoundationGpuEncodeIntel
// Dependencies: [1440, 2]
// Exports: getWmfGpuEncodeIntel

// Module 13875 (WindowsMediaFoundationGpuEncodeIntel)
import ApexExperiment from "ApexExperiment" /* 1440 */;
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
