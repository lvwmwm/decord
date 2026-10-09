// Module ID: 13909
// Function ID: 13910
// Name: ConnectionOpenTriggerPoint
// Dependencies: [4978, 13910, 10135, 2]

// Module 13909 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4978 */;
import Helpers from "Helpers" /* 10135 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 13910 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
