// Module ID: 16389
// Function ID: 16390
// Name: DmGdmListRenderTriggerPoint
// Dependencies: [4672, 11071, 2]

// Module 16389 (DmGdmListRenderTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4672 */;
import Helpers from "Helpers" /* 11071 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/DmGdmListRenderTriggerPoint.tsx");

export const DmGdmListRenderTriggerPoint = commonTriggerPointConfiguration;
