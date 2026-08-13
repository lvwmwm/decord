// Module ID: 16205
// Function ID: 16206
// Name: getUnitId
// Dependencies: [1368, 2]

// Module 16205 (getUnitId)
const obj = { 1: null };
obj[1] = { enableMuteWarning: true };
const tmp2 = require("getUnitId")({ kind: "user", name: "2026-02-mobile-mute-indicator", defaultConfig: { enableMuteWarning: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/calls/MobileMuteIndicatorExperiment.tsx");

export default tmp2;
