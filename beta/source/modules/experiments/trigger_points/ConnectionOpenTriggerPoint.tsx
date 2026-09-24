// Module ID: 13995
// Function ID: 13996
// Name: ConnectionOpenTriggerPoint
// Dependencies: [4707, 13996, 11144, 2]

// Module 13995 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4707 */;
import Helpers from "Helpers" /* 11144 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 13996 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
