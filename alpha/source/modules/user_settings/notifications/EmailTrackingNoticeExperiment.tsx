// Module ID: 17803
// Function ID: 17804
// Name: EmailTrackingNoticeExperiment
// Dependencies: [1449, 2]

// Module 17803 (EmailTrackingNoticeExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-09-update-email-settings-copy-subtext", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_settings/notifications/EmailTrackingNoticeExperiment.tsx");

export default apexExperiment;
