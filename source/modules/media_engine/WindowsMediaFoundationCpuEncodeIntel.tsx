// Module ID: 12885
// Function ID: 100102
// Name: getWmfCpuEncodeIntel
// Dependencies: [1428, 2]
// Exports: getWmfCpuEncodeIntel

// Module 12885 (getWmfCpuEncodeIntel)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-wmf-cpu-encode-intel", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/WindowsMediaFoundationCpuEncodeIntel.tsx");

export const getWmfCpuEncodeIntel = function getWmfCpuEncodeIntel(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};
