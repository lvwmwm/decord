// Module ID: 13087
// Function ID: 13088
// Name: apexExperiment
// Dependencies: [4529, 1472, 2]

// Module 13087 (apexExperiment)
import { ProcessPriority } from "DesktopSources";
import ApexExperiment from "ApexExperiment";

let obj = { processPriority: ProcessPriority.HIGH, threadPriorityConfiguration: 0 };
obj = { 1: null, 2: obj1, 3: obj2, 4: obj3 };
obj[4] = { processPriority: ProcessPriority.NORMAL, threadPriorityConfiguration: 3 };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-process-boost-on-voice", kind: "user", defaultConfig: obj, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/ProcessBoostExperiment.tsx");

export const ProcessBoostExperiment = apexExperiment;
