// Module ID: 15167
// Function ID: 15168
// Name: QuestHomeOpenTriggerPoint
// Dependencies: [4977, 10150, 2]

// Module 15167 (QuestHomeOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4977 */;
import Helpers from "Helpers" /* 10150 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
