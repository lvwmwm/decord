// Module ID: 12822
// Function ID: 99652
// Name: getWmfGpuEncodeIntel
// Dependencies: [1428, 2]
// Exports: getWmfGpuEncodeIntel

// Module 12822 (getWmfGpuEncodeIntel)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-01-wmf-gpu-encode-intel", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/WindowsMediaFoundationGpuEncodeIntel.tsx");

export const getWmfGpuEncodeIntel = function getWmfGpuEncodeIntel(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};
