// Module ID: 12489
// Function ID: 95747
// Name: commonTriggerPointConfiguration
// Dependencies: []

// Module 12489 (commonTriggerPointConfiguration)
const items = [require(dependencyMap[1]).HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new require(dependencyMap[2]).CommonTriggerPointConfiguration(items, require(dependencyMap[0]).CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
