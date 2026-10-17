// Module ID: 14766
// Function ID: 14767
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5113, 14767, 10468, 2]

// Module 14766 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5113 */;
import Helpers from "Helpers" /* 10468 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 14767 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
