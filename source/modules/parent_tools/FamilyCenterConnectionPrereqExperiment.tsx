// Module ID: 11099
// Function ID: 86337
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 11099 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-family-center-connection-prereq", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/parent_tools/FamilyCenterConnectionPrereqExperiment.tsx");

export const FamilyCenterConnectionPrereqExperiment = apexExperiment;
