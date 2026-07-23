// Module ID: 12742
// Function ID: 99249
// Name: apexExperiment
// Dependencies: [4191, 1428, 2]

// Module 12742 (apexExperiment)
import { ProcessPriority } from "DesktopSources";
import ApexExperiment from "ApexExperiment";

let obj = { name: "2026-02-process-boost-on-voice", kind: "user", defaultConfig: { processPriority: ProcessPriority.HIGH, threadPriorityConfiguration: 0 } };
obj = { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 0 };
obj.variations = { [1]: obj, [2]: { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 1 }, [3]: { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 2 }, [4]: { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 3 } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/ProcessBoostExperiment.tsx");

export const ProcessBoostExperiment = apexExperiment;
