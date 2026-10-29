// Module ID: 15499
// Function ID: 15500
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5228, 15500, 10632, 2]

// Module 15499 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5228 */;
import Helpers from "Helpers" /* 10632 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 15500 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
