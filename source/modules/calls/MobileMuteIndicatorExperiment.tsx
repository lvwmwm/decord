// Module ID: 15736
// Function ID: 121433
// Dependencies: [1325, 2]

// Module 15736
const obj = { kind: "user", name: "2026-02-mobile-mute-indicator", defaultConfig: { enableMuteWarning: false }, variations: { [1]: { enableMuteWarning: true } } };
const tmp2 = require("getUnitId")(obj);
const result = require("set").fileFinishedImporting("modules/calls/MobileMuteIndicatorExperiment.tsx");

export default tmp2;
