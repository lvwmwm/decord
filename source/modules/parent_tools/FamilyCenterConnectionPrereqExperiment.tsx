// Module ID: 11496
// Function ID: 11497
// Name: apexExperiment
// Dependencies: [1472, 2]

// Module 11496 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-family-center-connection-prereq", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/parent_tools/FamilyCenterConnectionPrereqExperiment.tsx");

export const FamilyCenterConnectionPrereqExperiment = apexExperiment;
