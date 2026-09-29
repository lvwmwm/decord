// Module ID: 7465
// Function ID: 7466
// Name: TidaWebformExperiment
// Dependencies: [4701, 2]

// Module 7465 (TidaWebformExperiment)
import createExperiment from "module_4701" /* 4701 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", id: "2025-11_tida_webform", label: "Tida Webform", defaultConfig: { tidaWebformEnabled: false }, treatments: null };
const items = [{ id: 1, label: "Enabled", config: { tidaWebformEnabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/guild/TidaWebformExperiment.tsx");

export default experiment;
