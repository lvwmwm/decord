// Module ID: 11449
// Function ID: 11450
// Name: CustomTypingIndicatorExperiment
// Dependencies: [1435, 2]
// Exports: getCustomTypingIndicatorConfig, useCustomTypingIndicatorConfig

// Module 11449 (CustomTypingIndicatorExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-07-custom-typing-indicator", defaultConfig: { canSet: false, canView: false, entryPoint: null }, variations: { 0: { canSet: false, canView: false, entryPoint: null }, 1: { canSet: true, canView: true, entryPoint: "settings" }, 2: { canSet: true, canView: true, entryPoint: "profile" }, 3: { canSet: false, canView: true, entryPoint: null } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorExperiment.tsx");

export const CustomTypingIndicatorExperiment = apexExperiment;
export const useCustomTypingIndicatorConfig = function useCustomTypingIndicatorConfig(TypingIndicatorInner) {
  const obj = { location: TypingIndicatorInner };
  return apexExperiment.useConfig(obj);
};
export const getCustomTypingIndicatorConfig = function getCustomTypingIndicatorConfig(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj);
};
