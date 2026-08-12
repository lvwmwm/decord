// Module ID: 11923
// Function ID: 11924
// Name: getUnitId
// Dependencies: [1368, 2]

// Module 11923 (getUnitId)
const tmp2 = require("getUnitId")({ name: "2026-03-boost-to-unlock-mobile-coachmark", kind: "user", defaultConfig: { showCoachmark: false }, variations: { 0: { showCoachmark: false }, 1: { showCoachmark: true } } });
const result = require("set").fileFinishedImporting("modules/guild_boosting/experiments/BoostToUnlockMobileCoachmarkExperiment.tsx");

export default tmp2;
