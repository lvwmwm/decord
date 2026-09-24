// Module ID: 16399
// Function ID: 16400
// Name: DmGdmListRenderTriggerPoint
// Dependencies: [4707, 11144, 2]

// Module 16399 (DmGdmListRenderTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4707 */;
import Helpers from "Helpers" /* 11144 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/DmGdmListRenderTriggerPoint.tsx");

export const DmGdmListRenderTriggerPoint = commonTriggerPointConfiguration;
