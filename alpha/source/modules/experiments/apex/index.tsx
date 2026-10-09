// Module ID: 1453
// Function ID: 1454
// Name: ApexExperiment
// Dependencies: [1259, 2, 1454, 1456]

// Module 1453 (ApexExperiment)
import apex_ApexExperiment from "apex/ApexExperiment" /* 1454 */;
import apex_ApexTypes from "apex/ApexTypes" /* 1456 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1259 */;
import size from "module_2" /* 2 */;

const apex_ApexExperimentDefault = apex_ApexExperiment;

const result = size.fileFinishedImporting("modules/experiments/apex/index.tsx");

export const ApexExperiment = apex_ApexExperiment.ApexExperiment;
export const ApexExperimentsMessage = apex_ApexTypes.ApexExperimentsMessage;
export const ExperimentName = apex_ApexTypes.ExperimentName;
export const createApexExperiment = apex_ApexExperimentDefault;
export { ApexExperimentStore };
