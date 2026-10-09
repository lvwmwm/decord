// Module ID: 17992
// Function ID: 17993
// Name: HalloweenHolidayExperiment
// Dependencies: [1453, 2]

// Module 17992 (HalloweenHolidayExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-halloween-holiday", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/holidays/HalloweenHolidayExperiment.tsx");

export default apexExperiment;
