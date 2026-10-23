// Module ID: 18324
// Function ID: 18325
// Name: OpenUserSettingsTriggerPoint
// Dependencies: [5189, 10563, 2]

// Module 18324 (OpenUserSettingsTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5189 */;
import Helpers from "Helpers" /* 10563 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;
