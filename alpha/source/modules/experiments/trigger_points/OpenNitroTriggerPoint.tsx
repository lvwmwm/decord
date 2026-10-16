// Module ID: 14453
// Function ID: 14454
// Name: OpenNitroTriggerPoint
// Dependencies: [5076, 10404, 2]

// Module 14453 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5076 */;
import Helpers from "Helpers" /* 10404 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
