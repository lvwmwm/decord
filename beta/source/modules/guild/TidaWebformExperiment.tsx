// Module ID: 7435
// Function ID: 7436
// Name: TidaWebformExperiment
// Dependencies: [4672, 2]

// Module 7435 (TidaWebformExperiment)
import createExperiment from "module_4672" /* 4672 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", id: "2025-11_tida_webform", label: "Tida Webform", defaultConfig: { tidaWebformEnabled: false }, treatments: null };
const items = [{ id: 1, label: "Enabled", config: { tidaWebformEnabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/guild/TidaWebformExperiment.tsx");

export default experiment;
