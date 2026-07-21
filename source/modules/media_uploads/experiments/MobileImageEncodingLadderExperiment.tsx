// Module ID: 4701
// Function ID: 40904
// Name: getMobileImageEncodingLadderConfig
// Dependencies: []
// Exports: getMobileImageEncodingLadderConfig

// Module 4701 (getMobileImageEncodingLadderConfig)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { useImageEncodingLadder: false }, variations: { [0]: { useImageEncodingLadder: false }, [1]: { useImageEncodingLadder: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_uploads/experiments/MobileImageEncodingLadderExperiment.tsx");

export const getMobileImageEncodingLadderConfig = function getMobileImageEncodingLadderConfig(location) {
  return config.getConfig({ location: location.location });
};
