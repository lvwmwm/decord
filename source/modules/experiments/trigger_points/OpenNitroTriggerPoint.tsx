// Module ID: 12419
// Function ID: 96368
// Name: commonTriggerPointConfiguration
// Dependencies: [4080, 6276, 2]

// Module 12419 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("CommonTriggerPointConfiguration").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
