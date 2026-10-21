// Module ID: 18188
// Function ID: 18189
// Name: OpenUserSettingsTriggerPoint
// Dependencies: [5173, 10522, 2]

// Module 18188 (OpenUserSettingsTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5173 */;
import Helpers from "Helpers" /* 10522 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;
