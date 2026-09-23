// Module ID: 17454
// Function ID: 17455
// Name: OpenUserSettingsTriggerPoint
// Dependencies: [4743, 11153, 2]

// Module 17454 (OpenUserSettingsTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4743 */;
import Helpers from "Helpers" /* 11153 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;
