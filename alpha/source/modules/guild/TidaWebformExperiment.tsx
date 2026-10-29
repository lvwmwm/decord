// Module ID: 7344
// Function ID: 7345
// Name: TidaWebformExperiment
// Dependencies: [5225, 2]

// Module 7344 (TidaWebformExperiment)
import createExperiment from "module_5225" /* 5225 */;
import size from "module_2" /* 2 */;

let items;
const obj = { kind: "user", id: "2025-11_tida_webform", label: "Tida Webform", defaultConfig: { tidaWebformEnabled: false }, treatments: items };
items = [{ id: 1, label: "Enabled", config: { tidaWebformEnabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/guild/TidaWebformExperiment.tsx");

export default experiment;
