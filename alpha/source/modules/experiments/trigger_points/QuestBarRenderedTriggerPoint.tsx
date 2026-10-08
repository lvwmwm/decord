// Module ID: 15268
// Function ID: 15269
// Name: QuestBarRenderedTriggerPoint
// Dependencies: [4977, 10150, 2]

// Module 15268 (QuestBarRenderedTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4977 */;
import Helpers from "Helpers" /* 10150 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;
