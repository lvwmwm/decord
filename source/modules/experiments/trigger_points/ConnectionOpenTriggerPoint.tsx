// Module ID: 12723
// Function ID: 98599
// Name: commonTriggerPointConfiguration
// Dependencies: [4080, 12724, 6276, 2]

// Module 12723 (commonTriggerPointConfiguration)
const items = [require("apexExperiment").HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new require("CommonTriggerPointConfiguration").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = require("CommonTriggerPointConfiguration").fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
