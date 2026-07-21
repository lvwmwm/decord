// Module ID: 12264
// Function ID: 94039
// Name: commonTriggerPointConfiguration
// Dependencies: []

// Module 12264 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require(dependencyMap[1]).CommonTriggerPointConfiguration([], require(dependencyMap[0]).CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
