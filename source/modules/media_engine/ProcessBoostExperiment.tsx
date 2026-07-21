// Module ID: 12621
// Function ID: 97043
// Name: apexExperiment
// Dependencies: []

// Module 12621 (apexExperiment)
const ProcessPriority = require(dependencyMap[0]).ProcessPriority;
const _module = require(dependencyMap[1]);
let obj = { 9223372036854775807: "user", 0: "2026-01-wmf-gpu-encode-intel", defaultConfig: { processPriority: ProcessPriority.HIGH, threadPriorityConfiguration: 0 } };
obj = { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 0 };
obj.variations = { [1]: obj, [2]: { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 1 }, [3]: { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 2 }, [4]: { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 3 } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/media_engine/ProcessBoostExperiment.tsx");

export const ProcessBoostExperiment = apexExperiment;
