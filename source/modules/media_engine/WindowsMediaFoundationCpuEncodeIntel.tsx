// Module ID: 12700
// Function ID: 97443
// Name: getWmfCpuEncodeIntel
// Dependencies: []
// Exports: getWmfCpuEncodeIntel

// Module 12700 (getWmfCpuEncodeIntel)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: null, 0: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/WindowsMediaFoundationCpuEncodeIntel.tsx");

export const getWmfCpuEncodeIntel = function getWmfCpuEncodeIntel(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};
