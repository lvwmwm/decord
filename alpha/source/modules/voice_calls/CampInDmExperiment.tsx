// Module ID: 19054
// Function ID: 19055
// Name: CampInDmExperiment
// Dependencies: [1452, 2]
// Exports: shouldDisableCallIdleDisconnect

// Module 19054 (CampInDmExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-10-camp-in-dm", defaultConfig: { disableIdleDisconnect: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { disableIdleDisconnect: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/CampInDmExperiment.tsx");

export const CampInDmExperiment = apexExperiment;
export const shouldDisableCallIdleDisconnect = function shouldDisableCallIdleDisconnect() {
  return apexExperiment.getConfig({ location: "CallIdleManager" }).disableIdleDisconnect;
};
