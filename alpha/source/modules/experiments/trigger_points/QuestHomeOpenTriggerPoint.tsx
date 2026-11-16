// Module ID: 17690
// Function ID: 17691
// Name: QuestHomeOpenTriggerPoint
// Dependencies: [5523, 9715, 2]

// Module 17690 (QuestHomeOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5523 */;
import Helpers from "Helpers" /* 9715 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
