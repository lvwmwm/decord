// Module ID: 10827
// Function ID: 10828
// Name: ReactionToProfileExperiment
// Dependencies: [1436, 2]

// Module 10827 (ReactionToProfileExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1436 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-07-mobile-reaction-to-profile", defaultConfig: { reactionToProfileEnabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { reactionToProfileEnabled: true };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/reactions/ReactionToProfileExperiment.tsx");

export default tmp2;
