// Module ID: 12591
// Function ID: 12592
// Name: commonTriggerPointConfiguration
// Dependencies: [4200, 7297, 2]

// Module 12591 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
