// Module ID: 17111
// Function ID: 17112
// Name: OpenUserSettingsTriggerPoint
// Dependencies: [4783, 10553, 2]

// Module 17111 (OpenUserSettingsTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4783 */;
import Helpers from "Helpers" /* 10553 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;
