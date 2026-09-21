// Module ID: 1438
// Function ID: 1439
// Name: ApexExperiment
// Dependencies: [1239, 2, 1439, 1441]

// Module 1438 (ApexExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1439 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1239 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/apex/index.tsx");

export const ApexExperiment = fn(1439).ApexExperiment;
export const ApexExperimentsMessage = fn(1441).ApexExperimentsMessage;
export const ExperimentName = fn(1441).ExperimentName;
export const createApexExperiment = apex_ApexExperimentDefault;
export { ApexExperimentStore };
