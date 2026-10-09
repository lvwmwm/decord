// Module ID: 9556
// Function ID: 9557
// Name: ReactionToProfileExperiment
// Dependencies: [1454, 2]

// Module 9556 (ReactionToProfileExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1454 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-07-mobile-reaction-to-profile", defaultConfig: { reactionToProfileEnabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { reactionToProfileEnabled: true };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/reactions/ReactionToProfileExperiment.tsx");

export default tmp2;
