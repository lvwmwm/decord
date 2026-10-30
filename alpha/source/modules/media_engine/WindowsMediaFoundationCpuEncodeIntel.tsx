// Module ID: 15903
// Function ID: 15904
// Name: WindowsMediaFoundationCpuEncodeIntel
// Dependencies: [1448, 2]
// Exports: getWmfCpuEncodeIntel

// Module 15903 (WindowsMediaFoundationCpuEncodeIntel)
import ApexExperiment from "ApexExperiment" /* 1448 */;
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
