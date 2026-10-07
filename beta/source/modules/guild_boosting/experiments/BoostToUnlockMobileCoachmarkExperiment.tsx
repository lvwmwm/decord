// Module ID: 12161
// Function ID: 12162
// Name: BoostToUnlockMobileCoachmarkExperiment
// Dependencies: [1441, 2]

// Module 12161 (BoostToUnlockMobileCoachmarkExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-03-boost-to-unlock-mobile-coachmark", kind: "user", defaultConfig: { showCoachmark: false }, variations: { 0: { showCoachmark: false }, 1: { showCoachmark: true } } };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/guild_boosting/experiments/BoostToUnlockMobileCoachmarkExperiment.tsx");

export default tmp2;
