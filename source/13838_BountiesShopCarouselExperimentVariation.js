// Module ID: 13838
// Function ID: 104697
// Name: BountiesShopCarouselExperimentVariation
// Dependencies: []

// Module 13838 (BountiesShopCarouselExperimentVariation)
let obj = { BASE: 0, [0]: "BASE", POPULARITY: 1, [1]: "POPULARITY", RECENCY: 2, [2]: "RECENCY" };
const _module = require(dependencyMap[0]);
obj = { -1269606814: "UnsendIcon", -1845285747: "png" };
obj = { enabled: false, variation: obj.BASE };
obj.defaultConfig = obj;
obj.variations = { [1]: { enabled: true, variation: obj.POPULARITY }, [2]: { enabled: true, variation: obj.RECENCY } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/quests/experiments/BountiesShopCarouselExperiment.tsx");

export const BountiesShopCarouselExperimentVariation = obj;
export const BountiesShopCarouselExperiment = apexExperiment;
