// Module ID: 12689
// Function ID: 97413
// Name: getAV1EncodeExperimentLinuxConfig
// Dependencies: []
// Exports: getAV1EncodeExperimentLinuxConfig

// Module 12689 (getAV1EncodeExperimentLinuxConfig)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: null, -1845285747: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/AV1EncodeExperimentLinux.tsx");

export const getAV1EncodeExperimentLinuxConfig = function getAV1EncodeExperimentLinuxConfig(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};
