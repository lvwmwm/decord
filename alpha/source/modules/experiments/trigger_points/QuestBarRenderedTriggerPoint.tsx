// Module ID: 16147
// Function ID: 16148
// Name: QuestBarRenderedTriggerPoint
// Dependencies: [5076, 10404, 2]

// Module 16147 (QuestBarRenderedTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5076 */;
import Helpers from "Helpers" /* 10404 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;
