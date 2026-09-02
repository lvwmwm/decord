// Module ID: 15636
// Function ID: 15637
// Name: commonTriggerPointConfiguration
// Dependencies: [4392, 10804, 2]

// Module 15636 (commonTriggerPointConfiguration)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4392 */;
import registeredExperimentIds from "registeredExperimentIds" /* 10804 */;

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.COLLECTIBLES_SHOP_OPEN, { location: "collectibles shop open" });
const result = set.fileFinishedImporting("modules/experiments/trigger_points/CollectiblesShopOpenTriggerPoint.tsx");

export const CollectiblesShopOpenTriggerPoint = commonTriggerPointConfiguration;
