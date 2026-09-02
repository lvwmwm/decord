// Module ID: 12213
// Function ID: 12214
// Name: apexExperiment
// Dependencies: [1467, 2]

// Module 12213 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-post-reaction-push-banner", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/nuf/native/PostReactionPermissionNudgeExperiment.tsx");

export default apexExperiment;
