// Module ID: 12699
// Function ID: 97441
// Name: getWmfGpuEncodeIntel
// Dependencies: []
// Exports: getWmfGpuEncodeIntel

// Module 12699 (getWmfGpuEncodeIntel)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/WindowsMediaFoundationGpuEncodeIntel.tsx");

export const getWmfGpuEncodeIntel = function getWmfGpuEncodeIntel(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};
