// Module ID: 15582
// Function ID: 15583
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5239, 15583, 10678, 2]

// Module 15582 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5239 */;
import Helpers from "Helpers" /* 10678 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 15583 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
