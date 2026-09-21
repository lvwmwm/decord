// Module ID: 17376
// Function ID: 17377
// Name: OpenUserSettingsTriggerPoint
// Dependencies: [4675, 11108, 2]

// Module 17376 (OpenUserSettingsTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4675 */;
import Helpers from "Helpers" /* 11108 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;
