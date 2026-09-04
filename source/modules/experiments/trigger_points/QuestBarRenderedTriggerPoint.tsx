// Module ID: 15113
// Function ID: 15114
// Name: commonTriggerPointConfiguration
// Dependencies: [4395, 10740, 2]

// Module 15113 (commonTriggerPointConfiguration)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4395 */;
import registeredExperimentIds from "registeredExperimentIds" /* 10740 */;

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = set.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;
