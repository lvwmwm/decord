// Module ID: 11607
// Function ID: 11608
// Name: getUnitId
// Dependencies: [1349, 2]

// Module 11607 (getUnitId)
const tmp2 = require("getUnitId")({ name: "2026-03-boost-to-unlock-mobile-coachmark", kind: "user", defaultConfig: { showCoachmark: false }, variations: { 0: { showCoachmark: false }, 1: { showCoachmark: true } } });
const result = require("set").fileFinishedImporting("modules/guild_boosting/experiments/BoostToUnlockMobileCoachmarkExperiment.tsx");

export default tmp2;
