// Module ID: 13294
// Function ID: 13295
// Name: commonTriggerPointConfiguration
// Dependencies: [4392, 10804, 2]

// Module 13294 (commonTriggerPointConfiguration)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4392 */;
import registeredExperimentIds from "registeredExperimentIds" /* 10804 */;

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = set.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
