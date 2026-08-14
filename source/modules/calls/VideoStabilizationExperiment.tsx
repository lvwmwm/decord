// Module ID: 13156
// Function ID: 13157
// Name: getUnitId
// Dependencies: [1368, 2]

// Module 13156 (getUnitId)
const obj = { 1: null, 2: { mode: "standard" } };
obj[2] = { mode: "low_latency" };
const tmp2 = require("getUnitId")({ kind: "user", name: "2026-05-ios-video-stabilization", defaultConfig: { mode: "off" }, variations: obj });
const result = require("set").fileFinishedImporting("modules/calls/VideoStabilizationExperiment.tsx");

export default tmp2;
