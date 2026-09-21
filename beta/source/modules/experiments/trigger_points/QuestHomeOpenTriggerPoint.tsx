// Module ID: 15344
// Function ID: 15345
// Name: QuestHomeOpenTriggerPoint
// Dependencies: [4675, 11108, 2]

// Module 15344 (QuestHomeOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4675 */;
import Helpers from "Helpers" /* 11108 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
