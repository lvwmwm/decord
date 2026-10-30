// Module ID: 1448
// Function ID: 1449
// Name: ApexExperiment
// Dependencies: [1247, 2, 1449, 1451]

// Module 1448 (ApexExperiment)
import apex_ApexExperiment from "apex/ApexExperiment" /* 1449 */;
import apex_ApexTypes from "apex/ApexTypes" /* 1451 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1247 */;
import size from "module_2" /* 2 */;

const apex_ApexExperimentDefault = apex_ApexExperiment;

const result = size.fileFinishedImporting("modules/experiments/apex/index.tsx");

export const ApexExperiment = apex_ApexExperiment.ApexExperiment;
export const ApexExperimentsMessage = apex_ApexTypes.ApexExperimentsMessage;
export const ExperimentName = apex_ApexTypes.ExperimentName;
export const createApexExperiment = apex_ApexExperimentDefault;
export { ApexExperimentStore };
