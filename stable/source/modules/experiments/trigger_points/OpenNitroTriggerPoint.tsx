// Module ID: 15657
// Function ID: 15658
// Name: OpenNitroTriggerPoint
// Dependencies: [5387, 10829, 2]

// Module 15657 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5387 */;
import Helpers from "Helpers" /* 10829 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
