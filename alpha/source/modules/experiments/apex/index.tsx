// Module ID: 1452
// Function ID: 1453
// Name: ApexExperiment
// Dependencies: [1258, 2, 1453, 1455]

// Module 1452 (ApexExperiment)
import apex_ApexExperiment from "apex/ApexExperiment" /* 1453 */;
import apex_ApexTypes from "apex/ApexTypes" /* 1455 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1258 */;
import size from "module_2" /* 2 */;

const apex_ApexExperimentDefault = apex_ApexExperiment;

const result = size.fileFinishedImporting("modules/experiments/apex/index.tsx");

export const ApexExperiment = apex_ApexExperiment.ApexExperiment;
export const ApexExperimentsMessage = apex_ApexTypes.ApexExperimentsMessage;
export const ExperimentName = apex_ApexTypes.ExperimentName;
export const createApexExperiment = apex_ApexExperimentDefault;
export { ApexExperimentStore };
