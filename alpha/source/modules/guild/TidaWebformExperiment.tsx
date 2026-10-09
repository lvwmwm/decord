// Module ID: 6878
// Function ID: 6879
// Name: TidaWebformExperiment
// Dependencies: [4975, 2]

// Module 6878 (TidaWebformExperiment)
import createExperiment from "module_4975" /* 4975 */;
import size from "module_2" /* 2 */;

let items;
const obj = { kind: "user", id: "2025-11_tida_webform", label: "Tida Webform", defaultConfig: { tidaWebformEnabled: false }, treatments: items };
items = [{ id: 1, label: "Enabled", config: { tidaWebformEnabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/guild/TidaWebformExperiment.tsx");

export default experiment;
