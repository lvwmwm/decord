// Module ID: 1468
// Function ID: 1469
// Name: ApexExperiment
// Dependencies: [1209, 2, 1469, 1471]

// Module 1468 (ApexExperiment)
import getUnitIdDefault from "getUnitId" /* 1469 */;
import importDefaultResult from "initialize" /* 1209 */;

const result = require("set").fileFinishedImporting("modules/experiments/apex/index.tsx");

export const ApexExperiment = require("getUnitId").ApexExperiment;
export const ApexExperimentsMessage = require("INSTALLATION_UNIT_ID").ApexExperimentsMessage;
export const ExperimentName = require("INSTALLATION_UNIT_ID").ExperimentName;
export const createApexExperiment = getUnitIdDefault;
export const ApexExperimentStore = importDefaultResult;
