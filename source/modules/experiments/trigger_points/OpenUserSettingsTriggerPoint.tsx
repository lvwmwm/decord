// Module ID: 15731
// Function ID: 15732
// Name: commonTriggerPointConfiguration
// Dependencies: [4104, 6297, 2]

// Module 15731 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;
