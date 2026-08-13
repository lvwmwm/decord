// Module ID: 14495
// Function ID: 14496
// Name: commonTriggerPointConfiguration
// Dependencies: [4257, 7421, 2]

// Module 14495 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;
