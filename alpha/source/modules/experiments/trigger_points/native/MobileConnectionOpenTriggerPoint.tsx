// Module ID: 14888
// Function ID: 14889
// Name: MobileConnectionOpenTriggerPoint
// Dependencies: [5410, 9119, 2]

// Module 14888 (MobileConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5410 */;
import Helpers from "Helpers" /* 9119 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN_MOBILE, { location: "app open mobile" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/native/MobileConnectionOpenTriggerPoint.tsx");

export const MobileConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
