// Module ID: 14202
// Function ID: 14203
// Name: PostReactionPermissionNudgeExperiment
// Dependencies: [1449, 2]

// Module 14202 (PostReactionPermissionNudgeExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-04-post-reaction-push-banner", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/nuf/native/PostReactionPermissionNudgeExperiment.tsx");

export default apexExperiment;
