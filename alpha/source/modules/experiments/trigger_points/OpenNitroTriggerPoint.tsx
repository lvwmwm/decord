// Module ID: 15029
// Function ID: 15030
// Name: OpenNitroTriggerPoint
// Dependencies: [5227, 10599, 2]

// Module 15029 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5227 */;
import Helpers from "Helpers" /* 10599 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
