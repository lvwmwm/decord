// Module ID: 14083
// Function ID: 14084
// Name: ProcessBoostExperiment
// Dependencies: [4783, 1438, 2]

// Module 14083 (ProcessBoostExperiment)
import Constants from "Constants" /* 4783 */;
import ApexExperiment from "ApexExperiment" /* 1438 */;
import size from "module_2" /* 2 */;

const ProcessPriority = Constants.ProcessPriority;
const obj = { name: "2026-02-process-boost-on-voice", kind: "user", defaultConfig: { processPriority: ProcessPriority.HIGH, threadPriorityConfiguration: 0 }, variations: null };
const obj2 = { 1: null, 2: { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 0 }, 3: { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 1 }, 4: { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 2 } };
obj2[4] = { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 3 };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/ProcessBoostExperiment.tsx");

export const ProcessBoostExperiment = apexExperiment;
