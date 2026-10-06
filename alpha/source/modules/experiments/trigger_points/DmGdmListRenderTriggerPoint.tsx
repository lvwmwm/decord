// Module ID: 16016
// Function ID: 16017
// Name: DmGdmListRenderTriggerPoint
// Dependencies: [4783, 10553, 2]

// Module 16016 (DmGdmListRenderTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4783 */;
import Helpers from "Helpers" /* 10553 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/DmGdmListRenderTriggerPoint.tsx");

export const DmGdmListRenderTriggerPoint = commonTriggerPointConfiguration;
