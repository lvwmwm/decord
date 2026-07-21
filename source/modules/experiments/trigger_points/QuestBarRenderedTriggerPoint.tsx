// Module ID: 13968
// Function ID: 106162
// Name: commonTriggerPointConfiguration
// Dependencies: []

// Module 13968 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require(dependencyMap[1]).CommonTriggerPointConfiguration([], require(dependencyMap[0]).CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;
