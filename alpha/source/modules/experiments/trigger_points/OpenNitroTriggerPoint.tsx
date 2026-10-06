// Module ID: 13283
// Function ID: 13284
// Name: OpenNitroTriggerPoint
// Dependencies: [4783, 10553, 2]

// Module 13283 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4783 */;
import Helpers from "Helpers" /* 10553 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
