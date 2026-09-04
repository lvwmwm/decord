// Module ID: 5381
// Function ID: 5382
// Name: getUnitId
// Dependencies: [1469, 2]

// Module 5381 (getUnitId)
import getUnitIdDefault from "getUnitId" /* 1469 */;

const obj = { 1: null, 2: { enabled: true }, 3: { enabled: true, disableUI: true }, 4: { enabled: true, disableUI: true, swallowVolumeOnlySpeakingEvents: true } };
obj[4] = { enabled: true, disableUI: true, dontEmitVolumeOnlySpeakingEvents: true };
const tmp2 = getUnitIdDefault({ kind: "user", name: "2025-12-proportional-vad-indicator", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/calls/ProportionalVadIndicatorExperiment.tsx");

export default tmp2;
