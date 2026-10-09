// Module ID: 15381
// Function ID: 15382
// Name: QuestBarRenderedTriggerPoint
// Dependencies: [4978, 10135, 2]

// Module 15381 (QuestBarRenderedTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4978 */;
import Helpers from "Helpers" /* 10135 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;
