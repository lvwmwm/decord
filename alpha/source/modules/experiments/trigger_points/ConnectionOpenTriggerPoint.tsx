// Module ID: 15838
// Function ID: 15839
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5365, 15839, 10862, 2]

// Module 15838 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5365 */;
import Helpers from "Helpers" /* 10862 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 15839 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
