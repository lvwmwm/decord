// Module ID: 16499
// Function ID: 16500
// Name: QuestHomeOpenTriggerPoint
// Dependencies: [5535, 9119, 2]

// Module 16499 (QuestHomeOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5535 */;
import Helpers from "Helpers" /* 9119 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
