// Module ID: 14956
// Function ID: 14957
// Name: MobileConnectionOpenTriggerPoint
// Dependencies: [5177, 10541, 2]

// Module 14956 (MobileConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5177 */;
import Helpers from "Helpers" /* 10541 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN_MOBILE, { location: "app open mobile" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/native/MobileConnectionOpenTriggerPoint.tsx");

export const MobileConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
