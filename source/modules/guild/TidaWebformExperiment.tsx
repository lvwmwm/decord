// Module ID: 5945
// Function ID: 5946
// Name: experiment
// Dependencies: [4357, 2]

// Module 5945 (experiment)
import set from "set" /* 2 */;
import createExperiment from "createExperiment" /* 4357 */;

const items = [{ id: 1, label: "Enabled", config: { tidaWebformEnabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "user", id: "2025-11_tida_webform", label: "Tida Webform", defaultConfig: { tidaWebformEnabled: false }, treatments: items });
const result = set.fileFinishedImporting("modules/guild/TidaWebformExperiment.tsx");

export default experiment;
