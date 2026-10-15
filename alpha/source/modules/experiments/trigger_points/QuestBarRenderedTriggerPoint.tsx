// Module ID: 16114
// Function ID: 16115
// Name: QuestBarRenderedTriggerPoint
// Dependencies: [5073, 10388, 2]

// Module 16114 (QuestBarRenderedTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5073 */;
import Helpers from "Helpers" /* 10388 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;
