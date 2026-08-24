// Module ID: 14091
// Function ID: 14092
// Name: apexExperiment
// Dependencies: [1472, 2]
// Exports: getCustomTypingIndicatorConfig, useCustomTypingIndicatorConfig

// Module 14091 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-07-custom-typing-indicator", defaultConfig: { enabled: false, entryPoint: null }, variations: { 0: { enabled: false, entryPoint: null }, 1: { enabled: true, entryPoint: "settings" }, 2: { enabled: true, entryPoint: "profile" } } });
const result = set.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorExperiment.tsx");

export const CustomTypingIndicatorExperiment = apexExperiment;
export const useCustomTypingIndicatorConfig = function useCustomTypingIndicatorConfig(CustomTypingIndicatorEditScreen) {
  return apexExperiment.useConfig({ location: CustomTypingIndicatorEditScreen });
};
export const getCustomTypingIndicatorConfig = function getCustomTypingIndicatorConfig(location) {
  return apexExperiment.getConfig({ location });
};
