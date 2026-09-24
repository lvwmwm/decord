// Module ID: 14058
// Function ID: 14059
// Name: ConnectionOpenTriggerPoint
// Dependencies: [4745, 14059, 11159, 2]

// Module 14058 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4745 */;
import Helpers from "Helpers" /* 11159 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 14059 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
