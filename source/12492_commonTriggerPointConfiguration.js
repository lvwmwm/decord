// Module ID: 12492
// Function ID: 95760
// Name: commonTriggerPointConfiguration
// Dependencies: [0, 0, 4294967295]

// Module 12492 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("result").CommonTriggerPointConfiguration([], require("result").CommonTriggerPoints.CONNECTION_OPEN_MOBILE, { location: "app open mobile" });
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/experiments/trigger_points/native/MobileConnectionOpenTriggerPoint.tsx");

export const MobileConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
