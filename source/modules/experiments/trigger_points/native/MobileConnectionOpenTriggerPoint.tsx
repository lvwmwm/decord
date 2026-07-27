// Module ID: 12683
// Function ID: 98442
// Name: commonTriggerPointConfiguration
// Dependencies: [4046, 6240, 2]

// Module 12683 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("CommonTriggerPointConfiguration").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.CONNECTION_OPEN_MOBILE, { location: "app open mobile" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/native/MobileConnectionOpenTriggerPoint.tsx");

export const MobileConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
