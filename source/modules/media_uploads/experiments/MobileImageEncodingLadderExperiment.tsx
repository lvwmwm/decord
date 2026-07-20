// Module ID: 4699
// Function ID: 40863
// Name: getMobileImageEncodingLadderConfig
// Dependencies: []
// Exports: getMobileImageEncodingLadderConfig

// Module 4699 (getMobileImageEncodingLadderConfig)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: null, -1845285747: null, defaultConfig: { useImageEncodingLadder: false }, variations: { [0]: { useImageEncodingLadder: false }, [1]: { useImageEncodingLadder: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_uploads/experiments/MobileImageEncodingLadderExperiment.tsx");

export const getMobileImageEncodingLadderConfig = function getMobileImageEncodingLadderConfig(location) {
  return config.getConfig({ location: location.location });
};
