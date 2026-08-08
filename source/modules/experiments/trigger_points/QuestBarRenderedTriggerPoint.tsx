// Module ID: 14428
// Function ID: 14429
// Name: commonTriggerPointConfiguration
// Dependencies: [4218, 7376, 2]

// Module 14428 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;
