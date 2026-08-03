// Module ID: 11638
// Function ID: 11639
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 11638 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-post-reaction-push-banner", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/nuf/native/PostReactionPermissionNudgeExperiment.tsx");

export default apexExperiment;
