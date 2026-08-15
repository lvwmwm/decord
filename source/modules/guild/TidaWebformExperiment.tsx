// Module ID: 7166
// Function ID: 7167
// Name: experiment
// Dependencies: [4286, 2]

// Module 7166 (experiment)
import createExperiment from "createExperiment";

const items = [{ id: 1, label: "Enabled", config: { tidaWebformEnabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "user", id: "2025-11_tida_webform", label: "Tida Webform", defaultConfig: { tidaWebformEnabled: false }, treatments: items });
const result = require("set").fileFinishedImporting("modules/guild/TidaWebformExperiment.tsx");

export default experiment;
