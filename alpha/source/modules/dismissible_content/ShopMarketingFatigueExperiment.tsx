// Module ID: 4813
// Function ID: 4814
// Name: ShopMarketingFatigueExperiment
// Dependencies: [1452, 2]
// Exports: getShopMarketingEnforcesFatigue

// Module 4813 (ShopMarketingFatigueExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-shop-marketing-fatigue", kind: "user", defaultConfig: { enforceFatigue: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enforceFatigue: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/dismissible_content/ShopMarketingFatigueExperiment.tsx");

export const getShopMarketingEnforcesFatigue = function getShopMarketingEnforcesFatigue() {
  return config.getConfig({ location: "getShopMarketingEnforcesFatigue" }).enforceFatigue;
};
