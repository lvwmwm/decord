// Module ID: 14660
// Function ID: 14661
// Name: OpenNitroTriggerPoint
// Dependencies: [5173, 10522, 2]

// Module 14660 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5173 */;
import Helpers from "Helpers" /* 10522 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
