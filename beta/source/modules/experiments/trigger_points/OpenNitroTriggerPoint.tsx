// Module ID: 13000
// Function ID: 13001
// Name: OpenNitroTriggerPoint
// Dependencies: [4753, 10309, 2]

// Module 13000 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4753 */;
import Helpers from "Helpers" /* 10309 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
