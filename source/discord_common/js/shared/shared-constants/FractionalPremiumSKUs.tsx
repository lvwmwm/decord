// Module ID: 656
// Function ID: 8023
// Name: set
// Dependencies: [2]

// Module 656 (set)
import set from "set";

const obj = {};
let set = new Set(["1271583180566036480", "1298745361602449479", "1333912750274904064"]);
obj.ALL = set;
obj.ACTIVE_FRACTIONAL_PREMIUM_SKUS = new Set(["1271583180566036480", "1298745361602449479", "1333912750274904064"]);
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/FractionalPremiumSKUs.tsx");

export const FractionalPremiumSKUs = { PREMIUM_TIER_2_1_HOUR: "1271583180566036480", PREMIUM_TIER_2_1_DAY: "1298745361602449479", PREMIUM_TIER_2_3_DAY: "1333912750274904064" };
export const FractionalPremiumSKUsSets = obj;
