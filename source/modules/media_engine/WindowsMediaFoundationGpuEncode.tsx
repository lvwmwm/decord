// Module ID: 13170
// Function ID: 13171
// Name: getWmfGpuEncode
// Dependencies: [1471, 2]
// Exports: getWmfGpuEncode

// Module 13170 (getWmfGpuEncode)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2025-12-wmf-gpu-encode", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/WindowsMediaFoundationGpuEncode.tsx");

export const getWmfGpuEncode = function getWmfGpuEncode(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};
