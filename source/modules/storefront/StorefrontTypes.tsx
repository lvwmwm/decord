// Module ID: 5613
// Function ID: 47834
// Name: StorefrontPromotionRewardType
// Dependencies: [284214097]

// Module 5613 (StorefrontPromotionRewardType)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/storefront/StorefrontTypes.tsx");

export const StorefrontPromotionRewardType = { DISCOUNT: 1, [1]: "DISCOUNT", FIXED_PRICE: 2, [2]: "FIXED_PRICE", ACTION: 3, [3]: "ACTION" };
export const StorefrontDiscountTypes = { FLAT: 1, [1]: "FLAT", PERCENT: 2, [2]: "PERCENT" };
export const StorefrontPurchaseType = { SELF_PURCHASE: 0, [0]: "SELF_PURCHASE", GIFT: 1, [1]: "GIFT" };
export const StorefrontPriceVariant = { NORMAL: 0, [0]: "NORMAL", DISCOUNTED: 1, [1]: "DISCOUNTED" };
