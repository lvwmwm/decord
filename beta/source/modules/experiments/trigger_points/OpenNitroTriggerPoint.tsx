// Module ID: 13762
// Function ID: 13763
// Name: OpenNitroTriggerPoint
// Dependencies: [4707, 11144, 2]

// Module 13762 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4707 */;
import Helpers from "Helpers" /* 11144 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
