// Module ID: 12635
// Function ID: 12636
// Name: BoostToUnlockMobileCoachmarkExperiment
// Dependencies: [1434, 2]

// Module 12635 (BoostToUnlockMobileCoachmarkExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1434 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/experiments/BoostToUnlockMobileCoachmarkExperiment.tsx");

export default apex_ApexExperimentDefault({ name: "2026-03-boost-to-unlock-mobile-coachmark", kind: "user", defaultConfig: { showCoachmark: false }, variations: { 0: { showCoachmark: false }, 1: { showCoachmark: true } } });
