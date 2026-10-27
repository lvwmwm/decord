// Module ID: 14770
// Function ID: 14771
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5113, 14771, 10468, 2]

// Module 14770 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5113 */;
import Helpers from "Helpers" /* 10468 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 14771 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
