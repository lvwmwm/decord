// Module ID: 16544
// Function ID: 16545
// Name: ContextualOptInNudgeHoldoutExperiment
// Dependencies: [1455, 2]

// Module 16544 (ContextualOptInNudgeHoldoutExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-06-contextual-opt-in-nudge-holdout", kind: "user", defaultConfig: { inHoldout: false }, variations: { 0: { inHoldout: false }, 1: { inHoldout: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx");

export default apexExperiment;
