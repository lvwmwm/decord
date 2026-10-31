// Module ID: 19102
// Function ID: 19103
// Name: ExternalPipAutoEnterExperiment
// Dependencies: [1447, 2]
// Exports: isExternalPipAutoEnterEnabled

// Module 19102 (ExternalPipAutoEnterExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-10-android-seamless-pip", defaultConfig: { autoEnterEnabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { autoEnterEnabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/external_pip/ExternalPipAutoEnterExperiment.tsx");

export function isExternalPipAutoEnterEnabled() {
  return config.getConfig({ location: "ExternalPipView" }).autoEnterEnabled;
}
