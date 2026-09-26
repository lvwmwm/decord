// Module ID: 15459
// Function ID: 15460
// Name: QuestBarRenderedTriggerPoint
// Dependencies: [4704, 11102, 2]

// Module 15459 (QuestBarRenderedTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4704 */;
import Helpers from "Helpers" /* 11102 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;
