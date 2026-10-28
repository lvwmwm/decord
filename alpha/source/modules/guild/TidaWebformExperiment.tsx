// Module ID: 7320
// Function ID: 7321
// Name: TidaWebformExperiment
// Dependencies: [5224, 2]

// Module 7320 (TidaWebformExperiment)
import createExperiment from "module_5224" /* 5224 */;
import size from "module_2" /* 2 */;

let items;
const obj = { kind: "user", id: "2025-11_tida_webform", label: "Tida Webform", defaultConfig: { tidaWebformEnabled: false }, treatments: items };
items = [{ id: 1, label: "Enabled", config: { tidaWebformEnabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/guild/TidaWebformExperiment.tsx");

export default experiment;
