// Module ID: 17483
// Function ID: 17484
// Name: QuestBarRenderedTriggerPoint
// Dependencies: [5355, 10797, 2]

// Module 17483 (QuestBarRenderedTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5355 */;
import Helpers from "Helpers" /* 10797 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;
