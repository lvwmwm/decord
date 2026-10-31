// Module ID: 4966
// Function ID: 4967
// Name: DefaultEmojisExperiment
// Dependencies: [1447, 2]
// Exports: useDefaultEmojisEnabled

// Module 4966 (DefaultEmojisExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-09-default-emojis", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/emojis/default_emojis/DefaultEmojisExperiment.tsx");

export const DefaultEmojisExperiment = apexExperiment;
export function useDefaultEmojisEnabled(location) {
  const obj = { location };
  return apexExperiment.useConfig(obj).enabled;
}
