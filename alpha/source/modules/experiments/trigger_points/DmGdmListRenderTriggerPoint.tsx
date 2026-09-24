// Module ID: 16477
// Function ID: 16478
// Name: DmGdmListRenderTriggerPoint
// Dependencies: [4745, 11159, 2]

// Module 16477 (DmGdmListRenderTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4745 */;
import Helpers from "Helpers" /* 11159 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/DmGdmListRenderTriggerPoint.tsx");

export const DmGdmListRenderTriggerPoint = commonTriggerPointConfiguration;
