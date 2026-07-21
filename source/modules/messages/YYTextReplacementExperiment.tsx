// Module ID: 16380
// Function ID: 126568
// Name: shouldEnableYYTextReplacement
// Dependencies: []
// Exports: shouldEnableYYTextReplacement

// Module 16380 (shouldEnableYYTextReplacement)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/messages/YYTextReplacementExperiment.tsx");

export const shouldEnableYYTextReplacement = function shouldEnableYYTextReplacement(location) {
  return config.getConfig({ location: location.location }).enabled;
};
