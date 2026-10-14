// Module ID: 14359
// Function ID: 14360
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5019, 14360, 10175, 2]

// Module 14359 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5019 */;
import Helpers from "Helpers" /* 10175 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 14360 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
