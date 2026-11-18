// Module ID: 17625
// Function ID: 17626
// Name: DmGdmListRenderTriggerPoint
// Dependencies: [5441, 9143, 2]

// Module 17625 (DmGdmListRenderTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5441 */;
import Helpers from "Helpers" /* 9143 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/DmGdmListRenderTriggerPoint.tsx");

export const DmGdmListRenderTriggerPoint = commonTriggerPointConfiguration;
