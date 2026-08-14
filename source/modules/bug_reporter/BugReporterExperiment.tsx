// Module ID: 9951
// Function ID: 9952
// Name: apexExperiment
// Dependencies: [1471, 2]

// Module 9951 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { hasBugReporterAccess: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-01-bug-reporter", kind: "user", defaultConfig: { hasBugReporterAccess: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReporterExperiment.tsx");

export default apexExperiment;
