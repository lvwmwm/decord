// Module ID: 12652
// Function ID: 12653
// Name: BugReporterExperiment
// Dependencies: [1452, 2]

// Module 12652 (BugReporterExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-01-bug-reporter", kind: "user", defaultConfig: { hasBugReporterAccess: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { hasBugReporterAccess: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/bug_reporter/BugReporterExperiment.tsx");

export default apexExperiment;
