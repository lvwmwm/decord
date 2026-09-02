// Module ID: 15308
// Function ID: 15309
// Name: apexExperiment
// Dependencies: [1467, 2]

// Module 15308 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-contextual-opt-in-nudge-holdout", kind: "user", defaultConfig: { inHoldout: false }, variations: { 0: { inHoldout: false }, 1: { inHoldout: true } } });
const result = set.fileFinishedImporting("modules/nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx");

export default apexExperiment;
