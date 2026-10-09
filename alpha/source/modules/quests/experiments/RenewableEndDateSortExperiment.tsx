// Module ID: 9173
// Function ID: 9174
// Name: RenewableEndDateSortExperiment
// Dependencies: [1453, 2]

// Module 9173 (RenewableEndDateSortExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-07-renewable-end-date-sort", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/RenewableEndDateSortExperiment.tsx");

export default apexExperiment;
