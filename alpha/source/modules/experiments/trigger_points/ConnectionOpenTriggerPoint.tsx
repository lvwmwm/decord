// Module ID: 14656
// Function ID: 14657
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5073, 14657, 10388, 2]

// Module 14656 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5073 */;
import Helpers from "Helpers" /* 10388 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 14657 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
