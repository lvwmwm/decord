// Module ID: 18771
// Function ID: 18772
// Name: DmGdmListRenderTriggerPoint
// Dependencies: [5523, 9715, 2]

// Module 18771 (DmGdmListRenderTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5523 */;
import Helpers from "Helpers" /* 9715 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/DmGdmListRenderTriggerPoint.tsx");

export const DmGdmListRenderTriggerPoint = commonTriggerPointConfiguration;
