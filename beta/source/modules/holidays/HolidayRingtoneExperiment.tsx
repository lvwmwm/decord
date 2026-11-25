// Module ID: 19537
// Function ID: 19538
// Name: HolidayRingtoneExperiment
// Dependencies: [1450, 2]

// Module 19537 (HolidayRingtoneExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-11-holiday-ringtone", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/holidays/HolidayRingtoneExperiment.tsx");

export default apexExperiment;
