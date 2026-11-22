// Module ID: 14970
// Function ID: 14971
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5531, 14971, 9239, 2]

// Module 14970 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5531 */;
import Helpers from "Helpers" /* 9239 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 14971 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
