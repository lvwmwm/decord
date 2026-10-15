// Module ID: 16785
// Function ID: 16786
// Name: CollectiblesShopOpenTriggerPoint
// Dependencies: [5073, 10388, 2]

// Module 16785 (CollectiblesShopOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5073 */;
import Helpers from "Helpers" /* 10388 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.COLLECTIBLES_SHOP_OPEN, { location: "collectibles shop open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/CollectiblesShopOpenTriggerPoint.tsx");

export const CollectiblesShopOpenTriggerPoint = commonTriggerPointConfiguration;
