// Module ID: 1455
// Function ID: 1456
// Name: ApexExperiment
// Dependencies: [1261, 2, 1456, 1458]

// Module 1455 (ApexExperiment)
import apex_ApexExperiment from "apex/ApexExperiment" /* 1456 */;
import apex_ApexTypes from "apex/ApexTypes" /* 1458 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1261 */;
import size from "module_2" /* 2 */;

const apex_ApexExperimentDefault = apex_ApexExperiment;

const result = size.fileFinishedImporting("modules/experiments/apex/index.tsx");

export const ApexExperiment = apex_ApexExperiment.ApexExperiment;
export const ApexExperimentsMessage = apex_ApexTypes.ApexExperimentsMessage;
export const ExperimentName = apex_ApexTypes.ExperimentName;
export const createApexExperiment = apex_ApexExperimentDefault;
export { ApexExperimentStore };
