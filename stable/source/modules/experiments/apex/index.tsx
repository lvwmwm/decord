// Module ID: 1441
// Function ID: 1442
// Name: ApexExperiment
// Dependencies: [1247, 2, 1442, 1444]

// Module 1441 (ApexExperiment)
import apex_ApexExperiment from "apex/ApexExperiment" /* 1442 */;
import apex_ApexTypes from "apex/ApexTypes" /* 1444 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1247 */;
import size from "module_2" /* 2 */;

const apex_ApexExperimentDefault = apex_ApexExperiment;

const result = size.fileFinishedImporting("modules/experiments/apex/index.tsx");

export const ApexExperiment = apex_ApexExperiment.ApexExperiment;
export const ApexExperimentsMessage = apex_ApexTypes.ApexExperimentsMessage;
export const ExperimentName = apex_ApexTypes.ExperimentName;
export const createApexExperiment = apex_ApexExperimentDefault;
export { ApexExperimentStore };
