// Module ID: 11671
// Function ID: 11672
// Name: getUnitId
// Dependencies: [1368, 2]

// Module 11671 (getUnitId)
const tmp2 = require("getUnitId")({ name: "2026-03-boost-to-unlock-mobile-coachmark", kind: "user", defaultConfig: { showCoachmark: false }, variations: { 0: { showCoachmark: false }, 1: { showCoachmark: true } } });
const result = require("set").fileFinishedImporting("modules/guild_boosting/experiments/BoostToUnlockMobileCoachmarkExperiment.tsx");

export default tmp2;
