// Module ID: 12983
// Function ID: 12984
// Name: getUnitId
// Dependencies: [1349, 2]

// Module 12983 (getUnitId)
const obj = { 1: null, 2: { mode: "standard" } };
obj[2] = { mode: "low_latency" };
const tmp2 = require("getUnitId")({ kind: "user", name: "2026-05-ios-video-stabilization", defaultConfig: { mode: "off" }, variations: obj });
const result = require("set").fileFinishedImporting("modules/calls/VideoStabilizationExperiment.tsx");

export default tmp2;
