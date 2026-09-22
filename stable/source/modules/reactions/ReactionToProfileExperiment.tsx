// Module ID: 11394
// Function ID: 11395
// Name: ReactionToProfileExperiment
// Dependencies: [1434, 2]

// Module 11394 (ReactionToProfileExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1434 */;

const obj = { kind: "user", name: "2026-07-mobile-reaction-to-profile", defaultConfig: { reactionToProfileEnabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { reactionToProfileEnabled: true };
obj.variations = obj2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/ReactionToProfileExperiment.tsx");

export default apex_ApexExperimentDefault(obj);
