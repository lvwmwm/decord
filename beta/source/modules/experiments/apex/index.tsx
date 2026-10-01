// Module ID: 1435
// Function ID: 1436
// Name: ApexExperiment
// Dependencies: [1235, 2, 1436, 1438]

// Module 1435 (ApexExperiment)
import apex_ApexExperiment from "apex/ApexExperiment" /* 1436 */;
import apex_ApexTypes from "apex/ApexTypes" /* 1438 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1235 */;
import size from "module_2" /* 2 */;

const apex_ApexExperimentDefault = apex_ApexExperiment;

const result = size.fileFinishedImporting("modules/experiments/apex/index.tsx");

export const ApexExperiment = apex_ApexExperiment.ApexExperiment;
export const ApexExperimentsMessage = apex_ApexTypes.ApexExperimentsMessage;
export const ExperimentName = apex_ApexTypes.ExperimentName;
export const createApexExperiment = apex_ApexExperimentDefault;
export { ApexExperimentStore };
