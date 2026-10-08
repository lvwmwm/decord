// Module ID: 15583
// Function ID: 15584
// Name: ContextualOptInNudgeHoldoutExperiment
// Dependencies: [1452, 2]

// Module 15583 (ContextualOptInNudgeHoldoutExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-06-contextual-opt-in-nudge-holdout", kind: "user", defaultConfig: { inHoldout: false }, variations: { 0: { inHoldout: false }, 1: { inHoldout: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx");

export default apexExperiment;
