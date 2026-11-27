// Module ID: 16641
// Function ID: 16642
// Name: OrbsArcadeExperiment
// Dependencies: [1451, 2]

// Module 16641 (OrbsArcadeExperiment)
import ApexExperiment from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-orbs-arcade", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/orbs_arcade/experiments/OrbsArcadeExperiment.tsx");

export const OrbsArcadeExperiment = apexExperiment;
