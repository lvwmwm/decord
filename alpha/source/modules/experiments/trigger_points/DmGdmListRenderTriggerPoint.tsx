// Module ID: 16400
// Function ID: 16401
// Name: DmGdmListRenderTriggerPoint
// Dependencies: [4673, 11077, 2]

// Module 16400 (DmGdmListRenderTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4673 */;
import Helpers from "Helpers" /* 11077 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/DmGdmListRenderTriggerPoint.tsx");

export const DmGdmListRenderTriggerPoint = commonTriggerPointConfiguration;
