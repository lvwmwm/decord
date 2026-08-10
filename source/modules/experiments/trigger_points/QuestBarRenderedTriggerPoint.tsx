// Module ID: 14430
// Function ID: 14431
// Name: commonTriggerPointConfiguration
// Dependencies: [4218, 7376, 2]

// Module 14430 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;
