// Module ID: 16940
// Function ID: 16941
// Name: QuestHomeOpenTriggerPoint
// Dependencies: [5228, 10632, 2]

// Module 16940 (QuestHomeOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5228 */;
import Helpers from "Helpers" /* 10632 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
