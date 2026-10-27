// Module ID: 7286
// Function ID: 7287
// Name: TidaWebformExperiment
// Dependencies: [5189, 2]

// Module 7286 (TidaWebformExperiment)
import createExperiment from "module_5189" /* 5189 */;
import size from "module_2" /* 2 */;

let items;
const obj = { kind: "user", id: "2025-11_tida_webform", label: "Tida Webform", defaultConfig: { tidaWebformEnabled: false }, treatments: items };
items = [{ id: 1, label: "Enabled", config: { tidaWebformEnabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/guild/TidaWebformExperiment.tsx");

export default experiment;
