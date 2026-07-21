// Module ID: 656
// Function ID: 8023
// Name: set
// Dependencies: []

// Module 656 (set)
const obj = { ALL: new Set([true, true, true]) };
const set = new Set([true, true, true]);
obj.ACTIVE_FRACTIONAL_PREMIUM_SKUS = new Set([true, true, true]);
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/shared-constants/FractionalPremiumSKUs.tsx");

export const FractionalPremiumSKUs = { PREMIUM_TIER_2_1_HOUR: "1271583180566036480", PREMIUM_TIER_2_1_DAY: "1298745361602449479", PREMIUM_TIER_2_3_DAY: "1333912750274904064" };
export const FractionalPremiumSKUsSets = obj;
