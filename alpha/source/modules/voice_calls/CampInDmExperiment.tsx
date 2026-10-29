// Module ID: 19287
// Function ID: 19288
// Name: CampInDmExperiment
// Dependencies: [1453, 2]
// Exports: shouldDisableCallIdleDisconnect

// Module 19287 (CampInDmExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-10-camp-in-dm", defaultConfig: { disableIdleDisconnect: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { disableIdleDisconnect: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/CampInDmExperiment.tsx");

export const CampInDmExperiment = apexExperiment;
export function shouldDisableCallIdleDisconnect() {
  return apexExperiment.getConfig({ location: "CallIdleManager" }).disableIdleDisconnect;
}
