// Module ID: 7284
// Function ID: 7285
// Name: TidaWebformExperiment
// Dependencies: [5188, 2]

// Module 7284 (TidaWebformExperiment)
import createExperiment from "module_5188" /* 5188 */;
import size from "module_2" /* 2 */;

let items;
const obj = { kind: "user", id: "2025-11_tida_webform", label: "Tida Webform", defaultConfig: { tidaWebformEnabled: false }, treatments: items };
items = [{ id: 1, label: "Enabled", config: { tidaWebformEnabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/guild/TidaWebformExperiment.tsx");

export default experiment;
