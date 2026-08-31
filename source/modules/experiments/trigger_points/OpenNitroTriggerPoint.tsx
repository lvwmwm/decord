// Module ID: 13039
// Function ID: 13040
// Name: commonTriggerPointConfiguration
// Dependencies: [4362, 10545, 2]

// Module 13039 (commonTriggerPointConfiguration)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4362 */;
import registeredExperimentIds from "registeredExperimentIds" /* 10545 */;

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = set.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
