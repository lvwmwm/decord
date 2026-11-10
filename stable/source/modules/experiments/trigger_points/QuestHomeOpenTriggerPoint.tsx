// Module ID: 17060
// Function ID: 17061
// Name: QuestHomeOpenTriggerPoint
// Dependencies: [5239, 10678, 2]

// Module 17060 (QuestHomeOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5239 */;
import Helpers from "Helpers" /* 10678 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
