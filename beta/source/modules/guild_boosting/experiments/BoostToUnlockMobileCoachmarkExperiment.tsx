// Module ID: 12701
// Function ID: 12702
// Name: BoostToUnlockMobileCoachmarkExperiment
// Dependencies: [1439, 2]

// Module 12701 (BoostToUnlockMobileCoachmarkExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1439 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/experiments/BoostToUnlockMobileCoachmarkExperiment.tsx");

export default apex_ApexExperimentDefault({ name: "2026-03-boost-to-unlock-mobile-coachmark", kind: "user", defaultConfig: { showCoachmark: false }, variations: { 0: { showCoachmark: false }, 1: { showCoachmark: true } } });
