// Module ID: 1451
// Function ID: 1452
// Name: ApexExperiment
// Dependencies: [1246, 2, 1452, 1454]

// Module 1451 (ApexExperiment)
import apex_ApexExperiment from "apex/ApexExperiment" /* 1452 */;
import apex_ApexTypes from "apex/ApexTypes" /* 1454 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import size from "module_2" /* 2 */;

const apex_ApexExperimentDefault = apex_ApexExperiment;

const result = size.fileFinishedImporting("modules/experiments/apex/index.tsx");

export const ApexExperiment = apex_ApexExperiment.ApexExperiment;
export const ApexExperimentsMessage = apex_ApexTypes.ApexExperimentsMessage;
export const ExperimentName = apex_ApexTypes.ExperimentName;
export const createApexExperiment = apex_ApexExperimentDefault;
export { ApexExperimentStore };
