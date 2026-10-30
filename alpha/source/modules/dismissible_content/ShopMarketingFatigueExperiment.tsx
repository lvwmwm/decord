// Module ID: 4847
// Function ID: 4848
// Name: ShopMarketingFatigueExperiment
// Dependencies: [1448, 2]
// Exports: getShopMarketingEnforcesFatigue

// Module 4847 (ShopMarketingFatigueExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-shop-marketing-fatigue", kind: "user", defaultConfig: { enforceFatigue: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enforceFatigue: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/dismissible_content/ShopMarketingFatigueExperiment.tsx");

export function getShopMarketingEnforcesFatigue() {
  return config.getConfig({ location: "getShopMarketingEnforcesFatigue" }).enforceFatigue;
}
