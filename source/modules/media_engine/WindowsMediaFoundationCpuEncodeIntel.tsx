// Module ID: 13551
// Function ID: 13552
// Name: getWmfCpuEncodeIntel
// Dependencies: [1468, 2]
// Exports: getWmfCpuEncodeIntel

// Module 13551 (getWmfCpuEncodeIntel)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-06-wmf-cpu-encode-intel", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/WindowsMediaFoundationCpuEncodeIntel.tsx");

export const getWmfCpuEncodeIntel = function getWmfCpuEncodeIntel(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};
