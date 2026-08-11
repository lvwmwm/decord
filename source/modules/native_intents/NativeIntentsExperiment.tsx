// Module ID: 16958
// Function ID: 16959
// Name: experiment
// Dependencies: [4215, 2]

// Module 16958 (experiment)
import createExperiment from "createExperiment";

const items = [{ id: 1, label: "All enabled", config: { searchEnabled: true, clearEnabled: true, activityEnabled: true } }, { id: 2, label: "Clear Only", config: { searchEnabled: false, clearEnabled: true, activityEnabled: false } }, { id: 3, label: "Activities Only", config: { searchEnabled: false, clearEnabled: false, activityEnabled: true } }, { id: 4, label: "Activities and Clear", config: { searchEnabled: false, clearEnabled: true, activityEnabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "user", id: "2025-06_native_intents", label: "Native Intents", defaultConfig: { searchEnabled: false, clearEnabled: false, activityEnabled: false }, treatments: items });
const result = require("set").fileFinishedImporting("modules/native_intents/NativeIntentsExperiment.tsx");

export default experiment;
