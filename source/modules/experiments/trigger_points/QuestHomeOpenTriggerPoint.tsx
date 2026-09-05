// Module ID: 15088
// Function ID: 15089
// Name: commonTriggerPointConfiguration
// Dependencies: [4477, 10809, 2]

// Module 15088 (commonTriggerPointConfiguration)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4477 */;
import registeredExperimentIds from "registeredExperimentIds" /* 10809 */;

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = set.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
