// Module ID: 18645
// Function ID: 18646
// Name: DmGdmListRenderTriggerPoint
// Dependencies: [5470, 9649, 2]

// Module 18645 (DmGdmListRenderTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5470 */;
import Helpers from "Helpers" /* 9649 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/DmGdmListRenderTriggerPoint.tsx");

export const DmGdmListRenderTriggerPoint = commonTriggerPointConfiguration;
