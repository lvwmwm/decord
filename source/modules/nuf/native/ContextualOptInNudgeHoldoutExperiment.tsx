// Module ID: 14313
// Function ID: 109621
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 14313 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-contextual-opt-in-nudge-holdout", kind: "user", defaultConfig: { inHoldout: false }, variations: { [0]: { inHoldout: false }, [1]: { inHoldout: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx");

export default apexExperiment;
