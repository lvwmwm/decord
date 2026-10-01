// Module ID: 6795
// Function ID: 6796
// Name: TidaWebformExperiment
// Dependencies: [4759, 2]

// Module 6795 (TidaWebformExperiment)
import createExperiment from "module_4759" /* 4759 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", id: "2025-11_tida_webform", label: "Tida Webform", defaultConfig: { tidaWebformEnabled: false }, treatments: null };
const items = [{ id: 1, label: "Enabled", config: { tidaWebformEnabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/guild/TidaWebformExperiment.tsx");

export default experiment;
