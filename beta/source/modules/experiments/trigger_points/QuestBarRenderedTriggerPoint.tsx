// Module ID: 15455
// Function ID: 15456
// Name: QuestBarRenderedTriggerPoint
// Dependencies: [4707, 11144, 2]

// Module 15455 (QuestBarRenderedTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4707 */;
import Helpers from "Helpers" /* 11144 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;
