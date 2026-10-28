// Module ID: 16702
// Function ID: 16703
// Name: QuestHomeOpenTriggerPoint
// Dependencies: [5227, 10599, 2]

// Module 16702 (QuestHomeOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5227 */;
import Helpers from "Helpers" /* 10599 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
