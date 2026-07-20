// Module ID: 1826
// Function ID: 20010
// Name: getForceSdrEmojisStickersConfig
// Dependencies: []
// Exports: getForceSdrEmojisStickersConfig

// Module 1826 (getForceSdrEmojisStickersConfig)
const _module = require(dependencyMap[0]);
const obj = { "Null": null, "Null": null, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/image_upload/ForceSdrEmojisStickersExperiment.tsx");

export const getForceSdrEmojisStickersConfig = function getForceSdrEmojisStickersConfig(location) {
  return config.getConfig({ location: location.location });
};
