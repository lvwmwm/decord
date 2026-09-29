// Module ID: 1434
// Function ID: 1435
// Name: ApexExperiment
// Dependencies: [1235, 2, 1435, 1437]

// Module 1434 (ApexExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1435 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1235 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/apex/index.tsx");

export const ApexExperiment = fn(1435).ApexExperiment;
export const ApexExperimentsMessage = fn(1437).ApexExperimentsMessage;
export const ExperimentName = fn(1437).ExperimentName;
export const createApexExperiment = apex_ApexExperimentDefault;
export { ApexExperimentStore };
