// Module ID: 14718
// Function ID: 14719
// Name: OpenNitroTriggerPoint
// Dependencies: [5177, 10541, 2]

// Module 14718 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5177 */;
import Helpers from "Helpers" /* 10541 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
