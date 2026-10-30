// Module ID: 17090
// Function ID: 17091
// Name: QuestBarRenderedTriggerPoint
// Dependencies: [5234, 10658, 2]

// Module 17090 (QuestBarRenderedTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5234 */;
import Helpers from "Helpers" /* 10658 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;
