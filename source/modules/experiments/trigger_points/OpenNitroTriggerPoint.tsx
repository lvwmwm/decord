// Module ID: 12592
// Function ID: 12593
// Name: commonTriggerPointConfiguration
// Dependencies: [4200, 7297, 2]

// Module 12592 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
