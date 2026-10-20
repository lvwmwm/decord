// Module ID: 18168
// Function ID: 18169
// Name: RecurringReferralReminderExperiment
// Dependencies: [1455, 2]

// Module 18168 (RecurringReferralReminderExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-recurring-referral-reminder", kind: "user", defaultConfig: { enabled: false, bottomSheetEnabled: false, notificationEnabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, bottomSheetEnabled: true, notificationEnabled: false } };
obj2[2] = { enabled: true, bottomSheetEnabled: false, notificationEnabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/experiments/RecurringReferralReminderExperiment.tsx");

export const RecurringReferralReminderExperiment = apexExperiment;
