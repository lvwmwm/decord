// Module ID: 15589
// Function ID: 15590
// Name: OpenNitroTriggerPoint
// Dependencies: [5365, 10862, 2]

// Module 15589 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5365 */;
import Helpers from "Helpers" /* 10862 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
