// Module ID: 14322
// Function ID: 14323
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5017, 14323, 10165, 2]

// Module 14322 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5017 */;
import Helpers from "Helpers" /* 10165 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 14323 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
