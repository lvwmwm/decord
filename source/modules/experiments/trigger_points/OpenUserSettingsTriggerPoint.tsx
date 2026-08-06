// Module ID: 15869
// Function ID: 15870
// Name: commonTriggerPointConfiguration
// Dependencies: [4200, 7297, 2]

// Module 15869 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;
