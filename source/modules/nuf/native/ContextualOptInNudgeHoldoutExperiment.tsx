// Module ID: 14375
// Function ID: 110076
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 14375 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-contextual-opt-in-nudge-holdout", kind: "user", defaultConfig: { inHoldout: false }, variations: { [0]: { inHoldout: false }, [1]: { inHoldout: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx");

export default apexExperiment;
