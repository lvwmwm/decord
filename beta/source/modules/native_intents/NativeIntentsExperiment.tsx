// Module ID: 19415
// Function ID: 19416
// Name: NativeIntentsExperiment
// Dependencies: [5188, 2]

// Module 19415 (NativeIntentsExperiment)
import createExperiment from "module_5188" /* 5188 */;
import size from "module_2" /* 2 */;

let items;
const obj = { kind: "user", id: "2025-06_native_intents", label: "Native Intents", defaultConfig: { searchEnabled: false, clearEnabled: false, activityEnabled: false }, treatments: items };
items = [{ id: 1, label: "All enabled", config: { searchEnabled: true, clearEnabled: true, activityEnabled: true } }, { id: 2, label: "Clear Only", config: { searchEnabled: false, clearEnabled: true, activityEnabled: false } }, { id: 3, label: "Activities Only", config: { searchEnabled: false, clearEnabled: false, activityEnabled: true } }, { id: 4, label: "Activities and Clear", config: { searchEnabled: false, clearEnabled: true, activityEnabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/native_intents/NativeIntentsExperiment.tsx");

export default experiment;
