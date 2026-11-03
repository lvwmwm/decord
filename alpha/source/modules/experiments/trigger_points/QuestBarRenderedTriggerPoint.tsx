// Module ID: 17304
// Function ID: 17305
// Name: QuestBarRenderedTriggerPoint
// Dependencies: [5362, 10808, 2]

// Module 17304 (QuestBarRenderedTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5362 */;
import Helpers from "Helpers" /* 10808 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;
