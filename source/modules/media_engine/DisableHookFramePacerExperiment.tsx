// Module ID: 12768
// Function ID: 99474
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 12768 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-04-disable-hook-frame-pacer", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/DisableHookFramePacerExperiment.tsx");

export const DisableHookFramePacerExperiment = apexExperiment;
