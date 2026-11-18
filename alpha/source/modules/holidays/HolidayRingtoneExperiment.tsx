// Module ID: 19585
// Function ID: 19586
// Name: HolidayRingtoneExperiment
// Dependencies: [1452, 2]

// Module 19585 (HolidayRingtoneExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-11-holiday-ringtone", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/holidays/HolidayRingtoneExperiment.tsx");

export default apexExperiment;
