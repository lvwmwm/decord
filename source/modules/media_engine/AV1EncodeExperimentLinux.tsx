// Module ID: 12705
// Function ID: 97491
// Name: getAV1EncodeExperimentLinuxConfig
// Dependencies: []
// Exports: getAV1EncodeExperimentLinuxConfig

// Module 12705 (getAV1EncodeExperimentLinuxConfig)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/AV1EncodeExperimentLinux.tsx");

export const getAV1EncodeExperimentLinuxConfig = function getAV1EncodeExperimentLinuxConfig(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};
