// Module ID: 13068
// Function ID: 13069
// Name: getWmfGpuEncodeIntel
// Dependencies: [1452, 2]
// Exports: getWmfGpuEncodeIntel

// Module 13068 (getWmfGpuEncodeIntel)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-01-wmf-gpu-encode-intel", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/WindowsMediaFoundationGpuEncodeIntel.tsx");

export const getWmfGpuEncodeIntel = function getWmfGpuEncodeIntel(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};
