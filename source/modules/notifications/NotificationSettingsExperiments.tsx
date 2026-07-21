// Module ID: 13261
// Function ID: 100628
// Name: knownExperimentConfigs
// Dependencies: []

// Module 13261 (knownExperimentConfigs)
const obj = {};
const _module = require(dependencyMap[0]);
obj.2026-05-noisier-notif-settings-defaults = _module.createApexExperiment({ defaultConfig: { variation: 0 }, variations: { [1]: { variation: 1 }, [2]: { variation: 2 }, [3]: { variation: 3 }, [4]: { variation: 4 }, [5]: { variation: 5 } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/notifications/NotificationSettingsExperiments.tsx");

export const knownExperimentConfigs = obj;
