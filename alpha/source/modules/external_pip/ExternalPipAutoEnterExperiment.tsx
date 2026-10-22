// Module ID: 18360
// Function ID: 18361
// Name: ExternalPipAutoEnterExperiment
// Dependencies: [1455, 2]
// Exports: isExternalPipAutoEnterEnabled

// Module 18360 (ExternalPipAutoEnterExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-10-android-seamless-pip", defaultConfig: { autoEnterEnabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { autoEnterEnabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/external_pip/ExternalPipAutoEnterExperiment.tsx");

export const isExternalPipAutoEnterEnabled = function isExternalPipAutoEnterEnabled() {
  return config.getConfig({ location: "ExternalPipView" }).autoEnterEnabled;
};
