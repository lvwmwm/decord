// Module ID: 13615
// Function ID: 13616
// Name: commonTriggerPointConfiguration
// Dependencies: [4395, 13616, 10740, 2]

// Module 13615 (commonTriggerPointConfiguration)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4395 */;
import registeredExperimentIds from "registeredExperimentIds" /* 10740 */;
import apexExperiment from "apexExperiment" /* 13616 */;

const items = [apexExperiment.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration(items, ExperimentBuckets.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = set.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
