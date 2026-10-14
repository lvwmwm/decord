// Module ID: 16828
// Function ID: 16829
// Name: DmGdmListRenderTriggerPoint
// Dependencies: [5019, 10175, 2]

// Module 16828 (DmGdmListRenderTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5019 */;
import Helpers from "Helpers" /* 10175 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/DmGdmListRenderTriggerPoint.tsx");

export const DmGdmListRenderTriggerPoint = commonTriggerPointConfiguration;
