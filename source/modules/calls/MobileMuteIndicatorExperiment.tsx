// Module ID: 16480
// Function ID: 16481
// Name: getUnitId
// Dependencies: [1368, 2]

// Module 16480 (getUnitId)
import getUnitIdDefault from "getUnitId" /* 1368 */;

const obj = { 1: null };
obj[1] = { enableMuteWarning: true };
const tmp2 = getUnitIdDefault({ kind: "user", name: "2026-02-mobile-mute-indicator", defaultConfig: { enableMuteWarning: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/calls/MobileMuteIndicatorExperiment.tsx");

export default tmp2;
