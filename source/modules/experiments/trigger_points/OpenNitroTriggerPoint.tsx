// Module ID: 12563
// Function ID: 12564
// Name: commonTriggerPointConfiguration
// Dependencies: [4170, 7269, 2]

// Module 12563 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
