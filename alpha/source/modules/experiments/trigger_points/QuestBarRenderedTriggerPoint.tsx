// Module ID: 17423
// Function ID: 17424
// Name: QuestBarRenderedTriggerPoint
// Dependencies: [5385, 10814, 2]

// Module 17423 (QuestBarRenderedTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5385 */;
import Helpers from "Helpers" /* 10814 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;
