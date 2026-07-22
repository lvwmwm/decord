// Module ID: 13855
// Function ID: 104792
// Name: BountiesShopCarouselExperimentVariation
// Dependencies: []

// Module 13855 (BountiesShopCarouselExperimentVariation)
let obj = { BASE: 0, [0]: "BASE", POPULARITY: 1, [1]: "POPULARITY", RECENCY: 2, [2]: "RECENCY" };
const _module = require(dependencyMap[0]);
obj = { y: -660762798, DateToSystemTimezoneSetter: 972837289 };
obj = { enabled: false, variation: obj.BASE };
obj.defaultConfig = obj;
obj.variations = { [1]: { enabled: true, variation: obj.POPULARITY }, [2]: { enabled: true, variation: obj.RECENCY } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/quests/experiments/BountiesShopCarouselExperiment.tsx");

export const BountiesShopCarouselExperimentVariation = obj;
export const BountiesShopCarouselExperiment = apexExperiment;
