// Module ID: 14723
// Function ID: 14724
// Name: commonTriggerPointConfiguration
// Dependencies: [4360, 10521, 2]

// Module 14723 (commonTriggerPointConfiguration)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4360 */;
import registeredExperimentIds from "registeredExperimentIds" /* 10521 */;

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = set.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;
