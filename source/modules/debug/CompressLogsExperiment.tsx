// Module ID: 10298
// Function ID: 10299
// Name: apexExperiment
// Dependencies: [1467, 2]

// Module 10298 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-08-compress-logs", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/debug/CompressLogsExperiment.tsx");

export default apexExperiment;
