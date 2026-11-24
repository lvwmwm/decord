// Module ID: 13729
// Function ID: 13730
// Name: OpenNitroTriggerPoint
// Dependencies: [5535, 9119, 2]

// Module 13729 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5535 */;
import Helpers from "Helpers" /* 9119 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
