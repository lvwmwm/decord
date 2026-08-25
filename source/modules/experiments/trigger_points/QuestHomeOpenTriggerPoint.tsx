// Module ID: 14538
// Function ID: 14539
// Name: commonTriggerPointConfiguration
// Dependencies: [4294, 7519, 2]

// Module 14538 (commonTriggerPointConfiguration)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4294 */;
import registeredExperimentIds from "registeredExperimentIds" /* 7519 */;

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = set.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
