// Module ID: 12499
// Function ID: 95783
// Name: commonTriggerPointConfiguration
// Dependencies: []

// Module 12499 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require(dependencyMap[1]).CommonTriggerPointConfiguration([], require(dependencyMap[0]).CommonTriggerPoints.CONNECTION_OPEN_MOBILE, { location: "app open mobile" });
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/experiments/trigger_points/native/MobileConnectionOpenTriggerPoint.tsx");

export const MobileConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
