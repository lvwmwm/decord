// Module ID: 15011
// Function ID: 15012
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5535, 15012, 9119, 2]

// Module 15011 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5535 */;
import Helpers from "Helpers" /* 9119 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 15012 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
