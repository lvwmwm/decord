// Module ID: 5666
// Function ID: 48665
// Name: apexExperiment
// Dependencies: []
// Exports: isSensitiveContentSelfHarmEnabled, useIsSensitiveContentSelfHarmEnabled

// Module 5666 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: "Array", -1845285747: "isArray", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/explicit_media_redaction/SensitiveContentSelfHarmExperiment.tsx");

export const SensitiveContentSelfHarmExperiment = apexExperiment;
export const useIsSensitiveContentSelfHarmEnabled = function useIsSensitiveContentSelfHarmEnabled(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export const isSensitiveContentSelfHarmEnabled = function isSensitiveContentSelfHarmEnabled(location) {
  return apexExperiment.getConfig({ location }).enabled;
};
