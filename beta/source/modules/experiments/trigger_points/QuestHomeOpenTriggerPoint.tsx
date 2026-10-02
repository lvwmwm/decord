// Module ID: 14605
// Function ID: 14606
// Name: QuestHomeOpenTriggerPoint
// Dependencies: [4753, 10309, 2]

// Module 14605 (QuestHomeOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4753 */;
import Helpers from "Helpers" /* 10309 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
