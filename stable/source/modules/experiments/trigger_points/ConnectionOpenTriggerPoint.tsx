// Module ID: 13781
// Function ID: 13782
// Name: ConnectionOpenTriggerPoint
// Dependencies: [4553, 13782, 10941, 2]

// Module 13781 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4553 */;
import Helpers from "Helpers" /* 10941 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 13782 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
