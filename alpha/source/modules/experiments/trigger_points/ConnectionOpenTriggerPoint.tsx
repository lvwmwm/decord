// Module ID: 15832
// Function ID: 15833
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5385, 15833, 10814, 2]

// Module 15832 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5385 */;
import Helpers from "Helpers" /* 10814 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 15833 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
