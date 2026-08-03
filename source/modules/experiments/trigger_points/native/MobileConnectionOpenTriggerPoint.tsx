// Module ID: 12830
// Function ID: 12831
// Name: commonTriggerPointConfiguration
// Dependencies: [4170, 7285, 2]

// Module 12830 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.CONNECTION_OPEN_MOBILE, { location: "app open mobile" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/native/MobileConnectionOpenTriggerPoint.tsx");

export const MobileConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
