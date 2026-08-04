// Module ID: 15999
// Function ID: 16000
// Name: getUnitId
// Dependencies: [1349, 2]

// Module 15999 (getUnitId)
const obj = { 1: null };
obj[1] = { enableMuteWarning: true };
const tmp2 = require("getUnitId")({ kind: "user", name: "2026-02-mobile-mute-indicator", defaultConfig: { enableMuteWarning: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/calls/MobileMuteIndicatorExperiment.tsx");

export default tmp2;
