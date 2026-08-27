// Module ID: 12986
// Function ID: 12987
// Name: commonTriggerPointConfiguration
// Dependencies: [4359, 10406, 2]

// Module 12986 (commonTriggerPointConfiguration)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4359 */;
import registeredExperimentIds from "registeredExperimentIds" /* 10406 */;

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = set.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
