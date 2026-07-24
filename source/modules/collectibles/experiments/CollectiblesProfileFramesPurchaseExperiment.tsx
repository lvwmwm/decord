// Module ID: 8745
// Function ID: 69146
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 8745 (apexExperiment)
import ApexExperiment from "ApexExperiment";

let obj = { CONTROL: 0, [0]: "CONTROL", OPEN_PURCHASE: 1, [1]: "OPEN_PURCHASE", PAID_PREMIUM_SUBSCRIBERS_ONLY: 2, [2]: "PAID_PREMIUM_SUBSCRIBERS_ONLY" };
obj = { name: "2026-04-collectibles-profile-frames-purchase", kind: "user" };
obj.defaultConfig = { bucket: obj.CONTROL };
obj = { bucket: obj.CONTROL };
obj.variations = { [0]: obj, [1]: { bucket: obj.OPEN_PURCHASE }, [2]: { bucket: obj.PAID_PREMIUM_SUBSCRIBERS_ONLY } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFramesPurchaseExperiment.tsx");

export default apexExperiment;
export const ProfileFramesPurchaseBucket = obj;
