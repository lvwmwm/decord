// Module ID: 18384
// Function ID: 18385
// Name: DmGdmListRenderTriggerPoint
// Dependencies: [5385, 10814, 2]

// Module 18384 (DmGdmListRenderTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5385 */;
import Helpers from "Helpers" /* 10814 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/DmGdmListRenderTriggerPoint.tsx");

export const DmGdmListRenderTriggerPoint = commonTriggerPointConfiguration;
