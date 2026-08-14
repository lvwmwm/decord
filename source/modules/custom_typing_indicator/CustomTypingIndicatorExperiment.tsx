// Module ID: 13991
// Function ID: 13992
// Name: apexExperiment
// Dependencies: [1471, 2]
// Exports: getCustomTypingIndicatorConfig, useCustomTypingIndicatorConfig

// Module 13991 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-07-custom-typing-indicator", defaultConfig: { enabled: false, entryPoint: null }, variations: { 0: { enabled: false, entryPoint: null }, 1: { enabled: true, entryPoint: "settings" }, 2: { enabled: true, entryPoint: "profile" } } });
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorExperiment.tsx");

export const CustomTypingIndicatorExperiment = apexExperiment;
export const useCustomTypingIndicatorConfig = function useCustomTypingIndicatorConfig(TypingIndicatorSetting) {
  return apexExperiment.useConfig({ location: TypingIndicatorSetting });
};
export const getCustomTypingIndicatorConfig = function getCustomTypingIndicatorConfig(location) {
  return apexExperiment.getConfig({ location });
};
