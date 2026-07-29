// Module ID: 12441
// Function ID: 12442
// Name: commonTriggerPointConfiguration
// Dependencies: [4104, 6297, 2]

// Module 12441 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
