// Module ID: 12693
// Function ID: 97420
// Name: getWmfCpuEncodeIntel
// Dependencies: []
// Exports: getWmfCpuEncodeIntel

// Module 12693 (getWmfCpuEncodeIntel)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: false, -1845285747: false, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/WindowsMediaFoundationCpuEncodeIntel.tsx");

export const getWmfCpuEncodeIntel = function getWmfCpuEncodeIntel(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};
