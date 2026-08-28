// Module ID: 13427
// Function ID: 13428
// Name: apexExperiment
// Dependencies: [1472, 2]

// Module 13427 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-disable-hook-frame-pacer", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/DisableHookFramePacerExperiment.tsx");

export const DisableHookFramePacerExperiment = apexExperiment;
