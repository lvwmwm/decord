// Module ID: 17385
// Function ID: 17386
// Name: OpenUserSettingsTriggerPoint
// Dependencies: [4673, 11077, 2]

// Module 17385 (OpenUserSettingsTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4673 */;
import Helpers from "Helpers" /* 11077 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;
