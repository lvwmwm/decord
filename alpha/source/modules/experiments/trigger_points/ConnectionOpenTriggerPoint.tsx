// Module ID: 14849
// Function ID: 14850
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5412, 14850, 9119, 2]

// Module 14849 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5412 */;
import Helpers from "Helpers" /* 9119 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 14850 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
