// Module ID: 13959
// Function ID: 13960
// Name: ConnectionOpenTriggerPoint
// Dependencies: [4675, 13960, 11108, 2]

// Module 13959 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4675 */;
import Helpers from "Helpers" /* 11108 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 13960 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
