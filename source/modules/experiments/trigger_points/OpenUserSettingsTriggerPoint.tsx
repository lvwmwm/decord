// Module ID: 15818
// Function ID: 15819
// Name: commonTriggerPointConfiguration
// Dependencies: [4170, 7285, 2]

// Module 15818 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;
