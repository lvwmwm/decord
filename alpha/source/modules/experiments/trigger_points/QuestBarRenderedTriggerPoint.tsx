// Module ID: 16448
// Function ID: 16449
// Name: QuestBarRenderedTriggerPoint
// Dependencies: [5412, 9119, 2]

// Module 16448 (QuestBarRenderedTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5412 */;
import Helpers from "Helpers" /* 9119 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;
