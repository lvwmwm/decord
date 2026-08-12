// Module ID: 13172
// Function ID: 13173
// Name: apexExperiment
// Dependencies: [1471, 2]

// Module 13172 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-disable-hook-frame-pacer", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/DisableHookFramePacerExperiment.tsx");

export const DisableHookFramePacerExperiment = apexExperiment;
