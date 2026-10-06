// Module ID: 12554
// Function ID: 12555
// Name: BugReporterExperiment
// Dependencies: [1440, 2]

// Module 12554 (BugReporterExperiment)
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-01-bug-reporter", kind: "user", defaultConfig: { hasBugReporterAccess: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { hasBugReporterAccess: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/bug_reporter/BugReporterExperiment.tsx");

export default apexExperiment;
