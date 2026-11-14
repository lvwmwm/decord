// Module ID: 8636
// Function ID: 8637
// Name: SensitiveContentSelfHarmExperiment
// Dependencies: [1452, 2]
// Exports: isSensitiveContentSelfHarmEnabled, useIsSensitiveContentSelfHarmEnabled

// Module 8636 (SensitiveContentSelfHarmExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2025-09-sensitive-content-self-harm", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/explicit_media_redaction/SensitiveContentSelfHarmExperiment.tsx");

export const SensitiveContentSelfHarmExperiment = apexExperiment;
export function useIsSensitiveContentSelfHarmEnabled(location) {
  const obj = { location };
  return apexExperiment.useConfig(obj).enabled;
}
export function isSensitiveContentSelfHarmEnabled(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj).enabled;
}
