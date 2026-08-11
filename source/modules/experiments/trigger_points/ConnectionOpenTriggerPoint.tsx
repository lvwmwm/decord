// Module ID: 12960
// Function ID: 12961
// Name: commonTriggerPointConfiguration
// Dependencies: [4218, 12961, 7378, 2]

// Module 12960 (commonTriggerPointConfiguration)
const items = [require("apexExperiment").HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = require("registeredExperimentIds").fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
