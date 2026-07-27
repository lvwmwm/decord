// Module ID: 11059
// Function ID: 85975
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 11059 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-family-center-connection-prereq", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/parent_tools/FamilyCenterConnectionPrereqExperiment.tsx");

export const FamilyCenterConnectionPrereqExperiment = apexExperiment;
