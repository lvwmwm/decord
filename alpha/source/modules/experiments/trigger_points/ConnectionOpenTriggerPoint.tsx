// Module ID: 14895
// Function ID: 14896
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5173, 14896, 10522, 2]

// Module 14895 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5173 */;
import Helpers from "Helpers" /* 10522 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 14896 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
