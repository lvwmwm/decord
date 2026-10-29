// Module ID: 18878
// Function ID: 18879
// Name: OpenUserSettingsTriggerPoint
// Dependencies: [5228, 10632, 2]

// Module 18878 (OpenUserSettingsTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5228 */;
import Helpers from "Helpers" /* 10632 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;
