// Module ID: 10827
// Function ID: 10828
// Name: ReactionToProfileExperiment
// Dependencies: [1436, 2]

// Module 10827 (ReactionToProfileExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1436 */;

const obj = { kind: "user", name: "2026-07-mobile-reaction-to-profile", defaultConfig: { reactionToProfileEnabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { reactionToProfileEnabled: true };
obj.variations = obj2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/ReactionToProfileExperiment.tsx");

export default apex_ApexExperimentDefault(obj);
