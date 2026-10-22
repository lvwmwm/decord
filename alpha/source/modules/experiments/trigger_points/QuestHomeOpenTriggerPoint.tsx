// Module ID: 16347
// Function ID: 16348
// Name: QuestHomeOpenTriggerPoint
// Dependencies: [5177, 10541, 2]

// Module 16347 (QuestHomeOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5177 */;
import Helpers from "Helpers" /* 10541 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
