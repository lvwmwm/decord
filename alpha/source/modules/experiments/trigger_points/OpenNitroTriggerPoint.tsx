// Module ID: 15304
// Function ID: 15305
// Name: OpenNitroTriggerPoint
// Dependencies: [5234, 10658, 2]

// Module 15304 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5234 */;
import Helpers from "Helpers" /* 10658 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
