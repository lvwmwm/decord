// Module ID: 13934
// Function ID: 13935
// Name: PostReactionPermissionNudgeExperiment
// Dependencies: [1448, 2]

// Module 13934 (PostReactionPermissionNudgeExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-04-post-reaction-push-banner", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/nuf/native/PostReactionPermissionNudgeExperiment.tsx");

export default apexExperiment;
