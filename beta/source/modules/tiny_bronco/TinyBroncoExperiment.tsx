// Module ID: 6738
// Function ID: 6739
// Name: TinyBroncoExperiment
// Dependencies: [1447, 2]
// Exports: isTinyBroncoEnabled, useIsTinyBroncoEnabled

// Module 6738 (TinyBroncoExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-08-tiny-bronco", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/tiny_bronco/TinyBroncoExperiment.tsx");

export function useIsTinyBroncoEnabled(location) {
  const obj = { location };
  return closure_0.useConfig(obj).enabled;
}
export function isTinyBroncoEnabled(location) {
  const obj = { location };
  return closure_0.getConfig(obj).enabled;
}
