// Module ID: 15825
// Function ID: 15826
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5363, 15826, 10856, 2]

// Module 15825 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5363 */;
import Helpers from "Helpers" /* 10856 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 15826 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
