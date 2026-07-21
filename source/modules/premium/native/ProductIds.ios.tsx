// Module ID: 6649
// Function ID: 51058
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
let obj = { 1890168626: -1081606143, 1605927549: -716111870, 1632498081: -1086254665, -119385740: 1912603216, -2015519917: 343, -792042333: 112, -148139246: -1436007935, -1633291569: -1081409535, -1007121999: -716111870, 66650651: -1002368585, 1304855545: 822084176, 290127852: 0, -1677796414: 1079205888, -137782071: 7793, -1471726656: 1447166208, 1373921672: 1308623152, 140613942: 1358955052, 1436017745: 1091680213, -1962010666: 151748, 765307549: 50, 56853386: 1449132032, -1387186658: 64, 1377198337: 1103101952, 50856567: 759300416, -2010168733: -1862270396, 839014482: 1358955199, 252404999: 1091680213, 1982268418: 151748, 1: 20850, 2: 5120, 3: -1102970624, 4: 889192876, 6: 1358954998, 5: 544389077, 1913719633: 637534208, 9: 1375731712 };
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
