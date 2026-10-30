// Module ID: 15539
// Function ID: 15540
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5234, 15540, 10658, 2]

// Module 15539 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5234 */;
import Helpers from "Helpers" /* 10658 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 15540 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
