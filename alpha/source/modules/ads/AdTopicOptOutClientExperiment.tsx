// Module ID: 17840
// Function ID: 17841
// Name: AdTopicOptOutClientExperiment
// Dependencies: [1448, 2]
// Exports: isAdTopicOptOutClientEnabled, useIsAdTopicOptOutClientEnabled

// Module 17840 (AdTopicOptOutClientExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-08-ad-topic-opt-out-client", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: false }, 3: { enabled: true }, 4: { enabled: true }, 5: { enabled: true } };
obj2[5] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/ads/AdTopicOptOutClientExperiment.tsx");

export const AdTopicOptOutClientExperiment = apexExperiment;
export function useIsAdTopicOptOutClientEnabled() {
  return apexExperiment.useConfig({ location: "useIsAdTopicOptOutClientEnabled" }).enabled;
}
export function isAdTopicOptOutClientEnabled() {
  return apexExperiment.getConfig({ location: "isAdTopicOptOutClientEnabled" }).enabled;
}
