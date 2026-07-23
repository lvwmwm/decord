// Module ID: 12821
// Function ID: 99650
// Name: getWmfGpuEncode
// Dependencies: [1428, 2]
// Exports: getWmfGpuEncode

// Module 12821 (getWmfGpuEncode)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2025-12-wmf-gpu-encode", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/WindowsMediaFoundationGpuEncode.tsx");

export const getWmfGpuEncode = function getWmfGpuEncode(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};
