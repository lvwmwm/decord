// Module ID: 14124
// Function ID: 14125
// Name: OpenNitroTriggerPoint
// Dependencies: [5019, 10175, 2]

// Module 14124 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5019 */;
import Helpers from "Helpers" /* 10175 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
