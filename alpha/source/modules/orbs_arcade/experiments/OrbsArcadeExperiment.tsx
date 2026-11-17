// Module ID: 17690
// Function ID: 17691
// Name: OrbsArcadeExperiment
// Dependencies: [1452, 2]

// Module 17690 (OrbsArcadeExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-orbs-arcade", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/orbs_arcade/experiments/OrbsArcadeExperiment.tsx");

export const OrbsArcadeExperiment = apexExperiment;
