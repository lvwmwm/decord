// Module ID: 12692
// Function ID: 97418
// Name: getWmfGpuEncodeIntel
// Dependencies: []
// Exports: getWmfGpuEncodeIntel

// Module 12692 (getWmfGpuEncodeIntel)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/WindowsMediaFoundationGpuEncodeIntel.tsx");

export const getWmfGpuEncodeIntel = function getWmfGpuEncodeIntel(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};
