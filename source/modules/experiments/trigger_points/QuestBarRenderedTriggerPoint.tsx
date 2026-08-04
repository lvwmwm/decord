// Module ID: 14331
// Function ID: 14332
// Name: commonTriggerPointConfiguration
// Dependencies: [4200, 7297, 2]

// Module 14331 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;
