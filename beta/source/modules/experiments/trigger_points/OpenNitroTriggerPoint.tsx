// Module ID: 13752
// Function ID: 13753
// Name: OpenNitroTriggerPoint
// Dependencies: [4704, 11102, 2]

// Module 13752 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4704 */;
import Helpers from "Helpers" /* 11102 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
