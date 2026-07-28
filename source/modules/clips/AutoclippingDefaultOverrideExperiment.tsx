// Module ID: 4233
// Function ID: 36198
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 4233 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-07-autoclipping-default-override", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/clips/AutoclippingDefaultOverrideExperiment.tsx");

export const AutoclippingDefaultOverrideExperiment = apexExperiment;
