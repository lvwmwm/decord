// Module ID: 12668
// Function ID: 98297
// Name: commonTriggerPointConfiguration
// Dependencies: [4045, 12669, 7158, 2]

// Module 12668 (commonTriggerPointConfiguration)
const items = [require("apexExperiment").HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new require("CommonTriggerPointConfiguration").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = require("CommonTriggerPointConfiguration").fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
