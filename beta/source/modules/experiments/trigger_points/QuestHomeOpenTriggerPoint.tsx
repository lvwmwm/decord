// Module ID: 17419
// Function ID: 17420
// Name: QuestHomeOpenTriggerPoint
// Dependencies: [5387, 10829, 2]

// Module 17419 (QuestHomeOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5387 */;
import Helpers from "Helpers" /* 10829 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
