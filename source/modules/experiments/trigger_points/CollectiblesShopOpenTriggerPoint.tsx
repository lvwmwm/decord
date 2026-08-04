// Module ID: 14725
// Function ID: 14726
// Name: commonTriggerPointConfiguration
// Dependencies: [4200, 7297, 2]

// Module 14725 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.COLLECTIBLES_SHOP_OPEN, { location: "collectibles shop open" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/CollectiblesShopOpenTriggerPoint.tsx");

export const CollectiblesShopOpenTriggerPoint = commonTriggerPointConfiguration;
