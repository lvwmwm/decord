// Module ID: 14233
// Function ID: 14234
// Name: commonTriggerPointConfiguration
// Dependencies: [4200, 7297, 2]

// Module 14233 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
