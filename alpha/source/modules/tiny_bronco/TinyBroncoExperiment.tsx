// Module ID: 6732
// Function ID: 6733
// Name: TinyBroncoExperiment
// Dependencies: [1448, 2]
// Exports: isTinyBroncoEnabled, useIsTinyBroncoEnabled

// Module 6732 (TinyBroncoExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
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
