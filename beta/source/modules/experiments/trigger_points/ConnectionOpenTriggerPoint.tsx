// Module ID: 13985
// Function ID: 13986
// Name: ConnectionOpenTriggerPoint
// Dependencies: [4704, 13986, 11102, 2]

// Module 13985 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4704 */;
import Helpers from "Helpers" /* 11102 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 13986 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
