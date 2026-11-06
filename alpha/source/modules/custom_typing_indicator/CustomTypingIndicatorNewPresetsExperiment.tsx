// Module ID: 17610
// Function ID: 17611
// Name: CustomTypingIndicatorNewPresetsExperiment
// Dependencies: [1449, 2]
// Exports: useCustomTypingIndicatorNewPresetsConfig

// Module 17610 (CustomTypingIndicatorNewPresetsExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-11-cti-new-presets", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorNewPresetsExperiment.tsx");

export const CustomTypingIndicatorNewPresetsExperiment = apexExperiment;
export function useCustomTypingIndicatorNewPresetsConfig(TypingIndicatorSetting) {
  const obj = { location: TypingIndicatorSetting };
  return apexExperiment.useConfig(obj);
}
