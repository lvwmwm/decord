// Module ID: 12628
// Function ID: 97093
// Name: apexExperiment
// Dependencies: []

// Module 12628 (apexExperiment)
const ProcessPriority = require(dependencyMap[0]).ProcessPriority;
const _module = require(dependencyMap[1]);
let obj = { y: "user", DateToSystemTimezoneSetter: "2025-12-wmf-gpu-encode", defaultConfig: { processPriority: ProcessPriority.HIGH, threadPriorityConfiguration: 0 } };
obj = { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 0 };
obj.variations = { [1]: obj, [2]: { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 1 }, [3]: { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 2 }, [4]: { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 3 } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/media_engine/ProcessBoostExperiment.tsx");

export const ProcessBoostExperiment = apexExperiment;
