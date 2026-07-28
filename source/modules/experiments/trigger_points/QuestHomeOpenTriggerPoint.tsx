// Module ID: 14093
// Function ID: 107699
// Name: commonTriggerPointConfiguration
// Dependencies: [4080, 6276, 2]

// Module 14093 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("CommonTriggerPointConfiguration").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
