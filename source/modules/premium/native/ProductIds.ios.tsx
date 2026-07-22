// Module ID: 6649
// Function ID: 51077
// Name: SubscriptionPlans
// Dependencies: []
// Exports: getPlanIdForGift, getProductIdForGift

// Module 6649 (SubscriptionPlans)
let PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID;
let PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID;
let PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
let PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID;
let PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
let PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
let PremiumTypes;
let SubscriptionIntervalTypes;
let SubscriptionPlans;
const _module = require(dependencyMap[0]);
({ PremiumTypes, SubscriptionIntervalTypes, SubscriptionPlans } = _module);
let obj = { -1298326025: -1075773439, -291407389: -162463742, -889765512: -868150803, 1632240496: 1912603018, 102585671: 343, -1133158609: 112, 54397491: -1429061119, 1459896930: -1075576831, -576654631: -162463742, -1431393813: -1556016659, -1577797441: 822084072, 1952577354: 0, 1375270225: 1079205888, 2103510466: 7793, 1629071697: 205652224, -268676734: 671088944, -1135415199: 1358955053, -77191457: 1091694070, -1318851380: 125091, 1867404248: 50, -917855159: 1449132032, -170519856: 64, 1763430374: 1103101952, -124014122: 1547829568, 762780617: -369098172, -904660717: 1358955199, 1519127530: 1091694070, -19021228: 125091, -910145435: 20850, 1183891783: 5120, 140609760: -1170079488, 1989983058: 1660944812, -861865111: 1358954997, -321366357: 544402934, -732865438: 637534208, 1359503788: 1375731712 };
({ PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID, PREMIUM_TIER_2_REFERRAL_TRIAL_ID, PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID, PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID } = _module);
obj.GENERIC_SUBSCRIPTION = require(dependencyMap[1]).AppleProductIds.GENERIC_SUBSCRIPTION;
obj.GENERIC_CONSUMABLE = require(dependencyMap[1]).AppleProductIds.GENERIC_CONSUMABLE;
const frozen = Object.freeze(obj);
const items = [require(dependencyMap[1]).AppleProductIds.GENERIC_SUBSCRIPTION, require(dependencyMap[1]).AppleProductIds.GENERIC_CONSUMABLE];
obj = { [SubscriptionPlans.PREMIUM_MONTH_TIER_0]: frozen.PREMIUM_TIER_0_MONTHLY, [SubscriptionPlans.PREMIUM_MONTH_TIER_1]: frozen.PREMIUM_TIER_1_MONTHLY, [SubscriptionPlans.PREMIUM_MONTH_TIER_2]: frozen.PREMIUM_TIER_2_MONTHLY, [SubscriptionPlans.PREMIUM_MONTH_GUILD]: frozen.PREMIUM_GUILD_1_MONTHLY, [SubscriptionPlans.PREMIUM_YEAR_TIER_0]: frozen.PREMIUM_TIER_0_YEARLY, [SubscriptionPlans.PREMIUM_YEAR_TIER_1]: frozen.PREMIUM_TIER_1_YEARLY, [SubscriptionPlans.PREMIUM_YEAR_TIER_2]: frozen.PREMIUM_TIER_2_YEARLY };
obj = { productId: frozen.PREMIUM_MONTH_TIER_1, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 0, premiumTier: PremiumTypes.TIER_1, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_1, additionalPlans: [], isDeprecated: true };
const items1 = [{ quantity: 1, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
const items2 = [{ quantity: 1, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD }];
const items3 = [{ quantity: 2, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
const items4 = [{ quantity: 2, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD }];
const items5 = [{ quantity: 3, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
const items6 = [{ quantity: 3, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD }];
const items7 = [{ quantity: 5, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
const items8 = [{ quantity: 5, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD }];
const items9 = [{ quantity: 10, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
const items10 = [{ quantity: 10, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD }];
const items11 = [{ quantity: 13, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
const items12 = [{ quantity: 13, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD }];
const items13 = [{ quantity: 28, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
const items14 = [{ quantity: 28, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD }];
const items15 = [{ quantity: 1, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
const items16 = [{ quantity: 1, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD }];
const items17 = [{ quantity: 1, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
const items18 = [{ quantity: 2, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
const frozen1 = Object.freeze(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/premium/native/ProductIds.ios.tsx");

export const ProductIds = frozen;
export const GenericProductIds = items;
export const BasePlanIdToProductId = frozen1;
export const IAPProductIds = [];
export const SubscriptionProductIds = [];
export const AppStorePremiumProductIdsToPremiumBundledItems = { [frozen.PREMIUM_MONTH_TIER_1]: obj, [frozen.PREMIUM_YEAR_TIER_1]: { productId: frozen.PREMIUM_YEAR_TIER_1, interval: SubscriptionIntervalTypes.YEAR, numPremiumGuild: 0, premiumTier: PremiumTypes.TIER_1, basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_1, additionalPlans: [], isDeprecated: true }, [frozen.PREMIUM_MONTH_TIER_2]: { productId: frozen.PREMIUM_MONTH_TIER_2, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 0, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2, additionalPlans: [], isDeprecated: true }, [frozen.PREMIUM_YEAR_TIER_2]: { productId: frozen.PREMIUM_YEAR_TIER_2, interval: SubscriptionIntervalTypes.YEAR, numPremiumGuild: 0, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2, additionalPlans: [], isDeprecated: true }, [frozen.PREMIUM_TIER_2_MONTHLY]: { productId: frozen.PREMIUM_TIER_2_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 0, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2, additionalPlans: [] }, [frozen.PREMIUM_TIER_2_YEARLY]: { productId: frozen.PREMIUM_TIER_2_YEARLY, interval: SubscriptionIntervalTypes.YEAR, numPremiumGuild: 0, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2, additionalPlans: [] }, [frozen.PREMIUM_TIER_1_MONTHLY]: { productId: frozen.PREMIUM_TIER_1_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 0, premiumTier: PremiumTypes.TIER_1, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_1, additionalPlans: [] }, [frozen.PREMIUM_TIER_1_YEARLY]: { productId: frozen.PREMIUM_TIER_1_YEARLY, interval: SubscriptionIntervalTypes.YEAR, numPremiumGuild: 0, premiumTier: PremiumTypes.TIER_1, basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_1, additionalPlans: [] }, [frozen.PREMIUM_TIER_0_MONTHLY]: { productId: frozen.PREMIUM_TIER_0_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 0, premiumTier: PremiumTypes.TIER_0, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_0, additionalPlans: [] }, [frozen.PREMIUM_TIER_0_YEARLY]: { productId: frozen.PREMIUM_TIER_0_YEARLY, interval: SubscriptionIntervalTypes.YEAR, numPremiumGuild: 0, premiumTier: PremiumTypes.TIER_0, basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_0, additionalPlans: [] }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 1, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2, additionalPlans: items1 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY, interval: SubscriptionIntervalTypes.YEAR, numPremiumGuild: 1, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2, additionalPlans: items2 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_2_MONTHLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_2_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 2, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2, additionalPlans: items3 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_2_YEARLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_2_YEARLY, interval: SubscriptionIntervalTypes.YEAR, numPremiumGuild: 2, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2, additionalPlans: items4 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_3_MONTHLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_3_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 3, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2, additionalPlans: items5 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_3_YEARLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_3_YEARLY, interval: SubscriptionIntervalTypes.YEAR, numPremiumGuild: 3, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2, additionalPlans: items6 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_5_MONTHLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_5_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 5, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2, additionalPlans: items7 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_5_YEARLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_5_YEARLY, interval: SubscriptionIntervalTypes.YEAR, numPremiumGuild: 5, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2, additionalPlans: items8 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_10_MONTHLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_10_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 10, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2, additionalPlans: items9 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_10_YEARLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_10_YEARLY, interval: SubscriptionIntervalTypes.YEAR, numPremiumGuild: 10, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2, additionalPlans: items10 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_13_MONTHLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_13_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 13, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2, additionalPlans: items11 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_13_YEARLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_13_YEARLY, interval: SubscriptionIntervalTypes.YEAR, numPremiumGuild: 13, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2, additionalPlans: items12 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_28_MONTHLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_28_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 28, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2, additionalPlans: items13 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_28_YEARLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_28_YEARLY, interval: SubscriptionIntervalTypes.YEAR, numPremiumGuild: 28, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2, additionalPlans: items14 }, [frozen.PREMIUM_TIER_1_PREMIUM_GUILD_1_MONTHLY]: { productId: frozen.PREMIUM_TIER_1_PREMIUM_GUILD_1_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 1, premiumTier: PremiumTypes.TIER_1, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_1, additionalPlans: items15 }, [frozen.PREMIUM_TIER_1_PREMIUM_GUILD_1_YEARLY]: { productId: frozen.PREMIUM_TIER_1_PREMIUM_GUILD_1_YEARLY, interval: SubscriptionIntervalTypes.YEAR, numPremiumGuild: 1, premiumTier: PremiumTypes.TIER_1, basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_1, additionalPlans: items16 }, [frozen.PREMIUM_GUILD_1_MONTHLY]: { productId: frozen.PREMIUM_GUILD_1_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 1, premiumTier: null, basePlanId: SubscriptionPlans.NONE_MONTH, additionalPlans: items17 }, [frozen.PREMIUM_GUILD_2_MONTHLY]: { productId: frozen.PREMIUM_GUILD_2_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 2, premiumTier: null, basePlanId: SubscriptionPlans.NONE_MONTH, additionalPlans: items18 } };
export const TrialIdToProductOfferId = { [PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID]: { [frozen.PREMIUM_TIER_2_MONTHLY]: "premium_tier_2_monthly_likelihood", [frozen.PREMIUM_TIER_2_YEARLY]: "premium_tier_2_yearly_likelihood" }, [PREMIUM_TIER_2_REACTIVATION_TRIAL_ID]: { [frozen.PREMIUM_TIER_2_MONTHLY]: "premium_tier_2_monthly_reactivation", [frozen.PREMIUM_TIER_2_YEARLY]: "premium_tier_2_yearly_reactivation" }, [PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID]: { [frozen.PREMIUM_TIER_0_MONTHLY]: "premium_tier_0_monthly_likelihood", [frozen.PREMIUM_TIER_0_YEARLY]: "premium_tier_0_yearly_likelihood" }, [PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID]: { [frozen.PREMIUM_TIER_2_MONTHLY]: "premium_tier_2_monthly_q4_drop", [frozen.PREMIUM_TIER_2_YEARLY]: "premium_tier_2_yearly_q4_drop" }, [PREMIUM_TIER_2_REFERRAL_TRIAL_ID]: { [frozen.PREMIUM_TIER_2_MONTHLY]: "premium_tier_2_monthly_referral_trial", [frozen.PREMIUM_TIER_2_YEARLY]: "premium_tier_2_yearly_referral_trial" }, [PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID]: { [frozen.PREMIUM_TIER_2_MONTHLY]: "premium_tier_2_monthly_hfu_two_week_trial", [frozen.PREMIUM_TIER_2_YEARLY]: "premium_tier_2_yearly_hfu_two_week_trial" } };
export const DiscountIdToProductOfferId = { [PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID]: { [frozen.PREMIUM_TIER_2_MONTHLY]: "premium-tier-2-monthly-likelihood-discount" }, [PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID]: { [frozen.PREMIUM_TIER_2_MONTHLY]: "premium-tier-2-monthly-reengagement-discount" } };
export const BOGO_OFFER_ID = "premium-tier-2-monthly-bogo";
export const getProductIdForGift = function getProductIdForGift(arg0) {
  if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 === arg0) {
    return frozen.PREMIUM_GIFT_MONTH_TIER_0;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_0 === arg0) {
    return frozen.PREMIUM_GIFT_YEAR_TIER_0;
  } else if (SubscriptionPlans.PREMIUM_MONTH_TIER_1 === arg0) {
    return frozen.PREMIUM_GIFT_MONTH_TIER_1;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_1 === arg0) {
    return frozen.PREMIUM_GIFT_YEAR_TIER_1;
  } else if (SubscriptionPlans.PREMIUM_MONTH_TIER_2 === arg0) {
    return frozen.PREMIUM_GIFT_MONTH_TIER_2;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_2 === arg0) {
    return frozen.PREMIUM_GIFT_YEAR_TIER_2;
  } else {
    const _Error = Error;
    const error = new Error("Tried to get Product for Plan not configured for IAP!");
    throw error;
  }
};
export const getPlanIdForGift = function getPlanIdForGift(arg0) {
  if (frozen.PREMIUM_GIFT_MONTH_TIER_0 === arg0) {
    return SubscriptionPlans.PREMIUM_MONTH_TIER_0;
  } else if (frozen.PREMIUM_GIFT_YEAR_TIER_0 === arg0) {
    return SubscriptionPlans.PREMIUM_YEAR_TIER_0;
  } else if (frozen.PREMIUM_GIFT_MONTH_TIER_1 === arg0) {
    return SubscriptionPlans.PREMIUM_MONTH_TIER_1;
  } else if (frozen.PREMIUM_GIFT_YEAR_TIER_1 === arg0) {
    return SubscriptionPlans.PREMIUM_YEAR_TIER_1;
  } else if (frozen.PREMIUM_GIFT_MONTH_TIER_2 === arg0) {
    return SubscriptionPlans.PREMIUM_MONTH_TIER_2;
  } else if (frozen.PREMIUM_GIFT_YEAR_TIER_2 === arg0) {
    return SubscriptionPlans.PREMIUM_YEAR_TIER_2;
  } else {
    const _Error = Error;
    const error = new Error("Tried to get Plan for Product not configured for IAP!");
    throw error;
  }
};
