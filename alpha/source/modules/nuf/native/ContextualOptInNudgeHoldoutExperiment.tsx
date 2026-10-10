// Module ID: 15758
// Function ID: 15759
// Name: ContextualOptInNudgeHoldoutExperiment
// Dependencies: [1453, 2]

// Module 15758 (ContextualOptInNudgeHoldoutExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-06-contextual-opt-in-nudge-holdout", kind: "user", defaultConfig: { inHoldout: false }, variations: { 0: { inHoldout: false }, 1: { inHoldout: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx");

export default apexExperiment;
