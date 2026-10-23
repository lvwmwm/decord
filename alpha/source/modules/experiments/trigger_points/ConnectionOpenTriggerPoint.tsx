// Module ID: 14977
// Function ID: 14978
// Name: ConnectionOpenTriggerPoint
// Dependencies: [5189, 14978, 10563, 2]

// Module 14977 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5189 */;
import Helpers from "Helpers" /* 10563 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 14978 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
