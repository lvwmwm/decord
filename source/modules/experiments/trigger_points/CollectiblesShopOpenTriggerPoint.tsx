// Module ID: 14349
// Function ID: 108358
// Name: commonTriggerPointConfiguration
// Dependencies: []

// Module 14349 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require(dependencyMap[1]).CommonTriggerPointConfiguration([], require(dependencyMap[0]).CommonTriggerPoints.COLLECTIBLES_SHOP_OPEN, { location: "collectibles shop open" });
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/experiments/trigger_points/CollectiblesShopOpenTriggerPoint.tsx");

export const CollectiblesShopOpenTriggerPoint = commonTriggerPointConfiguration;
