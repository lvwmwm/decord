// Module ID: 14019
// Function ID: 107271
// Name: BountiesShopCarouselExperimentVariation
// Dependencies: [1428, 2]

// Module 14019 (BountiesShopCarouselExperimentVariation)
import ApexExperiment from "ApexExperiment";

let obj = { BASE: 0, [0]: "BASE", POPULARITY: 1, [1]: "POPULARITY", RECENCY: 2, [2]: "RECENCY" };
obj = { name: "2026-06-bounties-shop-carousel", kind: "user" };
obj = { enabled: false, variation: obj.BASE };
obj.defaultConfig = obj;
obj.variations = { [1]: { enabled: true, variation: obj.POPULARITY }, [2]: { enabled: true, variation: obj.RECENCY } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/quests/experiments/BountiesShopCarouselExperiment.tsx");

export const BountiesShopCarouselExperimentVariation = obj;
export const BountiesShopCarouselExperiment = apexExperiment;
