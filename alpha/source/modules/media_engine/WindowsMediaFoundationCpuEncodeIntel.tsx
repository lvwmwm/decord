// Module ID: 14295
// Function ID: 14296
// Name: WindowsMediaFoundationCpuEncodeIntel
// Dependencies: [1453, 2]
// Exports: getWmfCpuEncodeIntel

// Module 14295 (WindowsMediaFoundationCpuEncodeIntel)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-06-wmf-cpu-encode-intel", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/WindowsMediaFoundationCpuEncodeIntel.tsx");

export const getWmfCpuEncodeIntel = function getWmfCpuEncodeIntel(MediaEngineStore) {
  const obj = { location: MediaEngineStore };
  return config.getConfig(obj);
};
