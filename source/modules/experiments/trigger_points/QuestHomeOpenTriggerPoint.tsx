// Module ID: 14133
// Function ID: 14134
// Name: commonTriggerPointConfiguration
// Dependencies: [4108, 6300, 2]

// Module 14133 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
