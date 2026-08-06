// Module ID: 11253
// Function ID: 11254
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 11253 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-family-center-connection-prereq", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/parent_tools/FamilyCenterConnectionPrereqExperiment.tsx");

export const FamilyCenterConnectionPrereqExperiment = apexExperiment;
