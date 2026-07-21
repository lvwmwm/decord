// Module ID: 12702
// Function ID: 97465
// Name: getWmfCpuEncodeIntel
// Dependencies: []
// Exports: getWmfCpuEncodeIntel

// Module 12702 (getWmfCpuEncodeIntel)
const _module = require(dependencyMap[0]);
const obj = { 844175713: false, 1387159956: false, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/WindowsMediaFoundationCpuEncodeIntel.tsx");

export const getWmfCpuEncodeIntel = function getWmfCpuEncodeIntel(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};
