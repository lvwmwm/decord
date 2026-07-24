// Module ID: 13433
// Function ID: 103146
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 13433 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-04-declarative-notif-settings", kind: "user", defaultConfig: { enabled: false, clearDeclarative: false }, variations: { [1]: { enabled: true, clearDeclarative: false }, [2]: { enabled: false, clearDeclarative: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/notifications/native/NotifSettingsExperiments.tsx");

export const declarativeNotifSettingsExperiment = apexExperiment;
