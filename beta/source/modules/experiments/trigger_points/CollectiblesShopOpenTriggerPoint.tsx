// Module ID: 15409
// Function ID: 15410
// Name: CollectiblesShopOpenTriggerPoint
// Dependencies: [4753, 10309, 2]

// Module 15409 (CollectiblesShopOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4753 */;
import Helpers from "Helpers" /* 10309 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.COLLECTIBLES_SHOP_OPEN, { location: "collectibles shop open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/CollectiblesShopOpenTriggerPoint.tsx");

export const CollectiblesShopOpenTriggerPoint = commonTriggerPointConfiguration;
