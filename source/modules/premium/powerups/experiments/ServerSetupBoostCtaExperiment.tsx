// Module ID: 11618
// Function ID: 90233
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 11618 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-server-setup-boost-cta", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/powerups/experiments/ServerSetupBoostCtaExperiment.tsx");

export const ServerSetupBoostCtaExperiment = apexExperiment;
