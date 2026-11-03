// Module ID: 15724
// Function ID: 15725
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5362, 15725, 10808, 2]

// Module 15724 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5362 */;
import Helpers from "Helpers" /* 10808 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 15725 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
