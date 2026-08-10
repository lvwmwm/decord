// Module ID: 15977
// Function ID: 15978
// Name: commonTriggerPointConfiguration
// Dependencies: [4218, 7376, 2]

// Module 15977 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;
