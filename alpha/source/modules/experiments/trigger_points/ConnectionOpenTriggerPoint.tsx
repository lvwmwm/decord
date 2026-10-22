// Module ID: 14953
// Function ID: 14954
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5177, 14954, 10541, 2]

// Module 14953 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5177 */;
import Helpers from "Helpers" /* 10541 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 14954 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
