// Module ID: 17385
// Function ID: 17386
// Name: QuestHomeOpenTriggerPoint
// Dependencies: [5355, 10797, 2]

// Module 17385 (QuestHomeOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5355 */;
import Helpers from "Helpers" /* 10797 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
