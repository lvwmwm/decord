// Module ID: 14530
// Function ID: 14531
// Name: NotifSettingsExperiments
// Dependencies: [1452, 2]

// Module 14530 (NotifSettingsExperiments)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-04-declarative-notif-settings", kind: "user", defaultConfig: { enabled: false, clearDeclarative: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, clearDeclarative: false } };
obj2[2] = { enabled: false, clearDeclarative: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/notifications/native/NotifSettingsExperiments.tsx");

export const declarativeNotifSettingsExperiment = apexExperiment;
