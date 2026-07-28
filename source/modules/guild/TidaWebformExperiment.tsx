// Module ID: 5524
// Function ID: 46989
// Name: items
// Dependencies: [4077, 2]

// Module 5524 (items)
import createExperiment from "createExperiment";

let obj = { kind: "user", id: "2025-11_tida_webform", label: "Tida Webform", defaultConfig: { tidaWebformEnabled: false } };
obj = { id: 1, label: "Enabled", config: { tidaWebformEnabled: true } };
const items = [obj];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = require("set").fileFinishedImporting("modules/guild/TidaWebformExperiment.tsx");

export default experiment;
