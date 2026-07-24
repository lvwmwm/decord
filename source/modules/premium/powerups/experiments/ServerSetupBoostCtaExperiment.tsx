// Module ID: 11649
// Function ID: 90489
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 11649 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-server-setup-boost-cta", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/powerups/experiments/ServerSetupBoostCtaExperiment.tsx");

export const ServerSetupBoostCtaExperiment = apexExperiment;
