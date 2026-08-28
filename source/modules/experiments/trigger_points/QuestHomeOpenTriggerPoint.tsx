// Module ID: 14622
// Function ID: 14623
// Name: commonTriggerPointConfiguration
// Dependencies: [4360, 10521, 2]

// Module 14622 (commonTriggerPointConfiguration)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4360 */;
import registeredExperimentIds from "registeredExperimentIds" /* 10521 */;

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = set.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
