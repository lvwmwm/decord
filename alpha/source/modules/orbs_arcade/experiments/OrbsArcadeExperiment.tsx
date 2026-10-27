// Module ID: 16438
// Function ID: 16439
// Name: OrbsArcadeExperiment
// Dependencies: [1452, 2]

// Module 16438 (OrbsArcadeExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-orbs-arcade", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/orbs_arcade/experiments/OrbsArcadeExperiment.tsx");

export const OrbsArcadeExperiment = apexExperiment;
