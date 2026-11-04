// Module ID: 18362
// Function ID: 18363
// Name: DmGdmListRenderTriggerPoint
// Dependencies: [5363, 10856, 2]

// Module 18362 (DmGdmListRenderTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5363 */;
import Helpers from "Helpers" /* 10856 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/DmGdmListRenderTriggerPoint.tsx");

export const DmGdmListRenderTriggerPoint = commonTriggerPointConfiguration;
