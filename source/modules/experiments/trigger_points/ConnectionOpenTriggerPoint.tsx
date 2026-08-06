// Module ID: 12869
// Function ID: 12870
// Name: commonTriggerPointConfiguration
// Dependencies: [4200, 12870, 7297, 2]

// Module 12869 (commonTriggerPointConfiguration)
const items = [require("apexExperiment").HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = require("registeredExperimentIds").fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
