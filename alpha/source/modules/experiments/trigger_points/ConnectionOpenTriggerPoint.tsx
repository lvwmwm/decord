// Module ID: 15892
// Function ID: 15893
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5355, 15893, 10797, 2]

// Module 15892 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5355 */;
import Helpers from "Helpers" /* 10797 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 15893 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
