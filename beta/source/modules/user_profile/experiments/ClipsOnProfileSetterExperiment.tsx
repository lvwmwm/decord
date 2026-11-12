// Module ID: 15217
// Function ID: 15218
// Name: ClipsOnProfileSetterExperiment
// Dependencies: [1449, 2]

// Module 15217 (ClipsOnProfileSetterExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-07-clips-on-profile-setter", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/ClipsOnProfileSetterExperiment.tsx");

export default apexExperiment;
