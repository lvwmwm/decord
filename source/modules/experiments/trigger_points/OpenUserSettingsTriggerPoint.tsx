// Module ID: 15645
// Function ID: 120633
// Name: commonTriggerPointConfiguration
// Dependencies: [4046, 6240, 2]

// Module 15645 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("CommonTriggerPointConfiguration").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;
