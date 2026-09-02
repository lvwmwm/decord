// Module ID: 16719
// Function ID: 16720
// Name: commonTriggerPointConfiguration
// Dependencies: [4392, 10804, 2]

// Module 16719 (commonTriggerPointConfiguration)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4392 */;
import registeredExperimentIds from "registeredExperimentIds" /* 10804 */;

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = set.fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;
