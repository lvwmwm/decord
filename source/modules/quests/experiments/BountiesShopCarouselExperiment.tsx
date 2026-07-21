// Module ID: 13845
// Function ID: 104720
// Name: BountiesShopCarouselExperimentVariation
// Dependencies: []

// Module 13845 (BountiesShopCarouselExperimentVariation)
let obj = { BASE: 0, [0]: "BASE", POPULARITY: 1, [1]: "POPULARITY", RECENCY: 2, [2]: "RECENCY" };
const _module = require(dependencyMap[0]);
obj = { enabled: false, variation: obj.BASE };
obj = { enabled: true, variation: obj.POPULARITY };
const apexExperiment = _module.createApexExperiment({ defaultConfig: obj, variations: { [1]: obj, [2]: { enabled: true, variation: obj.RECENCY } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/quests/experiments/BountiesShopCarouselExperiment.tsx");

export const BountiesShopCarouselExperimentVariation = obj;
export const BountiesShopCarouselExperiment = apexExperiment;
