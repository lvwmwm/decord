// Module ID: 5846
// Function ID: 51250
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: isSensitiveContentSelfHarmEnabled, useIsSensitiveContentSelfHarmEnabled

// Module 5846 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2025-09-sensitive-content-self-harm", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/SensitiveContentSelfHarmExperiment.tsx");

export const SensitiveContentSelfHarmExperiment = apexExperiment;
export const useIsSensitiveContentSelfHarmEnabled = function useIsSensitiveContentSelfHarmEnabled(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export const isSensitiveContentSelfHarmEnabled = function isSensitiveContentSelfHarmEnabled(location) {
  return apexExperiment.getConfig({ location }).enabled;
};
