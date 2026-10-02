// Module ID: 10672
// Function ID: 10673
// Name: RenewableEndDateSortExperiment
// Dependencies: [1441, 2]

// Module 10672 (RenewableEndDateSortExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-07-renewable-end-date-sort", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/RenewableEndDateSortExperiment.tsx");

export default apexExperiment;
