// Module ID: 15460
// Function ID: 117927
// Name: commonTriggerPointConfiguration
// Dependencies: []

// Module 15460 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require(dependencyMap[1]).CommonTriggerPointConfiguration([], require(dependencyMap[0]).CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;
