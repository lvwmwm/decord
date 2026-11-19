// Module ID: 17618
// Function ID: 17619
// Name: DmGdmListRenderTriggerPoint
// Dependencies: [5410, 9119, 2]

// Module 17618 (DmGdmListRenderTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5410 */;
import Helpers from "Helpers" /* 9119 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/DmGdmListRenderTriggerPoint.tsx");

export const DmGdmListRenderTriggerPoint = commonTriggerPointConfiguration;
