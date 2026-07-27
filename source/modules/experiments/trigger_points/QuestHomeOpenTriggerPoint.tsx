// Module ID: 14049
// Function ID: 107526
// Name: commonTriggerPointConfiguration
// Dependencies: [4046, 6240, 2]

// Module 14049 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("CommonTriggerPointConfiguration").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
