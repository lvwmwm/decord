// Module ID: 12620
// Function ID: 97989
// Name: commonTriggerPointConfiguration
// Dependencies: [4045, 7158, 2]

// Module 12620 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("CommonTriggerPointConfiguration").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.CONNECTION_OPEN_MOBILE, { location: "app open mobile" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/native/MobileConnectionOpenTriggerPoint.tsx");

export const MobileConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
