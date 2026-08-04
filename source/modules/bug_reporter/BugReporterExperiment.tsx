// Module ID: 9811
// Function ID: 9812
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 9811 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { hasBugReporterAccess: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-01-bug-reporter", kind: "user", defaultConfig: { hasBugReporterAccess: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReporterExperiment.tsx");

export default apexExperiment;
