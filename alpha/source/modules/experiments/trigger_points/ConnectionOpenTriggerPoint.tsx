// Module ID: 16195
// Function ID: 16196
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5533, 16196, 9715, 2]

// Module 16195 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5533 */;
import Helpers from "Helpers" /* 9715 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 16196 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
