// Module ID: 12498
// Function ID: 95792
// Name: commonTriggerPointConfiguration
// Dependencies: []

// Module 12498 (commonTriggerPointConfiguration)
const items = [require(dependencyMap[1]).HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new require(dependencyMap[2]).CommonTriggerPointConfiguration(items, require(dependencyMap[0]).CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
