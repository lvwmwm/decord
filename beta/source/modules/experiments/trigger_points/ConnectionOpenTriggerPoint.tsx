// Module ID: 15924
// Function ID: 15925
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5387, 15925, 10829, 2]

// Module 15924 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5387 */;
import Helpers from "Helpers" /* 10829 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 15925 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
