// Module ID: 16273
// Function ID: 16274
// Name: getUnitId
// Dependencies: [1368, 2]

// Module 16273 (getUnitId)
const obj = { 1: null };
obj[1] = { enableMuteWarning: true };
const tmp2 = require("getUnitId")({ kind: "user", name: "2026-02-mobile-mute-indicator", defaultConfig: { enableMuteWarning: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/calls/MobileMuteIndicatorExperiment.tsx");

export default tmp2;
