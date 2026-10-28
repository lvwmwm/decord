// Module ID: 17513
// Function ID: 17514
// Name: DmGdmListRenderTriggerPoint
// Dependencies: [5223, 10596, 2]

// Module 17513 (DmGdmListRenderTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5223 */;
import Helpers from "Helpers" /* 10596 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/DmGdmListRenderTriggerPoint.tsx");

export const DmGdmListRenderTriggerPoint = commonTriggerPointConfiguration;
