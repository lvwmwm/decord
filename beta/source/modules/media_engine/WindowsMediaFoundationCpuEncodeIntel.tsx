// Module ID: 16566
// Function ID: 16567
// Name: WindowsMediaFoundationCpuEncodeIntel
// Dependencies: [1452, 2]
// Exports: getWmfCpuEncodeIntel

// Module 16566 (WindowsMediaFoundationCpuEncodeIntel)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-06-wmf-cpu-encode-intel", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/WindowsMediaFoundationCpuEncodeIntel.tsx");

export function getWmfCpuEncodeIntel(MediaEngineStore) {
  const obj = { location: MediaEngineStore };
  return config.getConfig(obj);
}
