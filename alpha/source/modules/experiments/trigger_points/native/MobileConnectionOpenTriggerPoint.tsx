// Module ID: 13967
// Function ID: 13968
// Name: MobileConnectionOpenTriggerPoint
// Dependencies: [4673, 11077, 2]

// Module 13967 (MobileConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4673 */;
import Helpers from "Helpers" /* 11077 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN_MOBILE, { location: "app open mobile" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/native/MobileConnectionOpenTriggerPoint.tsx");

export const MobileConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
