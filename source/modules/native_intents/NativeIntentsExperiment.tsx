// Module ID: 16553
// Function ID: 129133
// Name: items
// Dependencies: [4042, 2]

// Module 16553 (items)
import createExperiment from "createExperiment";

let obj = { kind: "user", id: "2025-06_native_intents", label: "Native Intents", defaultConfig: { searchEnabled: false, clearEnabled: false, activityEnabled: false } };
obj = { id: 1, label: "All enabled", config: { searchEnabled: true, clearEnabled: true, activityEnabled: true } };
const items = [obj, , , ];
const obj1 = { id: 2, label: "Clear Only", config: { searchEnabled: false, clearEnabled: true, activityEnabled: false } };
items[1] = obj1;
const obj2 = { id: 3, label: "Activities Only", config: { searchEnabled: false, clearEnabled: false, activityEnabled: true } };
items[2] = obj2;
const obj3 = { id: 4, label: "Activities and Clear", config: { searchEnabled: false, clearEnabled: true, activityEnabled: true } };
items[3] = obj3;
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = require("set").fileFinishedImporting("modules/native_intents/NativeIntentsExperiment.tsx");

export default experiment;
