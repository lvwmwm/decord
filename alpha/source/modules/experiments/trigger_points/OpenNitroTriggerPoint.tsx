// Module ID: 14531
// Function ID: 14532
// Name: OpenNitroTriggerPoint
// Dependencies: [5113, 10468, 2]

// Module 14531 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5113 */;
import Helpers from "Helpers" /* 10468 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
