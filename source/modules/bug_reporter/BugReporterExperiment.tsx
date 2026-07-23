// Module ID: 10335
// Function ID: 79781
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 10335 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-01-bug-reporter", kind: "user", defaultConfig: { hasBugReporterAccess: false }, variations: { [1]: { hasBugReporterAccess: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReporterExperiment.tsx");

export default apexExperiment;
