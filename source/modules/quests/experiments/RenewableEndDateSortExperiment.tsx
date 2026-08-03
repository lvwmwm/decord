// Module ID: 10645
// Function ID: 10646
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 10645 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-renewable-end-date-sort", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/quests/experiments/RenewableEndDateSortExperiment.tsx");

export default apexExperiment;
