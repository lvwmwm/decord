// Module ID: 11799
// Function ID: 11800
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 11799 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-server-setup-boost-cta", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/premium/powerups/experiments/ServerSetupBoostCtaExperiment.tsx");

export const ServerSetupBoostCtaExperiment = apexExperiment;
