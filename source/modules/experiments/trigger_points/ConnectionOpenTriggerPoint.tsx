// Module ID: 12739
// Function ID: 12740
// Name: commonTriggerPointConfiguration
// Dependencies: [4104, 12740, 6294, 2]

// Module 12739 (commonTriggerPointConfiguration)
const items = [require("apexExperiment").HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = require("registeredExperimentIds").fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
