// Module ID: 5235
// Function ID: 5236
// Name: ProcessBoostExperiment
// Dependencies: [5116, 1453, 2]

// Module 5235 (ProcessBoostExperiment)
import Constants from "Constants" /* 5116 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const ProcessPriority = Constants.ProcessPriority;
const obj = { name: "2026-02-process-boost-on-voice", kind: "user", defaultConfig: { processPriority: ProcessPriority.HIGH, threadPriorityConfiguration: 0 }, variations: obj2 };
obj2 = { 1: null, 2: { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 0 }, 3: { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 1 }, 4: { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 2 } };
obj2[4] = { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 3 };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/ProcessBoostExperiment.tsx");

export const ProcessBoostExperiment = apexExperiment;
