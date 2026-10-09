// Module ID: 15278
// Function ID: 15279
// Name: QuestHomeOpenTriggerPoint
// Dependencies: [4978, 10135, 2]

// Module 15278 (QuestHomeOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4978 */;
import Helpers from "Helpers" /* 10135 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
