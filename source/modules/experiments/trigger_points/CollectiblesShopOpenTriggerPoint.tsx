// Module ID: 14580
// Function ID: 111214
// Name: commonTriggerPointConfiguration
// Dependencies: [4080, 6276, 2]

// Module 14580 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("CommonTriggerPointConfiguration").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.COLLECTIBLES_SHOP_OPEN, { location: "collectibles shop open" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/CollectiblesShopOpenTriggerPoint.tsx");

export const CollectiblesShopOpenTriggerPoint = commonTriggerPointConfiguration;
