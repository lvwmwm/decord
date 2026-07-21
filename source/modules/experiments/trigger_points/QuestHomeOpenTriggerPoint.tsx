// Module ID: 13863
// Function ID: 104843
// Name: commonTriggerPointConfiguration
// Dependencies: []

// Module 13863 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require(dependencyMap[1]).CommonTriggerPointConfiguration([], require(dependencyMap[0]).CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
