// Module ID: 12698
// Function ID: 97439
// Name: getWmfGpuEncode
// Dependencies: []
// Exports: getWmfGpuEncode

// Module 12698 (getWmfGpuEncode)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/WindowsMediaFoundationGpuEncode.tsx");

export const getWmfGpuEncode = function getWmfGpuEncode(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};
