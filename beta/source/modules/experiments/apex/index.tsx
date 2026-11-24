// Module ID: 1450
// Function ID: 1451
// Name: ApexExperiment
// Dependencies: [1245, 2, 1451, 1453]

// Module 1450 (ApexExperiment)
import apex_ApexExperiment from "apex/ApexExperiment" /* 1451 */;
import apex_ApexTypes from "apex/ApexTypes" /* 1453 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1245 */;
import size from "module_2" /* 2 */;

const apex_ApexExperimentDefault = apex_ApexExperiment;

const result = size.fileFinishedImporting("modules/experiments/apex/index.tsx");

export const ApexExperiment = apex_ApexExperiment.ApexExperiment;
export const ApexExperimentsMessage = apex_ApexTypes.ApexExperimentsMessage;
export const ExperimentName = apex_ApexTypes.ExperimentName;
export const createApexExperiment = apex_ApexExperimentDefault;
export { ApexExperimentStore };
