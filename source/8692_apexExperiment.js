// Module ID: 8692
// Function ID: 68853
// Name: apexExperiment
// Dependencies: []

// Module 8692 (apexExperiment)
let obj = { CONTROL: 0, [0]: "CONTROL", OPEN_PURCHASE: 1, [1]: "OPEN_PURCHASE", PAID_PREMIUM_SUBSCRIBERS_ONLY: 2, [2]: "PAID_PREMIUM_SUBSCRIBERS_ONLY" };
const _module = require(dependencyMap[0]);
obj = { bucket: obj.CONTROL };
obj = { bucket: obj.CONTROL };
const apexExperiment = _module.createApexExperiment({ defaultConfig: obj, variations: { [0]: obj, [1]: { bucket: obj.OPEN_PURCHASE }, [2]: { bucket: obj.PAID_PREMIUM_SUBSCRIBERS_ONLY } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFramesPurchaseExperiment.tsx");

export default apexExperiment;
export const ProfileFramesPurchaseBucket = obj;
