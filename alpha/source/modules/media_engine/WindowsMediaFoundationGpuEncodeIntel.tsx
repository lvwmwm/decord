// Module ID: 15902
// Function ID: 15903
// Name: WindowsMediaFoundationGpuEncodeIntel
// Dependencies: [1448, 2]
// Exports: getWmfGpuEncodeIntel

// Module 15902 (WindowsMediaFoundationGpuEncodeIntel)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-01-wmf-gpu-encode-intel", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/WindowsMediaFoundationGpuEncodeIntel.tsx");

export function getWmfGpuEncodeIntel(MediaEngineStore) {
  const obj = { location: MediaEngineStore };
  return config.getConfig(obj);
}
