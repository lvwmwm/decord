// Module ID: 10322
// Function ID: 79707
// Name: apexExperiment
// Dependencies: []

// Module 10322 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: null, DateToSystemTimezoneSetter: null, defaultConfig: { hasBugReporterAccess: false }, variations: { [1]: { hasBugReporterAccess: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/bug_reporter/BugReporterExperiment.tsx");

export default apexExperiment;
