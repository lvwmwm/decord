// Module ID: 11489
// Function ID: 89432
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 11489 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-04-post-reaction-push-banner", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/nuf/native/PostReactionPermissionNudgeExperiment.tsx");

export default apexExperiment;
