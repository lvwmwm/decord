// Module ID: 10321
// Function ID: 79683
// Name: apexExperiment
// Dependencies: []

// Module 10321 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: null, 0: null, defaultConfig: { hasBugReporterAccess: false }, variations: { [1]: { hasBugReporterAccess: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/bug_reporter/BugReporterExperiment.tsx");

export default apexExperiment;
