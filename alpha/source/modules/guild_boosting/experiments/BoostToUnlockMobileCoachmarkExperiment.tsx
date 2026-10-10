// Module ID: 12238
// Function ID: 12239
// Name: BoostToUnlockMobileCoachmarkExperiment
// Dependencies: [1454, 2]

// Module 12238 (BoostToUnlockMobileCoachmarkExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1454 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-03-boost-to-unlock-mobile-coachmark", kind: "user", defaultConfig: { showCoachmark: false }, variations: { 0: { showCoachmark: false }, 1: { showCoachmark: true } } };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/guild_boosting/experiments/BoostToUnlockMobileCoachmarkExperiment.tsx");

export default tmp2;
