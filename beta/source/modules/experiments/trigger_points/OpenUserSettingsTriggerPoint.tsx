// Module ID: 17085
// Function ID: 17086
// Name: OpenUserSettingsTriggerPoint
// Dependencies: [4777, 10540, 2]

// Module 17085 (OpenUserSettingsTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4777 */;
import Helpers from "Helpers" /* 10540 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;
