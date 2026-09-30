// Module ID: 10912
// Function ID: 10913
// Name: RenewableEndDateSortExperiment
// Dependencies: [1435, 2]

// Module 10912 (RenewableEndDateSortExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-renewable-end-date-sort", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/quests/experiments/RenewableEndDateSortExperiment.tsx");

export default apexExperiment;
