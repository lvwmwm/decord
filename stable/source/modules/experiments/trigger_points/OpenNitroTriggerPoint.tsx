// Module ID: 14802
// Function ID: 14803
// Name: OpenNitroTriggerPoint
// Dependencies: [5223, 10596, 2]

// Module 14802 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5223 */;
import Helpers from "Helpers" /* 10596 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
