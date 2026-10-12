// Module ID: 16485
// Function ID: 16486
// Name: DmGdmListRenderTriggerPoint
// Dependencies: [5017, 10165, 2]

// Module 16485 (DmGdmListRenderTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5017 */;
import Helpers from "Helpers" /* 10165 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/DmGdmListRenderTriggerPoint.tsx");

export const DmGdmListRenderTriggerPoint = commonTriggerPointConfiguration;
