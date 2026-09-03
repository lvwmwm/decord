// Module ID: 14345
// Function ID: 14346
// Name: knownExperimentConfigs
// Dependencies: [1467, 2]

// Module 14345 (knownExperimentConfigs)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

let obj = { "2026-05-noisier-notif-settings-defaults": null };
obj = { 1: null, 2: { variation: 1 }, 3: { variation: 2 }, 4: { variation: 3 }, 5: { variation: 4 } };
obj[5] = { variation: 5 };
obj[0] = ApexExperiment.createApexExperiment({ name: "2026-05-noisier-notif-settings-defaults", kind: "user", defaultConfig: { variation: 0 }, variations: obj });
const result = set.fileFinishedImporting("modules/notifications/NotificationSettingsExperiments.tsx");

export const knownExperimentConfigs = obj;
