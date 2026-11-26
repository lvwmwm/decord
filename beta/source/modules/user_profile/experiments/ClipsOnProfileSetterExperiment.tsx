// Module ID: 14568
// Function ID: 14569
// Name: ClipsOnProfileSetterExperiment
// Dependencies: [1450, 2]

// Module 14568 (ClipsOnProfileSetterExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-07-clips-on-profile-setter", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/ClipsOnProfileSetterExperiment.tsx");

export default apexExperiment;
