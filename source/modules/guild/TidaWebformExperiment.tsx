// Module ID: 7129
// Function ID: 7130
// Name: experiment
// Dependencies: [4392, 2]

// Module 7129 (experiment)
import set from "set" /* 2 */;
import createExperiment from "createExperiment" /* 4392 */;

const items = [{ id: 1, label: "Enabled", config: { tidaWebformEnabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "user", id: "2025-11_tida_webform", label: "Tida Webform", defaultConfig: { tidaWebformEnabled: false }, treatments: items });
const result = set.fileFinishedImporting("modules/guild/TidaWebformExperiment.tsx");

export default experiment;
