// Module ID: 13384
// Function ID: 102839
// Name: knownExperimentConfigs
// Dependencies: [1428, 2]

// Module 13384 (knownExperimentConfigs)
import ApexExperiment from "ApexExperiment";

let obj = {};
obj = { name: "2026-05-noisier-notif-settings-defaults", kind: "user", defaultConfig: { variation: 0 }, variations: { [1]: { variation: 1 }, [2]: { variation: 2 }, [3]: { variation: 3 }, [4]: { variation: 4 }, [5]: { variation: 5 } } };
obj["2026-05-noisier-notif-settings-defaults"] = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/notifications/NotificationSettingsExperiments.tsx");

export const knownExperimentConfigs = obj;
