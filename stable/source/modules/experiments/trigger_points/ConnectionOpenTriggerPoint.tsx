// Module ID: 15577
// Function ID: 15578
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5239, 15578, 10678, 2]

// Module 15577 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5239 */;
import Helpers from "Helpers" /* 10678 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 15578 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
