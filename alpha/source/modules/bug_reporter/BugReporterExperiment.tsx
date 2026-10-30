// Module ID: 11109
// Function ID: 11110
// Name: BugReporterExperiment
// Dependencies: [1448, 2]

// Module 11109 (BugReporterExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-01-bug-reporter", kind: "user", defaultConfig: { hasBugReporterAccess: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { hasBugReporterAccess: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/bug_reporter/BugReporterExperiment.tsx");

export default apexExperiment;
