// Module ID: 14421
// Function ID: 14422
// Name: OpenNitroTriggerPoint
// Dependencies: [5073, 10388, 2]

// Module 14421 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5073 */;
import Helpers from "Helpers" /* 10388 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
